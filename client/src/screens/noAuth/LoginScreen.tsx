import React, {useState} from "react";
import {Text, View, Image, StyleSheet} from "react-native"
import {useForm} from "react-hook-form"
import {Link} from '@react-navigation/native';
import {yupResolver} from '@hookform/resolvers/yup';
import {gql, useMutation} from "@apollo/client";

//import assets
import Icon from "../../assets/icons/recto.png"

//import constants
import styleConstants from "../../constants/styleConstants"
import validation from "../../constants/validationConstant";
import encrypt from "../../constants/crypto";
import toast from "../../constants/toastConstants";
import input from "../../constants/input";
import loginSuccess from "../../constants/login";

//import components
import AppText from "../../components/common/AppText";
import Submit from "../../components/common/Submit";

//import interfaces
import {LoginFormData} from "../../interfaces/formsInterface";

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        code
        token
    }
  }
`;

const LoginScreen: React.FC = ({navigation}) => {
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

        login({variables: valuesToSubmit}).then(({data}) => {
            data.login.code === "203" && toast.error("Une erreur est survenue !", "Identifiants incorrects")
            data.login.code === "202" && loginSuccess(data.login.token, navigation)
        })
    })

    const styles = styleConstants.formStyle

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={Icon}/>

            <Text style={styles.title}>Connexion</Text>

            {input.email(control, errors, hasSubmit)}
            {input.password(control, errors, hasSubmit)}

            <Link style={LSStyles.forgot} to={{screen: 'recuperation'}}> Mot de passe oublié ?</Link>

            <Submit title="Se connecter" onPress={handleSubmit(onSubmit)} errors={errors} setHasSubmit={setHasSubmit}/>

            <View style={styles.end}>
                <AppText>Vous n'avez pas de compte ?</AppText>
                <Link style={styles.link} to={{screen: 'inscription'}}> Inscription</Link>
            </View>
        </View>
    )
}

export default LoginScreen;

const LSStyles = StyleSheet.create({
    forgot: {
        fontSize: styleConstants.size.small,
        color: styleConstants.colors.yellow,
        fontFamily: "OpenSans-Bold",
        textAlign: "right"
    }
})

