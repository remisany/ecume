import React, {useRef, useState} from "react";
import {Camera, CameraType, FlashMode} from 'expo-camera';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';

//import components
import IconButton from "../buttons/IconButton";

//import constants
import {colors} from "../../constants/styleConstants";

interface ITakePicture {
    setContent: Function
    setLoading: Function
}

const TakePicture: React.FC<ITakePicture> = ({setContent, setLoading}) => {
    const [type, setType] = useState(CameraType.back)
    const [flash, setFlash] = useState(FlashMode.off)
    const cameraRef = useRef()

    const windowWidth = Dimensions.get('window').width;

    const toggleCameraType = () => {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back))
    }

    const toggleFlashMode = () => {
        setFlash(current => (current === FlashMode.off ? FlashMode.on : FlashMode.off))
    }

    const takePicture = async () => {
        setLoading(true)
        const {uri, base64} = await cameraRef.current.takePictureAsync({quality: .7, base64: true, exif: false})
        setContent({uri: uri, image: base64})
        setLoading(false)
    }

    return (
        <>
            <Camera ratio="1:1" style={{width: windowWidth, height: windowWidth}} type={type} flashMode={flash} ref={cameraRef}>
                <View></View>
            </Camera>
            <View style={styles.buttonContainer}>
                <IconButton name="camera-reverse" onPress={toggleCameraType}/>
                <TouchableOpacity style={styles.button} onPress={takePicture}></TouchableOpacity>
                <IconButton name={flash === "on" ? "flash" : "flash-off"} onPress={toggleFlashMode}/>
            </View>
        </>
    )
}

export default TakePicture;

const styles = StyleSheet.create({
    buttonContainer: {
        marginBottom: 30,
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: 'transparent',
    },
    button: {
        marginHorizontal: 20,
        height: 80,
        width: 80,
        backgroundColor: colors.black,
        borderRadius: 50
    }
});
