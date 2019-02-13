import * as mongoose from 'mongoose';

export const ClubSchema = new mongoose.Schema({
  name: String,
  description: String,
  email: String,
  // owners: User[],
});
