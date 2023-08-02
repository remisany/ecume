import {Schema} from "mongoose";

export interface IUser {
    _id: Schema.Types.ObjectId,
    email: string
    password: string
    notes: Array<Schema.Types.ObjectId>
    projects: Array<Schema.Types.ObjectId>
    hasChangePassword: Boolean
}

export interface IUserToken {
    _id: Schema.Types.ObjectId,
    email: string
    hasChangePassword: Boolean
}
