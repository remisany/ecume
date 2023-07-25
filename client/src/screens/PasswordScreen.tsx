import React, {useState} from "react";
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
import {LoginFormData} from "../interfaces/formsInterface";

//import constants
import encrypt from "../constants/crypto";

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        code
        token
    }
  }
`;

const PasswordScreen: React.FC = () => {
    const [login] = useMutation(LOGIN);

    const [hasSubmit, setHasSubmit] = useState<boolean>(false);

    const {control, handleSubmit, formState: {errors}} = useForm<LoginFormData>({
        resolver: yupResolver(validation.login)
    })

    const onSubmit = handleSubmit((values) => {
        const valuesToSubmit = {
            email: encrypt(values.email as string),
            password: encrypt(values.password as string)
        }
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
