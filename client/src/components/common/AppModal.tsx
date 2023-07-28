import React from "react";
import {Modal, StyleSheet, Text, View} from "react-native";

//import component
import Submit from "./Submit";

//import constants
import styleConstants from "../../constants/styleConstants";

interface IAppModal {
    text: string
    onClose: Function
    onPress?: Function
    onLongPress?: Function
    subtitle?: string
}

const AppModal: React.FC<IAppModal> = ({text, onPress, onClose, onLongPress, subtitle}) => {
    return (
        <Modal animationType="slide" transparent={true}>
            <View style={styles.modal}>
                <View>
                    <Text style={styles.text}>{text}</Text>
                    {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                </View>

                <View style={styles.btnContainer}>
                    <Submit title="Non" onPress={onClose} customStyle={{backgroundColor: styleConstants.colors.orange, width: 45, marginTop: 0, marginRight: 5}}/>
                    <Submit
                        title="Oui"
                        onPress={onPress && onPress}
                        onLongPress={onLongPress && onLongPress}
                        customStyle={{width: 45, marginTop: 0, marginLeft: 5}}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default AppModal;

const styles = StyleSheet.create({
    modal: {
        backgroundColor: styleConstants.colors.white,
        borderRadius: 5,
        position: 'absolute',
        alignSelf: 'center',
        bottom: 60,
        paddingTop: 10,
        paddingHorizontal: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
        width: 340,
    },
    btnContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    text: {
        fontFamily: styleConstants.family.bold,
        marginTop: -7,
        fontSize: styleConstants.size.regular

    },
    subtitle: {
        fontFamily: styleConstants.family.light,
        fontSize: styleConstants.size.small
    }
})
