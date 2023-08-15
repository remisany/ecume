import React, {useEffect, useRef} from "react";
import {TextInput} from "react-native-paper";
import {Dimensions, Keyboard, StyleSheet, Text} from "react-native";

//import constants
import {colors, size} from "../../constants/styleConstants";

interface ICreateText {
    setContent: Function
    content: string
}

const CreateText: React.FC<ICreateText> = ({setContent, content}) => {
    const inputRef = useRef(null)

    const dimension = Dimensions.get("window").height - 105 - 60

    useEffect(() => {
        const keyboardListener = Keyboard.addListener('keyboardDidHide', () => {
            inputRef.current.blur()
            return true
        })

        return () => keyboardListener.remove()
    }, [])

    return (
        <TextInput
            ref={inputRef}
            label="Contenu"
            multiline={true}
            value={content}
            mode="outlined"
            style={[{maxHeight: dimension}, styles.input]}
            onChangeText={setContent}
            activeOutlineColor={colors.yellow}
            outlineColor={colors.black}
            textColor={colors.black}
            outlineStyle={{borderRadius: size.radius}}

        />
    )
}

export default CreateText;

const styles = StyleSheet.create({
    input: {
        minHeight: 45,
        marginBottom: 10,
        flex: 1,
        backgroundColor: 'transparent',
        marginHorizontal: 10,
    }
});
