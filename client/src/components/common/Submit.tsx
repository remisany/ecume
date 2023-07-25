import React from "react";
import {Text, StyleSheet, Pressable} from 'react-native';
import {FieldErrors} from "react-hook-form/dist/types/errors";

//import constants
import styleConstants from "../../constants/styleConstants";

interface ISubmit {
    title: string
    onPress: Function
    errors: FieldErrors
    setHasSubmit: Function
}

const Submit: React.FC<ISubmit> = ({title, onPress, errors, setHasSubmit}) => {
    return (
        <Pressable
            style={[styles.button]}
            onPress={() => {
                setHasSubmit(true)
                onPress()
            }}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

export default Submit

const styles = StyleSheet.create({
    button: {
        backgroundColor: styleConstants.colors.yellow,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 45,
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 5
    },
    text: {
        fontFamily: styleConstants.family.regular,
        color: styleConstants.colors.white,
        textTransform: "uppercase",
        fontSize: styleConstants.size.regular
    }
})
