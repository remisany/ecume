import React from "react";
import {StyleSheet, View} from "react-native";

//import components
import AppText from "../../components/common/AppText";
import Submit from "../../components/common/Submit";

//import constants
import styleConstants from "../../constants/styleConstants";

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
        backgroundColor: styleConstants.colors.white,
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: styleConstants.size.paddingContainer
    },
})
