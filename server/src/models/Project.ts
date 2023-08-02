import {Schema, model, Model} from 'mongoose';

//import interfaces
import {IProject} from "../interfaces/projectInterface";

const projectSchema: Schema<IProject> = new Schema<IProject>({
    _id: {type: Schema.Types.ObjectId, auto: true},
    title: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: "User"},
    notes: [{type: Schema.Types.ObjectId, ref: "Note"}],
})

const Project: Model<IProject> = model<IProject, Model<IProject>>('Project', projectSchema);

export default Project;
