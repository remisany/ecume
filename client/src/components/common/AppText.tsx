import React, {JSX} from "react";
import {StyleProp, StyleSheet, Text} from "react-native";
import {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";

//import constants
import {size} from "../../constants/styleConstants";

interface IAppText {
    children: JSX.Element | string
    customStyle?: StyleProp<ViewStyle>
}

const AppText: React.FC<IAppText> = ({children, customStyle}) => {
    return (
        <Text style={[styles.text, customStyle]}>{children}</Text>
    )
}

export default AppText

const styles = StyleSheet.create({
    text: {
        fontSize: size.regular,
        fontFamily: "OpenSans-Regular"
    }
})
