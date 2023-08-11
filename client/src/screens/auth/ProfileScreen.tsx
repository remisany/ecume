import React, {MutableRefObject, useCallback, useEffect, useRef, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {BottomSheetModal} from "@gorhom/bottom-sheet";

//import constants
import storageConstants from "../../constants/storageConstants";
import styleConstants from "../../constants/styleConstants";

//import interfaces
import {IToken} from "../../interfaces/tokenInterface";

//import components
import AppText from "../../components/common/AppText";
import IconButton from "../../components/buttons/IconButton";
import Exit from "../../components/profile/Exit";
import Trash from "../../components/profile/Trash";

const ProfileScreen: React.FC = () => {
    const [user, setUser] = useState<string | null>(null)

    const bSMExitRef = useRef<BottomSheetModal>(null)
    const bSMTrashRef = useRef<BottomSheetModal>(null)
    const handlePresentModalPress = useCallback((ref: MutableRefObject<BottomSheetModal>) => ref.current?.present(), [])

    const navigation = useNavigation()

    useEffect(() => {
        storageConstants.token(true).then(response => {
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
                <IconButton name="key" onPress={() => navigation.navigate("definition")}/>
                <IconButton name="exit" onPress={() => handlePresentModalPress(bSMExitRef)}/>
                <IconButton name="trash" onPress={() => handlePresentModalPress(bSMTrashRef)} customStyle={{backgroundColor: styleConstants.colors.orange}}/>
            </View>

            <Exit ref={bSMExitRef}/>
            <Trash ref={bSMTrashRef}/>
        </View>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        padding: styleConstants.size.paddingContainer,
        backgroundColor: styleConstants.colors.white,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    thumbnail: {
        marginTop: -100,
        backgroundColor: styleConstants.colors.yellow,
        height: 100,
        width: 100,
        borderRadius: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: "center",
    },
    initial: {
        color: styleConstants.colors.white,
        fontSize: styleConstants.size.fontTitle,
        fontFamily: styleConstants.family.bold
    },
    mail: {
        display: "flex",
        justifyContent: "center",
        borderStyle: "solid",
        marginVertical: 20,
        fontSize: styleConstants.size.regular,
    },
    iconContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        position: "absolute",
        alignSelf: "center",
        bottom: 50,
    }
})
