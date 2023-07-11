import {Schema, model, Model} from 'mongoose';

//import interfaces
import {IUser} from "../interfaces/userInterface";

const userSchema: Schema<IUser> = new Schema<IUser>({
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    password: {type: String, required: true},
    notes: [{type: Schema.Types.ObjectId, ref: 'Note'}]
})

const User: Model<IUser> = model<IUser, Model<IUser>>('User', userSchema);

export default User;
