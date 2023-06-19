import {UserModel} from 'types/models';
import mongoose from 'mongoose';

/**
 * Generate an User schema.
 *
 * @return {UserModel} - database schema model.
 */
const User = new mongoose.Schema(
    {
      username: {
        type: String,
        required: [true, 'Please enter an username.'],
        index: true,
        unique: true,
      },

      password: String,
    },
    {timestamps: true},
);

export default mongoose.model<UserModel>('User', User);