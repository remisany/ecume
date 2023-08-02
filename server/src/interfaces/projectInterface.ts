import {Schema} from "mongoose";

export interface IProject {
    _id: Schema.Types.ObjectId,
    title: string;
    user: Schema.Types.ObjectId;
    notes: Array<Schema.Types.ObjectId>
}
