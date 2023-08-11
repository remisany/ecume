import React from "react";
import {StyleSheet, View} from "react-native";
import LottieView from "lottie-react-native";

//import assets
import Animation from "../../assets/animation/loader.json"

const Loader: React.FC = () => {
    return (
        <View style={styles.container}>
            <LottieView source={Animation} style={{width: 200, height: 200}} autoPlay loop />
        </View>
    )
}

export default Loader;

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        flex: 1,
        zIndex: 100,
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, .8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})
