import { Document } from 'mongoose';

export interface Common extends Document {
  readonly id: String;
  readonly createdAt: Date;
  readonly createdBy: String;
  readonly updatedAt: Date;
  readonly updatedBy: String;
}
