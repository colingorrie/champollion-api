import mongoose, { Schema } from 'mongoose';

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

export default User;
