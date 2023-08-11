import {Schema, model, Model} from 'mongoose';

//import interfaces
import {INote} from "../interfaces/noteInterface";

const noteSchema: Schema<INote> = new Schema<INote>({
    _id: {type: Schema.Types.ObjectId, auto: true},
    title: {type: String, required: true},
    content: {type: String},
    uri: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    project: {type: Schema.Types.ObjectId, ref: 'Project'},
    type: {type: Schema.Types.Number, required: true},
    inspiration: {type: Schema.Types.Number, required: true}
})

const Note: Model<INote> = model<INote, Model<INote>>('Note', noteSchema);

export default Note;
