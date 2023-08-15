import React from 'react'
import {Pressable, StyleSheet, View} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

//import components
import {colors} from "../../constants/styleConstants";

interface IRadioButton {
    icon: keyof typeof Ionicons.glyphMap
    index: number
    setValue: Function
    value: number
}

const RadioIconButton: React.FC<IRadioButton> = ({icon, index, setValue, value}) => {
    return (
        <Pressable onPress={() => setValue(index)} style={styles.pressable}>
            <View style={styles.iconContainer}>
                <Ionicons name={icon} size={40} color={value === index ? colors.yellow: colors.black}/>
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
        borderRadius: 5,
        marginHorizontal: 15,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default RadioIconButton;
