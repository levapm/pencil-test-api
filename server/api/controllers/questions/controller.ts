import QuestionsService from '../../services/questions.service';
import TopicsService from '../../services/topics.service';
import { Request, Response, NextFunction } from 'express';
import * as HttpStatus from 'http-status-codes';

export class Controller {

  async all(req: Request, res: Response, next: NextFunction) {
    try {
      const docs = await QuestionsService.all();
      return res.status(HttpStatus.OK).json(docs);
    }
    catch (err) {
      return next(err);
    }
  }
  
  async search(req: Request, res: Response, next: NextFunction) {
    try {
      const topics = await TopicsService.search(req.query.q);
      const questions = await QuestionsService.search(topics.map(el => el.name));
      return res.status(HttpStatus.OK).json(questions);
    }
    catch (err) {
      return next(err);
    }
  }

  async byId(req: Request, res: Response, next: NextFunction) {
    try {
      const doc = await QuestionsService.byId(req.params.id);
      return res.status(HttpStatus.OK).json(doc);
    }
    catch (err) {
      return next(err);
    }
  }

}

export default new Controller();
