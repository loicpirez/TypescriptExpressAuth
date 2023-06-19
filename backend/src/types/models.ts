import IUser from 'interfaces/IUser';
import mongoose from 'mongoose';

export type UserModel = IUser & mongoose.Document;
