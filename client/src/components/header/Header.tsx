import * as React from "react";
import {StyleSheet, Text, View} from "react-native";

//import constants
import styleConstants from "../../constants/styleConstants";

//import component
import Create from "./Create";

const Header: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>écume</Text>
            <Create/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    text: {
        fontFamily: "Pacifico",
        fontSize: styleConstants.size.fontTitle,
        color: styleConstants.colors.black,
        marginTop: -10,
        marginLeft: -2
    }
})

export default Header;
