import React, {forwardRef, ForwardRefExoticComponent, useState} from "react";
import {View} from "react-native"
import {useForm} from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup';
import {useMutation} from "@apollo/client";

//import constants
import validation from "../../constants/validationConstant";
import {InputPattern} from "../../constants/input";

//import components
import Submit from "../../components/common/Submit";

//import interfaces
import {CreateProjectFormData} from "../../interfaces/formsInterface";

//import mutations
import {CREATE_PROJECT} from "../../server/mutations";

interface ICreateProjectForm {
    setFetchProject: Function
    setProject: Function
}

const CreateProjectForm: ForwardRefExoticComponent<ICreateProjectForm> = forwardRef(({setFetchProject, setProject}, ref) => {
        const [createProject] = useMutation(CREATE_PROJECT);

        const [hasSubmit, setHasSubmit] = useState<boolean>(false)

        const {control, handleSubmit, formState: {errors}} = useForm<CreateProjectFormData>({
            resolver: yupResolver(validation.createProject)
        })

        const onSubmit = handleSubmit(async (values) => {
            createProject({variables: {title: values.title as string}}).then(({data}) => {
                if (data.createProject.code === "202") {
                    setFetchProject(prevState => !prevState)
                    setProject(data.createProject._id)
                    ref.current?.close()
                }
            })
        })

        return (
            <View>
                <InputPattern control={control} errors={errors} hasSubmit={hasSubmit} name="title" placeholder="Titre"/>
                <Submit title="Créer" onPress={handleSubmit(onSubmit)} setHasSubmit={setHasSubmit}/>
            </View>
        )
})

export default CreateProjectForm;
