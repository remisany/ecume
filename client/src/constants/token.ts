import jwt_decode from 'jwt-decode'

//import interfaces
import {IToken} from "../interfaces/tokenInterface";

const verifyToken = (token: string): IToken => {
    try {
        return jwt_decode(token)
    } catch {
        throw new Error('invalid token')
    }
}

export default verifyToken
