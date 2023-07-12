import * as React from "react";
import {Text, View} from "react-native";
import {Link} from "@react-navigation/native";

const SignupScreen: React.FC = () => {
    return (
        <View>
            <Text>Login</Text>

            <View>
                <Text>Vous avez déjà un compte ? </Text>
                <Link to={{screen: 'login'}}>Connexion</Link>
            </View>
        </View>
    )
}

export default SignupScreen;
