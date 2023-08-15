import React, {useState} from "react";
import {Image, Text, View} from "react-native";
import {Link} from "@react-navigation/native";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {gql, useMutation} from "@apollo/client";

//import constants
import validation from "../../constants/validationConstant";
import {formStyle} from "../../constants/styleConstants";
import toast from "../../constants/toastConstants"
import input from "../../constants/input";

//import assets
import Icon from "../../assets/icons/verso.png";

//import components
import Submit from "../../components/buttons/Submit";
import AppText from "../../components/common/AppText";

//import interfaces
import {SignupFormData} from "../../interfaces/formsInterface";

const CREATE_USER = gql`
  mutation CreateUser($email: String!) {
    createUser(email: $email) {
      code
    }
  }
`;

const SignupScreen: React.FC = ({navigation}) => {
    const [createUser] = useMutation(CREATE_USER);

    const [hasSubmit, setHasSubmit] = useState<boolean>(false)

    const {control, handleSubmit, formState: {errors}} = useForm<SignupFormData>({
        resolver: yupResolver(validation.signup)
    })

    const onSubmit = handleSubmit(({email}) => {
        createUser({
            variables: {email}
        }).then(({data}) => {
            const navigate = () => navigation.navigate('connexion')

            data.createUser.code === "202" && toast.success("Compte créé !", "Un email vous a été envoyé", navigate)
            data.createUser.code === "203" && toast.error("Une erreur est survenue !", "L'email est déjà utilisé")
        })
    })

    const styles = formStyle

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={Icon}/>

            <Text style={styles.title}>Inscription</Text>

            {input.email(control, errors, hasSubmit)}

            <Submit title="S'inscrire" onPress={handleSubmit(onSubmit)} setHasSubmit={setHasSubmit}/>

            <View style={styles.end}>
                <AppText>Vous avez déjà un compte ?</AppText>
                <Link style={styles.link} to={{screen: 'connexion'}}> Connexion</Link>
            </View>
        </View>
    )
}

export default SignupScreen;
