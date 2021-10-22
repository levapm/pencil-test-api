import { Application } from 'express';
import questionsRouter from './api/controllers/questions/router'
export default function routes(app: Application): void {
  app.use('/api/v1/questions', questionsRouter);
};