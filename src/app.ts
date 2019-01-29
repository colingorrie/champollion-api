import express from 'express';
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

const app: express.Application = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('[💁]: Hello from Express, running on port 3000!');
});

export default app;
