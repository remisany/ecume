import * as React from "react";
import {StyleProp, StyleSheet, Text} from "react-native";

//import constants
import styleConstants from "../../constants/styleConstants";
import {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import {JSX} from "react";

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
        fontSize: styleConstants.size.regular,
        fontFamily: "OpenSans-Regular"
    }
})
