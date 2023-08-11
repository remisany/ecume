import React, {forwardRef, ForwardRefExoticComponent} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/native";

//import component
import AppModal from "../modal/AppModal";

//import constants
import toastConstants from "../../constants/toastConstants";

const Exit: ForwardRefExoticComponent<{}> = forwardRef((_, ref) => {
    const navigation = useNavigation()

    const accept = () => {
        AsyncStorage.clear()
        navigation.navigate('connexion')
        toastConstants.success("À bientôt !", "Vous êtes maintenant déconnecté")
    }

    const refuse = () => ref.current?.close()

    return (
        <AppModal
            accept={accept}
            refuse={refuse}
            text="Se déconnecter ?"
            ref={ref}
        />
    )
})

export default Exit;
