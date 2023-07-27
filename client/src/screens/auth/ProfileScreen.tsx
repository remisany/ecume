import * as React from "react";
import {Pressable, Text, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/native";

const ProfileScreen: React.FC = () => {
    const navigation = useNavigation()

    return (
        <View>
            <Pressable onPress={() => {
                AsyncStorage.clear()
                navigation.navigate('connexion')
            }}>
                <Text>Se déconnecter</Text>
            </Pressable>
        </View>
    )
}

export default ProfileScreen;
