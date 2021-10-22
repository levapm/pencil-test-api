import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export interface ITopicModel extends mongoose.Document {
  name: string;
  parents: Array<string>;
};

const schema = new Schema({
  name: String,
  parents: [String]
});

schema.index({ name: 1 }, { unique: true });
schema.index({ parents: 1 }, { unique: false, background: true });

export const Topic = mongoose.model<ITopicModel>('topic', schema);