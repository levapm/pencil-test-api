import mongoose from 'mongoose';

export default class Mongoose {
  connectionURI = `mongodb+srv://pencil_user:pencil_pass@cluster0.t6ri1.mongodb.net/questions_set?retryWrites=true&w=majority&authSource=questions_set`;

  constructor() {
  }

  init() {
    //Set up default mongoose connection
    mongoose.connect(this.connectionURI);

    // Get Mongoose to use the global promise library
    mongoose.Promise = global.Promise;

    //Get the default connection
    const db = mongoose.connection;

    //Bind connection to error event (to get notification of connection errors)
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  }
}