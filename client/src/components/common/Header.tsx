import * as React from "react";
import {StyleSheet, Text} from "react-native";

//import constants
import styleConstants from "../../constants/styleConstants";

const Header: React.FC = () => {
    return (
        <Text style={styles.text}>écume</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Pacifico",
        fontSize: styleConstants.size.fontTitle,
        color: styleConstants.colors.yellow,
        marginTop: -10,
        marginLeft: -2
    }
})

export default Header;
