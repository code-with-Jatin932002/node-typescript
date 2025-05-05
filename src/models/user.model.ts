import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  role: String,
});

export const User = model('User', UserSchema);