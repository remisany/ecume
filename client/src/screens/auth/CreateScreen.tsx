import React, {useState} from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useMutation} from "@apollo/client";

//import components
import AuthScreen from "./AuthScreen";
import TextScreen from "./TextScreen";
import PhotoScreen from "./PhotoScreen";

//import constants
import styleConstants from "../../constants/styleConstants";

//import mutations
import {CREATE_NOTE} from "../../server/mutations";

//import interfaces
import {IPhotoContent} from "../../interfaces/noteInterfaces";

const CreateScreen: React.FC = ({route, navigation}) => {
    const [createNote] = useMutation(CREATE_NOTE);

    const {type, inspiration, project} = route.params;

    const title = ["Texte", "Photographie", "Dessin"]

    const [content, setContent] = useState<string | IPhotoContent | null>(null)

    const submit = () => {
        const input = {
            title: 'Test',
            type: type,
            inspiration: inspiration,
            ...project && {project: project},
            ...type === 0 ? {content: content} : {image: content.image}
        }

        createNote({variables: {input}}).then(({data}) => {
            if (data.createNote.code === "202") {
                console.log('validé')
            }
        })
    }

    return (
        <AuthScreen>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("connecte")}>
                        <Ionicons style={{paddingBottom: 1}} name="close" color={styleConstants.colors.black} size={28}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>{title[type]}</Text>
                    {content !== null &&
                        <TouchableOpacity onPress={submit}>
                            <Text style={styles.submitText}>Valider</Text>
                        </TouchableOpacity>}
                </View>

                {type === 0 ? <TextScreen setContent={setContent}/> : <PhotoScreen setContent={setContent} content={content as IPhotoContent}/>}
            </View>
        </AuthScreen>
    )
}

export default CreateScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%"
    },
    titleContainer: {
        position: "absolute",
        zIndex: 2,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        height: 95,
        backgroundColor: styleConstants.colors.white,
        borderColor: "rgb(219,219, 219)",
        borderWidth: 0.5,
        paddingHorizontal: 10
    },
    title: {
        fontFamily: styleConstants.family.bold,
        fontSize: 20,
        paddingBottom: 3,
        marginLeft: 10,
        flex: 1
    },

    submitText: {
        fontFamily: styleConstants.family.bold,
        color: styleConstants.colors.yellow,
        fontSize: 20,
        paddingBottom: 3,
        paddingRight: 3
    }
})
