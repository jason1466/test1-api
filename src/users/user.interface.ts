import { Document } from 'mongoose';

export interface User extends Document {
  readonly id: String;
  readonly createdAt: Date;
  readonly createdBy: String;
  readonly updatedAt: Date;
  readonly updatedBy: String;
  readonly email: String;
  readonly token: String;
  readonly username: String;
  readonly image: String;
  readonly bio: String;
}
