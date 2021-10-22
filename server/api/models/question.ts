import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export interface IQuestionModel extends mongoose.Document {
  question: string;
  anotations: Array<string>;
};

const schema = new Schema({
  question: String,
  anotations: [String]
});

schema.index({ question: 1 }, { unique: true });
schema.index({ anotations: 1 }, { unique: false, background: true });

export const Question = mongoose.model<IQuestionModel>('question', schema);