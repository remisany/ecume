import {Schema} from "mongoose";

export interface INote {
    _id: Schema.Types.ObjectId
    title: string
    content: string | Buffer
    create: Date
    update: Date
    user: Schema.Types.ObjectId
    project: Schema.Types.ObjectId
    type: string
    inspiration: string
}
