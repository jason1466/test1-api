import * as mongoose from 'mongoose';

export const CommonSchema = new mongoose.Schema(
  {
    id: String,
    created: Date,
    createdBy: String,
    updated: Date,
    updatedBy: String,
  },
  { discriminatorKey: '_type' },
);
