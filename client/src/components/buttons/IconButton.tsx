import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {StyleProp, StyleSheet, TouchableOpacity} from "react-native";
import {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";

//import components
import {colors} from "../../constants/styleConstants";

interface IIconButton {
    name: keyof typeof Ionicons.glyphMap
    onPress: Function
    customStyle?: StyleProp<ViewStyle>
}

const IconButton: React.FC<IIconButton> = ({name, onPress, customStyle}) => {
    return (
        <TouchableOpacity style={[styles.container, customStyle]} onPress={onPress}>
            <Ionicons name={name} color={colors.white} size={25}/>
        </TouchableOpacity>
    )
}

export default IconButton;


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.yellow,
        height: 45,
        width: 45,
        borderRadius: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        margin: 10
    }
})
