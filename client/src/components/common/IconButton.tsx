import * as React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {Pressable, StyleProp, StyleSheet} from "react-native";
import {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";

//import components
import styleConstants from "../../constants/styleConstants";

interface IIconButton {
    name: keyof typeof Ionicons.glyphMap
    onPress: Function
    customStyle?: StyleProp<ViewStyle>
}

const IconButton: React.FC<IIconButton> = ({name, onPress, customStyle}) => {
    return (
        <Pressable style={[styles.container, customStyle]} onPress={onPress}>
            <Ionicons name={name} color={styleConstants.colors.white} size={25}/>
        </Pressable>
    )
}

export default IconButton;


const styles = StyleSheet.create({
    container: {
        backgroundColor: styleConstants.colors.yellow,
        height: 45,
        width: 45,
        borderRadius: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        margin: 10
    }
})
