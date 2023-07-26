import jwt from "jsonwebtoken"
import {IncomingMessage} from "http";
import {GraphQLError} from "graphql";

//import interfaces
import {IUser} from "../interfaces/userInterface";
import {IToken} from "../interfaces/tokenInterface";

const generate = (user: IUser): string => {
    return jwt.sign({
        id: user._id,
        email: user.email,
        hasChangePassword: user.hasChangePassword
    }, process.env.SECRET_KEY as string)
}

const verify = (token: string): IToken => {
    return jwt.verify(token, process.env.SECRET_KEY as string) as IToken
}

const context = async (req: IncomingMessage) => {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1]

        try {
            const decodedToken = await verify(token)
            return {req, token: decodedToken}
        } catch {
            throw new GraphQLError('invalid token', {
                extensions: {
                    http: {status: 401},
                },
            })
        }
    }

    return {req}
}

const token = {
    generate: generate,
    verify: verify,
    context: context
}

export default token
