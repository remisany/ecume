import * as React from "react";
import {StyleSheet, Text, View} from "react-native";
import Create from "../../components/header/Create";

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
    },
});
