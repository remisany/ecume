import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/native";

//import component
import AppModal from "../common/AppModal";
import toastConstants from "../../constants/toastConstants";

interface IExit {
    setModal: Function
}

const Exit: React.FC<IExit> = ({setModal}) => {
    const navigation = useNavigation()

    const onPress = () => {
        setModal("")
        AsyncStorage.clear()
        navigation.navigate('connexion')
        toastConstants.success("À bientôt !", "Vous êtes maintenant déconnecté")
    }

    const onClose = () => setModal("")

    return (
        <AppModal
            onPress={onPress}
            onClose={onClose}
            text="Se déconnecter ?"
        />
    )
}

export default Exit;
