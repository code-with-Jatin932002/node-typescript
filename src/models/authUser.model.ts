import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const AuthUserSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: 'user' },
});

AuthUserSchema.pre('save', async function (next) {
  const user: any = this;
  if (!user.isModified('password')) return next();
  user.password = await bcrypt.hash(user.password, 10);
  next();
});

export const AuthUser = model('AuthUser', AuthUserSchema);
