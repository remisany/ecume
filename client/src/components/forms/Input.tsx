import React, {useState} from "react";
import {StyleSheet, TextInput, View} from "react-native";
import {Controller} from "react-hook-form";
import {Control} from "react-hook-form/dist/types/form";
import {FieldErrors} from "react-hook-form/dist/types/errors";
import {RegisterOptions} from "react-hook-form/dist/types/validator";
import Ionicons from "@expo/vector-icons/Ionicons";
import {FieldPath} from "react-hook-form/dist/types/path";

//import constants
import styleConstants from "../../constants/styleConstants";

interface IInput {
    control: Control
    errors: FieldErrors
    name: FieldPath
    rule?: RegisterOptions
    placeholder: string,
    hasSubmit: boolean
}

const Input: React.FC<IInput> = ({control, errors, name, rules, placeholder, hasSubmit}) => {
    const [color, setColor] = useState<string>(styleConstants.colors.black)

    const inputOnBlur = () => setColor(styleConstants.colors.black)

    const inputOnFocus = () => setColor(styleConstants.colors.yellow)

    return (
        <View style={styles.container}>
            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                        style={[{borderColor: hasSubmit && errors && errors[name] ? styleConstants.colors.orange : color}, styles.input]}
                        onBlur={() => {
                            inputOnBlur()
                            onBlur()
                        }}
                        autoCapitalize="none"
                        onFocus={inputOnFocus}
                        onChangeText={onChange}
                        value={value}
                        placeholder={placeholder}
                        secureTextEntry={name === "password"}
                    />
                )}
                name={name}
                rules={rules}
            />
            {hasSubmit &&
                <View style={styles.icon}>
                    <Ionicons
                        name={errors[name] ? "alert-circle" : "checkmark-circle"}
                        color={errors[name] ? styleConstants.colors.orange : styleConstants.colors.yellow}
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
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 5,
        height: 45,
        fontSize: styleConstants.size.regular,
        paddingHorizontal: 10,
    },
    icon: {
        position: "absolute",
        height: 41,
        marginVertical: 7,
        right: 3,
        backgroundColor: styleConstants.colors.white,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})
