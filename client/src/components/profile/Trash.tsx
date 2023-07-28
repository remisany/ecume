import React from "react";
import {useNavigation} from "@react-navigation/native";
import {gql, useMutation} from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Import components
import AppModal from "../common/AppModal";

//import constants
import toastConstants from "../../constants/toastConstants";

interface ITrash {
    setModal: Function
}

const DELETE_USER = gql`
  mutation {
    deleteUser {
        code
    }
  }
`;

const Trash: React.FC<ITrash> = ({setModal}) => {
    const [deleteUser] = useMutation(DELETE_USER);

    const navigation = useNavigation()

    const onLongPress = () => {
        setTimeout(() => {
            deleteUser().then(({data}) => {
                if (data.deleteUser.code === "202") {
                    setModal("")
                    AsyncStorage.clear()
                    navigation.navigate('connexion')
                    toastConstants.success("Au revoir !", "Vôtre compte à été supprimé")
                }
            })
        }, 2000)
    }

    const onClose = () => setModal("")

    return (
        <AppModal
            onClose={onClose}
            onLongPress={onLongPress}
            text="Supprimer définitivement ?"
            subtitle="(Maintenir pour confirmer)"
        />
    )
}

export default Trash;
