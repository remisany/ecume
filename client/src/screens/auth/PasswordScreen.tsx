import React, {useState} from "react";
import {Text, View, Image} from "react-native"
import {useForm} from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup';
import {gql, useMutation} from "@apollo/client";
import {useNavigation} from "@react-navigation/native";

//import assets
import Icon from "../../assets/icons/verso.png"

//import constants
import styleConstants from "../../constants/styleConstants"
import validation from "../../constants/validationConstant";

//import components
import Submit from "../../components/common/Submit";
import AuthScreen from "./AuthScreen";

//import interfaces
import {PasswordFormData} from "../../interfaces/formsInterface";

//import constants
import encrypt from "../../constants/crypto";
import toast from "../../constants/toastConstants";
import loginSuccess from "../../constants/login";
import input from "../../constants/input";

const DEFINE = gql`
  mutation Define($password: String!) {
    define(password: $password) {
        code
        token
    }
  }
`;

const PasswordScreen: React.FC = () => {
    const navigation = useNavigation()

    const [define] = useMutation(DEFINE);

    const [hasSubmit, setHasSubmit] = useState<boolean>(false);

    const {control, handleSubmit, formState: {errors}} = useForm<PasswordFormData>({
        resolver: yupResolver(validation.password)
    })

    const onSubmit = handleSubmit(async (values) => {
        define({variables: {password: encrypt(values.password as string)}}).then(({data}) => {
            data.define.code === "203" && toast.error("Une erreur est survenue !", "Utilisateur inconnu")
            data.define.code === "202" && loginSuccess(data.define.token, navigation)
        })
    })

    const styles = styleConstants.formStyle

    return (
        <AuthScreen>
            <View style={styles.container}>
                <Image style={styles.image} source={Icon}/>

                <Text style={styles.title}>Définition</Text>

                {input.password(control, errors, hasSubmit)}

                <Submit title="Définir" onPress={handleSubmit(onSubmit)} errors={errors} setHasSubmit={setHasSubmit}/>
            </View>
        </AuthScreen>
    )
}

export default PasswordScreen;
