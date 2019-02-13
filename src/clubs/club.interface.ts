import { Document } from 'mongoose';

export interface Club extends Document {
  readonly id: String;
  readonly createdAt: Date;
  readonly createdBy: String;
  readonly updatedAt: Date;
  readonly updatedBy: String;
  readonly name: String;
  readonly description: String;
  readonly email: String;
}
