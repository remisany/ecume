import React from 'react'
import {Pressable, StyleSheet, View} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

//import components
import styleConstants from "../../constants/styleConstants";

interface IRadioButton {
    icon: keyof typeof Ionicons.glyphMap
    index: number
    setValue: Function
    value: number
}

const RadioButton: React.FC<IRadioButton> = ({icon, index, setValue, value}) => {
    return (
        <Pressable onPress={() => setValue(index)} style={styles.pressable}>
            <View style={[styles.iconContainer, {
                    backgroundColor: value === index ? styleConstants.colors.yellow : styleConstants.colors.white,
                    borderColor: value === index ? styleConstants.colors.yellow : styleConstants.colors.black,
                }]}>
                <Ionicons name={icon} size={40} color={value === index ? styleConstants.colors.white : styleConstants.colors.black}/>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressable: {
        display: "flex",
        alignItems: "center",
    },
    iconContainer: {
        height: 50,
        width: 50,
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default RadioButton;
