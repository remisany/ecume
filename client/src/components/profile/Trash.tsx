import React, {forwardRef, ForwardRefExoticComponent} from "react";
import {useNavigation} from "@react-navigation/native";
import {gql, useMutation} from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Import components
import AppModal from "../modal/AppModal";

//import constants
import toastConstants from "../../constants/toastConstants";

const DELETE_USER = gql`
  mutation {
    deleteUser {
        code
    }
  }
`;

const Trash: ForwardRefExoticComponent<{}> = forwardRef((_, ref) => {
    const [deleteUser] = useMutation(DELETE_USER);

    const navigation = useNavigation()

    const accept = () => {
        setTimeout(() => {
            deleteUser().then(({data}) => {
                if (data.deleteUser.code === "202") {
                    //setModal("")
                    AsyncStorage.clear()
                    navigation.navigate('connexion')
                    toastConstants.success("Au revoir !", "Vôtre compte à été supprimé")
                }
            })
        }, 2000)
    }

    const refuse = () => ref.current?.close()

    return (
        <AppModal
            acceptLong={accept}
            refuse={refuse}
            text="Supprimer définitivement ?"
            subtitle="(Maintenir pour confirmer)"
            ref={ref}
        />
    )
})

export default Trash;
