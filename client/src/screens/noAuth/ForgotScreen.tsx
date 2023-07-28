import React, {useState}  from "react";
import {Text, View, Image} from "react-native"
import {useForm} from "react-hook-form"
import {Link, useNavigation} from '@react-navigation/native';
import {yupResolver} from '@hookform/resolvers/yup';
import {gql, useMutation} from "@apollo/client";

//import assets
import Icon from "../../assets/icons/verso.png";

//import constants
import styleConstants from "../../constants/styleConstants"
import validation from "../../constants/validationConstant";
import input from "../../constants/input";
import encrypt from "../../constants/crypto";
import toast from "../../constants/toastConstants";

//import components
import AppText from "../../components/common/AppText";
import Submit from "../../components/common/Submit";

//import interfaces
import {SignupFormData} from "../../interfaces/formsInterface";

const FORGOT_PASSWORD = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email) {
        code
    }
  }
`;

const ForgotScreen: React.FC = () => {
    const navigation = useNavigation()

    const [forgotPassword] = useMutation(FORGOT_PASSWORD);

    const [hasSubmit, setHasSubmit] = useState<boolean>(false)

    const {control, handleSubmit, formState: {errors}} = useForm<SignupFormData>({
        resolver: yupResolver(validation.signup)
    })

    const onSubmit = handleSubmit(async (values) => {
        forgotPassword({variables: {email: encrypt(values.email as string)}}).then(({data}) => {
            const navigate = () => navigation.navigate('connexion')

            data.forgotPassword.code === "202" && toast.success("Mot de passe récupéré !", "Un email vous a été envoyé", navigate)
            data.forgotPassword.code === "203" && toast.error("Une erreur est survenue !", "Utilisateur inconnu")
        })
    })
    const styles = styleConstants.formStyle

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={Icon}/>

            <Text style={styles.title}>Récupération</Text>

            {input.email(control, errors, hasSubmit)}

            <Submit title="Récupérer" onPress={handleSubmit(onSubmit)} setHasSubmit={setHasSubmit}/>

            <View style={styles.end}>
                <AppText>Je me souviens !</AppText>
                <Link style={styles.link} to={{screen: 'connexion'}}> Connexion</Link>
            </View>
        </View>
    )
}

export default ForgotScreen;
