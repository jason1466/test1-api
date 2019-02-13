import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  email: String,
  token: String,
  username: String,
  image: String,
  bio: String,
});
