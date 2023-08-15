import React, {useEffect, useState} from "react";
import {BackHandler, ScrollView, StyleSheet, View} from "react-native";
import {useMutation} from "@apollo/client";

//import components
import AuthComponent from "../../components/common/Auth";
import CreateText from "../../components/create/CreateText";
import CreatePicture from "../../components/create/CreatePicture";
import CreateHeader from "../../components/create/CreateHeader";
import Loader from "../../components/common/Loader";
import Inspiration from "../../components/create/Inspiration";
import Modal from "../../components/modal/Modal";

//import interfaces
import {IPictureContent} from "../../interfaces/noteInterfaces";

//import mutations
import {CREATE_NOTE} from "../../server/mutations";

//import constants
import {colors} from "../../constants/styleConstants";
import toast from "../../constants/toastConstants";

const CreateScreen: React.FC = ({route, navigation}) => {
    const {type, inspiration, project} = route.params;

    const [loader, setLoader] = useState<boolean>(false)
    const [visible, setVisible] = useState<boolean>(false)
    const [content, setContent] = useState<string | IPictureContent | null>(null)

    const [createNote, {loading}] = useMutation(CREATE_NOTE);

    useEffect(() => {
        setLoader(loading)
    }, [loading])

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            setVisible(true)
            return true
        })

        return () => backHandler.remove()
    }, [])

    const submit = () => {
        const input = {
            title: 'Test',
            type: type,
            inspiration: inspiration,
            ...project && {project: project},
            ...type === 0 ? {content: content} : {image: "image" in content && content.image}
        }

        createNote({variables: {input}}).then(({data}) => {
            if (data.createNote.code === "202") {
                toast.success("Note créé !", "Une note de plus dans votre collection.", navigation.goBack())
            }
        })
    }

    return (
        <AuthComponent>
            {loader && <Loader/>}

            {visible && <Modal
                setVisible={setVisible}
                visible={visible}
                title="Revenir à l'écran d'accueil ?"
                text="Voulez vous vraiment quitter la création de cette note et perdre l'inspiration liée à celle-ci ?"
                accept={() => navigation.goBack()}
            />}

            <CreateHeader content={content} submit={submit} type={type}/>

            <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
                <Inspiration inspiration={inspiration}/>

                {type === 0 ?
                    <CreateText setContent={setContent} content={content as string}/>
                    :
                    <CreatePicture setContent={setContent} content={content as IPictureContent} setLoading={setLoader}/>}
            </ScrollView>
        </AuthComponent>
    )
}

export default CreateScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        backgroundColor: colors.white
    }
})
