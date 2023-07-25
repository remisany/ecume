import React, {useState} from "react";
import {Image, Text, View} from "react-native";
import {Link} from "@react-navigation/native";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {gql, useMutation} from "@apollo/client";

//import constants
import validation from "../constants/validationConstant";
import styleConstants from "../constants/styleConstants";
import toast from "../constants/toastConstants"

//import assets
import Icon from "../assets/icons/verso.png";

//import components
import Input from "../components/common/Input";
import Submit from "../components/common/Submit";
import AppText from "../components/common/AppText";

//import interfaces
import {SignupFormData} from "../interfaces/formsInterface";

const CREATE_USER = gql`
  mutation CreateUser($input: CreateUser!) {
    createUser(input: $input) {
      code
    }
  }
`;

const SignupScreen: React.FC = ({navigation}) => {
    const [createUser] = useMutation(CREATE_USER);

    const [hasSubmit, setHasSubmit] = useState<boolean>(false);

    const {control, handleSubmit, formState: {errors}} = useForm<SignupFormData>({
        resolver: yupResolver(validation.signup)
    })

    const onSubmit = handleSubmit(({email}) => {
        createUser({
            variables: {input: {email}}
        }).then(({data}) => {
            const navigate = () => navigation.navigate('connexion')

            data.createUser.code === "202" && toast.success("Compte créé !", "Un email vous a été envoyé", navigate)
            data.createUser.code === "203" && toast.error("Une erreur est survenue !", "L'email est déjà utilisé")
        })
    })

    const styles = styleConstants.formStyle

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={Icon}/>

            <Text style={styles.title}>Inscription</Text>

            <Input
                control={control}
                errors={errors}
                name="email"
                placeholder="Email"
                hasSubmit={hasSubmit}
                rules={{required: true}}
            />

            <Submit title="S'inscrire" onPress={handleSubmit(onSubmit)} errors={errors} setHasSubmit={setHasSubmit}/>

            <View style={styles.end}>
                <AppText>Vous avez déjà un compte ?</AppText>
                <Link style={styles.link} to={{screen: 'connexion'}}> Connexion</Link>
            </View>
        </View>
    )
}

export default SignupScreen;
