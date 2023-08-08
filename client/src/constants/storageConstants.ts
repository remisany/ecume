import AsyncStorage from "@react-native-async-storage/async-storage";

//import constants
import verifyToken from "./token";

//import interfaces
import {IToken} from "../interfaces/tokenInterface";

const set = async (key: string, token: string): Promise<boolean> => {
    try {
        await AsyncStorage.setItem(key, token)
        return true
    } catch (error) {
        console.log(`setAsyncStorage error :  ${error}`)
        return false
    }
}

const get = async (key: string) => {
    try {
        return await AsyncStorage.getItem("project")
    } catch (error) {
        console.log(`getAsyncStorage error :  ${error}`)
    }
}

const remove = async (key: string): Promise<boolean> => {
    try {
        await AsyncStorage.removeItem(key)
        return true
    } catch (error) {
        console.log(`removeAsyncStorage error :  ${error}`)
        return false
    }
}

const token = async (decrypt?: boolean): Promise<string | null | IToken> => {
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
    get: get,
    remove: remove,
    token: token
}

export default storageConstants;
