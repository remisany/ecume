import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

//import constants
import {colors, family, size} from "../../constants/styleConstants";

//import interface
import {IPictureContent} from "../../interfaces/noteInterfaces";

interface ICreateHeader {
    type: Number
    submit: Function
    content: string | IPictureContent | null
}

const CreateHeader: React.FC<ICreateHeader> = ({type, submit, content}) => {
    const navigation = useNavigation()

    const title = ["Texte", "Photographie", "Dessin"]

    return (
        <>
            <View style={styles.titleContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("connecte")}>
                    <Ionicons style={{paddingBottom: 1}} name="close" color={colors.black} size={28}/>
                </TouchableOpacity>

                <Text style={styles.title}>{title[type]}</Text>
                {content !== null && content !== "" &&
                    <TouchableOpacity onPress={submit}>
                        <Text style={styles.submitText}>Valider</Text>
                    </TouchableOpacity>}
            </View>
        </>
    )
}

export default CreateHeader;

const styles = StyleSheet.create({
    titleContainer: {
        position: "absolute",
        zIndex: 3,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        height: 95,
        backgroundColor: colors.white,
        borderColor: "rgb(219,219, 219)",
        borderWidth: 0.5,
        paddingHorizontal: 10
    },
    title: {
        fontFamily: family.bold,
        fontSize: size.smallTitle,
        paddingBottom: 3,
        marginLeft: 10,
        flex: 1
    },
    submitText: {
        fontFamily: family.bold,
        color: colors.yellow,
        fontSize: size.smallTitle,
        paddingBottom: 3,
        paddingRight: 3
    }
})
