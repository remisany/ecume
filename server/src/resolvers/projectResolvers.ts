import {IResolvers} from "@graphql-tools/utils"
import {GraphQLError} from "graphql";

//import models
import Project from "../models/Project";
import User from "../models/User";

//import interfaces
import {IProject} from "../interfaces/projectInterface";

const projectResolvers: IResolvers = {
    Query: {
        findProject: async (_, __, {authToken}) => {
            try {

                const projects = await Project.find({user: authToken.id})  as Array<IProject> | null

                if (projects !== null) {
                    const returnProjects = projects.map(project => ({_id: project._id, title: project.title}))
                    return {code: "202", projects: returnProjects}
                }

                return {code: "202", projects: []}
            } catch {
                throw new GraphQLError('error', {extensions: {http: {status: 500}}})
            }
        },
    },
    Mutation: {
        createProject: async (_, data, {authToken}) => {
            try {
                const title = data.title

                const newProject = await Project.create({title: title, user: authToken.id})
                await User.findByIdAndUpdate(authToken.id, {$push: {projects: newProject._id}})

                return {code: "202", _id: newProject._id}
            } catch {
                throw new GraphQLError('error', {extensions: {http: {status: 500}}})
            }
        },
    }
};

export default projectResolvers;
