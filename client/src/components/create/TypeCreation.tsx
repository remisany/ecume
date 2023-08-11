import React from 'react'
import {StyleSheet, View} from "react-native";

//Import components
import RadioIconButton from "../buttons/RadioIconButton";

interface ITypeCreation {
    type: number
    setType: Function
}

const TypeCreation: React.FC<ITypeCreation> = ({type, setType}) => {
    const radioButtons = ["reader", "image", "color-palette"]

    return (
        <View style={styles.container}>
            {radioButtons.map((button, index) =>
                <RadioIconButton key={index} index={index} icon={button} value={type} setValue={setType}/>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 20
    }
});

export default TypeCreation;
