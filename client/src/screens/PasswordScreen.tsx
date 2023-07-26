import React, {useEffect, useState} from "react";
import {Text, View, Image} from "react-native"
import {useForm} from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup';
import {gql, useMutation} from "@apollo/client";

//import assets
import Icon from "../assets/icons/verso.png"

//import constants
import styleConstants from "../constants/styleConstants"
import validation from "../constants/validationConstant";

//import components
import Input from "../components/common/Input";
import Submit from "../components/common/Submit";

//import interfaces
import {PasswordFormData} from "../interfaces/formsInterface";

//import constants
import encrypt from "../constants/crypto";
import storageConstants from "../constants/storageConstants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DEFINE = gql`
  mutation Define($password: String!) {
    define(password: $password) {
        code
        token
    }
  }
`;

const PasswordScreen: React.FC = () => {
    const [define] = useMutation(DEFINE);

    const [hasSubmit, setHasSubmit] = useState<boolean>(false);

    const {control, handleSubmit, formState: {errors}} = useForm<PasswordFormData>({
        resolver: yupResolver(validation.password)
    })

    const onSubmit = handleSubmit(async (values) => {
        define({variables: {password: encrypt(values.password as string)}}).then(({data}) => {
            console.log(data)
        })
    })

    const styles = styleConstants.formStyle

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={Icon}/>

            <Text style={styles.title}>Définition</Text>

            <Input
                control={control}
                errors={errors}
                name="password"
                placeholder="Mot de passe"
                hasSubmit={hasSubmit}
                rules={{required: true}}
            />

            <Submit title="Définir" onPress={handleSubmit(onSubmit)} errors={errors} setHasSubmit={setHasSubmit}/>
        </View>
    )
}

export default PasswordScreen;
