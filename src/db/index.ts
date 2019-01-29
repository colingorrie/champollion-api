import mongoose from 'mongoose';

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DATABASE as string);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', err => {
  console.error(`[🦆]: ${err.message}`);
});

export default mongoose;
