import React from "react";
import {Text, StyleSheet, Pressable, StyleProp} from 'react-native';
import {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";

//import constants
import styleConstants from "../../constants/styleConstants";

interface ISubmit {
    title: string
    onPress?: Function
    onLongPress?: Function
    setHasSubmit?: Function
    customStyle?: StyleProp<ViewStyle>
}

const Submit: React.FC<ISubmit> = ({title, onPress, setHasSubmit, customStyle, onLongPress}) => {
    return (
        <Pressable
            style={[styles.button, customStyle]}
            onPress={() => {
                setHasSubmit && setHasSubmit(true)
                onPress && onPress()
            }}
            onLongPress={onLongPress && onLongPress}
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
