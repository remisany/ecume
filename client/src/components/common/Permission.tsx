import React from "react";
import {StyleSheet, View} from "react-native";

//import components
import AppText from "../../components/common/AppText";
import Submit from "../buttons/Submit";

//import constants
import {colors, size} from "../../constants/styleConstants";

interface IPermission {
    requestPermission: Function
}

const Permission: React.FC<IPermission> = ({requestPermission}) => {
    return (
        <View style={styles.permission}>
            <AppText customStyle={{textAlign: 'center'}}>Écume à besoin de votre permission pour utiliser la caméra</AppText>
            <Submit customStyle={{paddingHorizontal: 10}} onPress={requestPermission} title="autoriser"/>
        </View>
    )
}

export default Permission;

const styles = StyleSheet.create({
    permission:  {
        position: "absolute",
        backgroundColor: colors.white,
        zIndex: 1000,
        flex: 1,
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: size.paddingContainer
    },
})
