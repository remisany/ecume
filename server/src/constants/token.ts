import jwt from "jsonwebtoken"
import {IncomingMessage} from "http";

//import interfaces
import {IUser} from "../interfaces/userInterface";

const generate = (user: IUser): string => {
    return jwt.sign({
        id: user._id,
        email: user.email,
        hasChangePassword: user.hasChangePassword
    }, process.env.SECRET_KEY as string)
}

const verify = (token: string) => {
    try {
        return jwt.verify(token, process.env.SECRET_KEY as string)
    } catch {
        throw new Error('invalid token')
    }
}

const context = async (req: IncomingMessage) => {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1]

        try {
            const decodedToken = verify(token)
            console.log(decodedToken)
        } catch {
            throw new Error('invalid token')
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
