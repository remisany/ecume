import {Schema} from "mongoose";

export interface IUser {
    _id: Schema.Types.ObjectId,
    email: string
    password: string
    notes: Array<Schema.Types.ObjectId>
    hasChangePassword: Boolean
}
