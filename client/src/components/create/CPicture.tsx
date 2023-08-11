import React, {useRef, useState} from "react";
import {Camera, CameraType, FlashMode} from 'expo-camera';
import {Dimensions, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

//import components
import Permission from "../common/Permission";
import styleConstants from "../../constants/styleConstants";
import IconButton from "../buttons/IconButton";
import Loader from "../common/Loader";

//import interface
import {IPictureContent} from "../../interfaces/noteInterfaces";

interface ICPicture {
    setContent: Function
    content: IPictureContent | null
}

const CPicture: React.FC<ICPicture> = ({setContent, content}) => {
    const [loading, setLoading] = useState(false)
    const [type, setType] = useState(CameraType.back)
    const [flash, setFlash] = useState(FlashMode.off)
    const [permission, requestPermission] = Camera.useCameraPermissions()
    const cameraRef = useRef()

    const windowWidth = Dimensions.get('window').width;

    if (!permission) {
        return <View/>
    }

    if (!permission.granted) {
        return <Permission requestPermission={requestPermission}/>
    }

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
        <View style={styles.container}>
            {loading && <Loader/>}
            {content !== null ?
                <>
                    <Image source={{uri: content.uri}} style={{width: windowWidth, height: windowWidth}}/>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.reset} onPress={() => setContent(null)}>
                            <Ionicons name="reload" color={styleConstants.colors.white} size={45}/>
                        </TouchableOpacity>
                    </View>
                </>
                :
                <>
                    <Camera ratio="1:1" style={{width: windowWidth, height: windowWidth}} type={type} flashMode={flash} ref={cameraRef}>
                        <View></View>
                    </Camera>
                    <View style={styles.buttonContainer}>
                        <IconButton name="camera-reverse" onPress={toggleCameraType}/>
                        <TouchableOpacity style={styles.button} onPress={takePicture}></TouchableOpacity>
                        <IconButton name="flash" onPress={toggleFlashMode}/>
                    </View>
                </>
            }
        </View>
    )
}

export default CPicture;

const styles = StyleSheet.create({
    container: {
        backgroundColor: styleConstants.colors.white,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonContainer: {
        position: "absolute",
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: 'transparent',
        bottom: 50,
    },
    button: {
        marginHorizontal: 20,
        height: 80,
        width: 80,
        backgroundColor: styleConstants.colors.black,
        borderRadius: 50
    },
    reset: {
        height: 80,
        width: 80,
        backgroundColor: styleConstants.colors.yellow,
        borderRadius: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
});
