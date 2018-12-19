import { Document } from 'mongoose';

export interface Common extends Document {
  readonly id: String;
  readonly created: Date;
  readonly createdBy: String;
  readonly updated: Date;
  readonly updatedBy: String;
}
