import {Schema} from "mongoose";

export interface IUser {
    email: string;
    username: string;
    password: string;
    notes: Array<Schema.Types.ObjectId>;
}
