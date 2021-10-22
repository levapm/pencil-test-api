import { Types as mongooseTypes } from 'mongoose';
import L from '../../common/logger'
import * as HttpStatus from 'http-status-codes';
import * as errors from "../../common/errors";

import { Topic, ITopicModel } from '../models/topic';

export class TopicService {

  async all(): Promise<ITopicModel[]> {
    L.info('fetch all topics');

    const docs = await Topic
      .find()
      .lean()
      .exec() as ITopicModel[];

    return docs;
  }

  async search(criteria): Promise<ITopicModel[]> {
    L.info('fetch all topics by criteria');
    const docs = await Topic
      .find()
      .where(criteria ? { $or : [{parents: criteria}, {name: criteria}] } : {})
      .select({name: 1, _id: 0})
      .lean()
      .exec() as ITopicModel[];

    return docs;
  }

  async byId(id: string): Promise<ITopicModel> {
    L.info(`fetch Topic with id ${id}`);

    if (!mongooseTypes.ObjectId.isValid(id)) throw new errors.HttpError(HttpStatus.BAD_REQUEST);

    const doc = await Topic
      .findOne({ _id: id })
      .lean()
      .exec() as ITopicModel;

    if (!doc) throw new errors.HttpError(HttpStatus.NOT_FOUND);

    return doc;
  }


}

export default new TopicService();