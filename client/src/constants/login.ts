import {NavigationProp} from "@react-navigation/native";

//import constants
import storageConstants from "./storageConstants";

const loginSuccess = (token: String, navigation: NavigationProp<ReactNavigation.RootParamList>) => {
    storageConstants.set(token)
    navigation.navigate('connecte')
}

export default loginSuccess
