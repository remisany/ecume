import * as React from "react";
import {Text, View, Image, StyleSheet} from "react-native"
import {useForm} from "react-hook-form"
import {Link} from '@react-navigation/native';
import {yupResolver} from '@hookform/resolvers/yup';

//import assets
import Icon from "../../assets/icons/verso.png";

//import constants
import styleConstants from "../../constants/styleConstants"
import validation from "../../constants/validationConstant";

//import components
import AppText from "../../components/common/AppText";
import Input from "../../components/common/Input";
import Submit from "../../components/common/Submit";

//import interfaces
import {FormData} from "../../interfaces/formsInterface";

const ForgotScreen: React.FC = () => {
    const {control, handleSubmit, clearErrors, formState: {errors, isDirty, dirtyFields}} = useForm<FormData>({
        mode: "onBlur",
        resolver: yupResolver(validation)
    })

    const onSubmit = handleSubmit(data => console.log(data))

    const styles = styleConstants.formStyle

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={Icon}/>

            <Text style={styles.title}>Récupération</Text>

            <Input
                control={control}
                errors={errors}
                name="email"
                placeholder="Email"
                dirtyField={dirtyFields}
                clearErrors={clearErrors}
            />

            <Submit title="Se connecter" onPress={handleSubmit(onSubmit)} errors={errors} isDirty={isDirty}/>

            <View style={styles.end}>
                <AppText>Je me souviens !</AppText>
                <Link style={styles.link} to={{screen: 'connexion'}}> Connexion</Link>
            </View>
        </View>
    )
}

export default ForgotScreen;

const LSStyles = StyleSheet.create({
    forgot: {
        fontSize: styleConstants.size.small,
        color: styleConstants.colors.yellow,
        fontFamily: "OpenSans-Bold",
        textAlign: "right"
    }
})

