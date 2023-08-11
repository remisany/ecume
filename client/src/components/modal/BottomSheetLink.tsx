import React from 'react'
import {View, StyleSheet, StyleProp, Pressable} from 'react-native'
import Ionicons from "@expo/vector-icons/Ionicons";

//import constants
import styleConstants from "../../constants/styleConstants";

//import components
import AppText from "../common/AppText";

//Import interface
import {IModalCustomStyle} from "../../interfaces/modalInterface";

interface IBottomSheetLink {
    icon: keyof typeof Ionicons.glyphMap,
    title: string,
    onPress?: Function,
    onLongPress?: Function,
    customStyle?: IModalCustomStyle
}

const BottomSheetLink: React.FC<IBottomSheetLink> = ({icon, title, onPress, onLongPress, customStyle}) => {
    const styleIcon = customStyle && customStyle.styleIcon
    const styleText = customStyle && customStyle.styleText

    return (
        <Pressable style={styles.container} onPress={onPress && onPress} onLongPress={onLongPress && onLongPress}>
            <Ionicons name={icon} color={customStyle ? styleIcon : styleConstants.colors.black} size={25}/>
            <AppText customStyle={[{marginLeft: 10}, styleText]}>{title}</AppText>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        paddingHorizontal: 25
    },
});

export default BottomSheetLink;
