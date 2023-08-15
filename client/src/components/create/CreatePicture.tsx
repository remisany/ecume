import React from "react";
import {Camera} from 'expo-camera';
import {Dimensions, StyleSheet, View} from 'react-native';

//import components
import Permission from "../common/Permission";
import PreviewPicture from "./PreviewPicture";
import TakePicture from "./TakePicture";

//import interface
import {IPictureContent} from "../../interfaces/noteInterfaces";

//import constants
import {colors} from "../../constants/styleConstants";

interface ICreatePicture {
    setContent: Function
    content: IPictureContent | null
    setLoading: Function
}

const CreatePicture: React.FC<ICreatePicture> = ({setContent, content, setLoading}) => {
    const [permission, requestPermission] = Camera.useCameraPermissions()

    const dimension = Dimensions.get("window").height - 95 - 62

    if (!permission) {
        return <View/>
    }

    if (!permission.granted) {
        return <Permission requestPermission={requestPermission}/>
    }

    return (
        <View style={[{height: dimension}, styles.container]}>
            {content !== null ?
                <PreviewPicture content={content} setContent={setContent}/>
                :
                <TakePicture setContent={setContent} content={content} setLoading={setLoading}/>
            }
        </View>
    )
}

export default CreatePicture;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }
});
