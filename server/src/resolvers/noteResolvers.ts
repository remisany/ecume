import {IResolvers} from "@graphql-tools/utils"
import {GraphQLError} from "graphql";

//import constants
import generatePassword from "../constants/password";

//import models
import Note from "../models/Note";

//import firebase
import appFirebase from "../firebase/firebase-config";

const noteResolvers: IResolvers = {
    Mutation: {
        createNote: async (_, {input}, {authToken}) => {
            try {
                const newNote = {
                    title: input.title,
                    type: input.type,
                    inspiration: input.inspiration,
                    user: authToken.id,
                    ...input.project && {project: input.project},
                }

                if (input.type === 0) {
                    await Note.create({...newNote, content: input.content});
                } else {
                    const bucket = appFirebase.storage().bucket()
                    const imageBuffer = Buffer.from(input.image, 'base64')
                    const imageName = `${input.title.replace(" ", "").toLowerCase()}_${generatePassword()}.jpg`

                    const file = bucket.file(imageName);
                    await file.save(imageBuffer);

                    const imageURL = await file.getSignedUrl({action: 'read', expires: '01-01-2500'})

                    await Note.create({...newNote, uri: imageURL[0]})
                }

                return {code: "202"}
            } catch {
                throw new GraphQLError('error', {extensions: {http: {status: 500}}})
            }
        }
    }
};

export default noteResolvers;
