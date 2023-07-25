import React, {useEffect} from "react";

//import components
import BottomNav from "../components/common/BottomNav";

//Import constants
import storageConstants from "../constants/storageConstants";

//Import interfaces
import {IToken} from "../interfaces/tokenInterface";

const LoggedInScreen: React.FC = ({navigation}) => {
    useEffect(() => {
        storageConstants.get(true).then((response) => {
            if (response === 'object') {
                const decryptedToken = response as IToken
                !decryptedToken.hasChangePassword && navigation.navigate('definition')
            }
        })
    }, [])

    return (
        <BottomNav/>
    )
}

export default LoggedInScreen;
