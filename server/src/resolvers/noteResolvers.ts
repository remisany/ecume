import {IResolvers} from "@graphql-tools/utils"
import {GraphQLError} from "graphql";
import * as admin from "firebase-admin";

//import constants
import generatePassword from "../constants/password";
import * as serviceAccount from "../firebase/serviceAccountKey.json";

const noteResolvers: IResolvers = {
    Mutation: {
        createNote: async (_, {input}, {authToken}) => {
            try {
                const app = await admin.initializeApp({
                    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
                    storageBucket: "gs://ecume-5310b.appspot.com/"
                })

                const bucket = await app.storage().bucket()

                const imageBuffer = Buffer.from(input.image, 'base64')
                const imageName = `${input.title.replace(" ", "").toLowerCase()}_${generatePassword()}.jpg`

                const file = await bucket.file(imageName);
                await file.save(imageBuffer);

                const imageURL = await file.getSignedUrl({action: 'read', expires: '',});
                console.log(imageURL)

                return {code: "202"}
            } catch {
                throw new GraphQLError('error', {extensions: {http: {status: 500}}})
            }
        },
    }
};

export default noteResolvers;
