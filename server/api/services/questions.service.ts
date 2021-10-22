import { Types as mongooseTypes } from 'mongoose';
import L from '../../common/logger'
import * as HttpStatus from 'http-status-codes';
import * as errors from "../../common/errors";

import { Question, IQuestionModel } from '../models/question';

export class QuestionsService {

  async all(): Promise<IQuestionModel[]> {
    L.info('fetch all questions');

    const docs = await Question
      .find()
      .lean()
      .exec() as IQuestionModel[];

    return docs;
  }

  async search(topics): Promise<IQuestionModel[]> {
    L.info('fetch all questions by criteria');
    const docs = await Question
      .find()
      .where(topics ? {anotations: {$in : topics }} : {})
      .select({question: 1, _id: 0})
      .lean()
      .sort({_id: 1})
      .exec() as IQuestionModel[];

    return docs;
  }

  async byId(id: string): Promise<IQuestionModel> {
    L.info(`fetch Question with id ${id}`);

    if (!mongooseTypes.ObjectId.isValid(id)) throw new errors.HttpError(HttpStatus.BAD_REQUEST);

    const doc = await Question
      .findOne({ _id: id })
      .lean()
      .exec() as IQuestionModel;

    if (!doc) throw new errors.HttpError(HttpStatus.NOT_FOUND);

    return doc;
  }


}

export default new QuestionsService();