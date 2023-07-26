import * as React from "react";
import {Text, View} from "react-native";

const AuthScreen: React.FC = () => {
    //!token -> navigate to loginScreen
    //token && !hasChangePassword -> navigate to definePasswordScreen
    //token --> display children

    return (
        <View>
            <Text>Organisation</Text>
        </View>
    )
}

export default AuthScreen;
