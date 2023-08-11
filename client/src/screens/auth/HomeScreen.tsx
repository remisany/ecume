import * as React from "react";
import {StyleSheet, Text, View} from "react-native";

//import constants
import styleConstants from "../../constants/styleConstants";

const HomeScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>Accueil</Text>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: styleConstants.colors.white
    },
});
