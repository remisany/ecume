import {Schema, model, Model} from 'mongoose';

//import interfaces
import {INote} from "../interfaces/noteInterface";

const noteSchema: Schema<INote> = new Schema<INote>({
    title: {type: String, required: true},
    content: {type: Schema.Types.Mixed, required: true},
    date: {type: Date, default: Date.now, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
})

const Note: Model<INote> = model<INote, Model<INote>>('Note', noteSchema);

export default Note;
