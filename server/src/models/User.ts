import {Schema, model, Model} from 'mongoose';

//import interfaces
import {IUser} from "../interfaces/userInterface";

const userSchema: Schema<IUser> = new Schema<IUser>({
    _id: {type: Schema.Types.ObjectId, auto: true},
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    password: {type: String, required: true},
    hasChangePassword: {type: Boolean, default: false},
    notes: [{type: Schema.Types.ObjectId, ref: 'Note'}],
})

const User: Model<IUser> = model<IUser, Model<IUser>>('User', userSchema);

export default User;
