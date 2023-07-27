import React, {useEffect, useState} from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/native";
import storageConstants from "../../constants/storageConstants";
import {IToken} from "../../interfaces/tokenInterface";
import styleConstants from "../../constants/styleConstants";
import AppText from "../../components/common/AppText";
import IconButton from "../../components/common/IconButton";

const ProfileScreen: React.FC = () => {
    const navigation = useNavigation()

    const [user, setUser] = useState<string | null>(null)

    useEffect(() => {
        storageConstants.get(true).then(response => {
            const token = response as IToken
            setUser(token.email)
        })
    }, [])

    return (
        user !== null && <View style={styles.container}>
            <View style={styles.thumbnail}>
                <Text style={styles.initial}>{user.charAt(0).toUpperCase()}</Text>
            </View>

            <View style={styles.mail}>
                <AppText>{user}</AppText>
            </View>

            <View style={styles.iconContainer}>
                <IconButton name="settings" onPress={() => {}}/>
                <IconButton name="exit" onPress={() => {}}/>
                <IconButton name="trash" onPress={() => {}} customStyle={{backgroundColor: styleConstants.colors.orange}}/>
            </View>

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

const styles = StyleSheet.create({
    container: {
        padding: styleConstants.size.paddingContainer,
        display: "flex",
        alignItems: "center"
    },
    thumbnail: {
        backgroundColor: styleConstants.colors.yellow,
        height: 60,
        width: 60,
        borderRadius: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: 'center'
    },
    initial: {
        color: styleConstants.colors.white,
        fontSize: styleConstants.size.fontTitle,
        fontFamily: styleConstants.family.bold
    },
    mail: {

    },
    iconContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center'
    }
})
