import * as React from "react";
import {Text, View, TextInput, Button, StyleSheet, Image} from "react-native"
import {useForm, Controller} from "react-hook-form"
import {Link} from '@react-navigation/native';

//import interfaces
import {ILoginValues, loginDefaultValues as defaultValues} from "../interfaces/formsInterface";

//import assets
import Icon from "../assets/icons/recto.png"
import styleConstants from "../constants/styleConstants";

//import constants
import stylesConstants from "../constants/styleConstants"

const LoginScreen: React.FC = () => {
    const {control, handleSubmit, formState: {errors}} = useForm<ILoginValues>({defaultValues});
    const onSubmit = handleSubmit(data => console.log(data));

    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.image}
                    source={Icon}
                />
            </View>

            <View>
                <Text style={styles.title}>Connexion</Text>
            </View>

            <View>

            </View>

            <View>

            </View>

            <View style={styles.end}>
                <Text>Vous n'avez pas de compte ?</Text>
                <Link style={styles.link} to={{screen: 'signup'}}> Inscription</Link>
            </View>

            {/*<Controller
                control={control}
                rules={{required: true}}
                render={({field}) => <TextInput {...field}/>}
                name="email"
            />
            {errors.email && <Text>This is required.</Text>}

            <Controller
                control={control}
                rules={{required: true}}
                render={({field}) => <TextInput {...field}/>}
                name="password"
            />*/}

            {/*<Button title="Submit" onPress={handleSubmit(onSubmit)}/>*/}
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: styleConstants.colors.white
    },
    title: {
        fontWeight: "700"
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 50
    },
    end: {
        display: 'flex',
        flexDirection: 'row'
    },
    link: {
        color: stylesConstants.colors.yellow,
        fontWeight: '700'
    }
})
