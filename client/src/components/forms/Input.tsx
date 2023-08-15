import React from "react";
import {StyleSheet, View} from "react-native";
import {Controller} from "react-hook-form";
import {Control} from "react-hook-form/dist/types/form";
import {FieldErrors} from "react-hook-form/dist/types/errors";
import {RegisterOptions} from "react-hook-form/dist/types/validator";
import Ionicons from "@expo/vector-icons/Ionicons";
import {FieldPath} from "react-hook-form/dist/types/path";

//import constants
import {colors, size} from "../../constants/styleConstants";
import {TextInput} from "react-native-paper";

interface IInput {
    control: Control
    errors: FieldErrors
    name: FieldPath
    rule?: RegisterOptions
    placeholder: string,
    hasSubmit: boolean
}

const Input: React.FC<IInput> = ({control, errors, name, rules, placeholder, hasSubmit}) => {
    return (
        <View style={styles.container}>
            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                        mode="outlined"
                        label={placeholder}
                        style={[styles.input]}
                        onBlur={onBlur}
                        autoCapitalize="none"
                        onChangeText={onChange}
                        value={value}
                        secureTextEntry={name === "password"}
                        outlineColor={hasSubmit && errors && errors[name] ? colors.orange : colors.black}
                        activeOutlineColor={colors.yellow}
                    />
                )}
                name={name}
                rules={rules}
            />
            {hasSubmit &&
                <View style={styles.icon}>
                    <Ionicons
                        name={errors[name] ? "alert-circle" : "checkmark-circle"}
                        color={errors[name] ? colors.orange : colors.yellow}
                        size={25}
                    />
                </View>
            }
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        position: "relative"
    },
    input: {
        marginVertical: 5,
        height: 45,
        fontSize: size.regular,
        backgroundColor: 'transparent'
    },
    icon: {
        position: "absolute",
        height: 41,
        marginVertical: 7,
        right: 3,
        backgroundColor: colors.white,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})
