import {Schema} from "mongoose";

export interface INote {
    _id: Schema.Types.ObjectId
    title: string
    content: string
    uri: string
    createdAt: Date
    updatedAt: Date
    user: Schema.Types.ObjectId
    project: Schema.Types.ObjectId
    type: string
    inspiration: string
}
