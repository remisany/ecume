import React from "react";
import {StyleSheet, Text} from "react-native";
import {Button, Dialog, Portal} from "react-native-paper";

//import constants
import {colors, family, size} from "../../constants/styleConstants";

interface IModal {
    title: string,
    text: string
    visible: boolean,
    setVisible: Function
    accept: Function
}

const Modal: React.FC<IModal> = ({title, text, visible, setVisible, accept}) => {
    const hideDialog = () => setVisible(false)

    return (
        <Portal>
            <Dialog style={styles.container} visible={visible} onDismiss={hideDialog}>
                <Dialog.Title style={{fontFamily: family.bold, fontSize: size.smallTitle}}>{title}</Dialog.Title>
                <Dialog.Content>
                    <Text style={{fontFamily: family.light, fontSize: size.regular}}>{text}</Text>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button textColor={colors.yellow} labelStyle={styles.labelStyle} onPress={hideDialog}>Continuer à créer</Button>
                    <Button textColor={colors.orange} labelStyle={styles.labelStyle} onPress={accept}>Quitter</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    )
}

export default Modal;

const styles = StyleSheet.create({
    container: {
        borderRadius: size.radius,
    },
    labelStyle: {
        fontFamily: family.bold,
        fontSize: size.regular
    }
})
