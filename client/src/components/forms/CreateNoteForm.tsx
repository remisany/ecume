import React, {forwardRef, ForwardRefExoticComponent, useState} from 'react'
import {View} from 'react-native'
import {useNavigation} from "@react-navigation/native";

//import constants
import pickerConstants from "../../constants/pickerConstants";

//import components
import Submit from "../common/Submit";
import AppPicker from "../common/AppPicker";
import ProjectDropdown from "../header/ProjectDropdown";
import TypeCreation from "../header/TypeCreation";

const CreateNoteForm: ForwardRefExoticComponent<{}> = forwardRef(({}, ref) => {
    const navigation = useNavigation()

    const [type, setType] = useState<number>(0)
    const [inspiration, setInspiration] = useState<number>(pickerConstants.inspiration[0].value)
    const [project, setProject] = useState<string>("")

    const onSubmit = () => {
        ref.current?.close()
        navigation.navigate("creation", {
            type: type,
            inspiration: inspiration,
            project: project
        })
    }

    return (
        <View>
            <TypeCreation setType={setType} type={type}/>
            <AppPicker title="Besoins d'inspiration ?" value={inspiration} setValue={setInspiration} items={pickerConstants.inspiration}/>
            <ProjectDropdown project={project} setProject={setProject}/>

            <Submit title="Créer" onPress={onSubmit}/>
        </View>
    )
})

export default CreateNoteForm;
