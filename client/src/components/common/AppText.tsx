import * as React from "react";
import {StyleSheet, Text} from "react-native";

//import constants
import styleConstants from "../../constants/styleConstants";

const AppText: React.FC = ({children}) => {
    return (
        <Text style={styles.text}>{children}</Text>
    )
}

export default AppText

const styles = StyleSheet.create({
    text: {
        fontSize: styleConstants.size.fontSize,
        fontFamily: "OpenSans-Regular"
    }
})
