import express, { Request, Response, Application } from 'express';
import mongoose, { Schema } from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config({ path: './.env.local' });

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DATABASE as string);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', err => {
  console.error(`[🦆]: ${err.message}`);
});

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: 'Please enter an email address.',
  },
});

const User = mongoose.model('User', userSchema);

class Routes {
  public applyTo(app: Application): void {
    app.route('/').get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'Hello World!',
      });
    });
  }
}

const app: Application = express();

const routes = new Routes();
routes.applyTo(app);

export default app;
