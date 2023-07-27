import React from "react";
import {useCallback, useState} from "react";
import {useFocusEffect, useNavigation, useRoute} from '@react-navigation/native';

//import constants
import storageConstants from "../../constants/storageConstants";

//import interfaces
import {IToken} from "../../interfaces/tokenInterface";

const AuthScreen: React.FC = ({children}) => {
    const [loading, setLoading] = useState(true)

    const navigation = useNavigation()
    const route = useRoute()

    useFocusEffect(
        useCallback(() => {
            setLoading(true)

            storageConstants.get(true).then(token => {
                if (token === null) {
                    return navigation.navigate('connexion')
                }

                const newToken = token as IToken

                if (newToken && !newToken.hasChangePassword && route.name !== "definition") {
                    return navigation.navigate('definition')
                } else if (newToken) {
                    setLoading(false)
                }
            })
        }, [])
    );

    return (
        !loading && children
    )
}

export default AuthScreen;
