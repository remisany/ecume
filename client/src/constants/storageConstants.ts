import AsyncStorage from "@react-native-async-storage/async-storage";

const set = async () => {
    try {
        await AsyncStorage.setItem('isLoggedIn', 'true')
        return true
    } catch (error) {
        console.log(`setAsyncStorage error :  ${error}`)
        return false
    }
}

const get = async () => {
    try {
        const value = await AsyncStorage.getItem('isLoggedIn')
        return value !== null
    } catch (error) {
        console.log(`getAsyncStorage error :  ${error}`)
        return false
    }
}

const storageConstants = {
    set: set,
    get: get
}

export default storageConstants;
