import AsyncStorage from "@react-native-async-storage/async-storage";

//import constants
import verifyToken from "./token";

//import interfaces
import {IToken} from "../interfaces/tokenInterface";

const set = async (token: string): Promise<boolean> => {
    try {
        await AsyncStorage.setItem("token", token)
        return true
    } catch (error) {
        console.log(`setAsyncStorage error :  ${error}`)
        return false
    }
}

const get = async (decrypt?: boolean): Promise<string | null | IToken | boolean> => {
    try {
        const token = await AsyncStorage.getItem("token")

        if (token && decrypt) {
            return verifyToken(token)
        }

        return token
    } catch {
        throw new Error('invalid token')
    }
}

const storageConstants = {
    set: set,
    get: get
}

export default storageConstants;
