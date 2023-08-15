import React from "react";
import {Dimensions, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

//import components
import {colors} from "../../constants/styleConstants";

//import interface
import {IPictureContent} from "../../interfaces/noteInterfaces";

interface ITakePicture {
    setContent: Function
    content: IPictureContent | null
}

const PreviewPicture: React.FC<ITakePicture> = ({setContent, content}) => {
    const windowWidth = Dimensions.get('window').width;

    return (
        <>
            <Image source={{uri: content.uri}} style={{width: windowWidth, height: windowWidth}}/>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.reset} onPress={() => setContent(null)}>
                    <Ionicons name="reload" color={colors.white} size={45}/>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default PreviewPicture;

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: 'transparent',
        marginBottom: 30
    },
    reset: {
        height: 80,
        width: 80,
        backgroundColor: colors.yellow,
        borderRadius: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
});
