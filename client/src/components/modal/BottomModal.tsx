import React, {forwardRef, ForwardRefExoticComponent, useCallback, useMemo} from "react";
import {StyleSheet, Text, View} from "react-native";
import {BottomSheetBackdrop, BottomSheetModal} from "@gorhom/bottom-sheet";

//import constants
import {colors, family, size} from "../../constants/styleConstants";

//import components
import Border from "../common/Border";
import BottomSheetLink from "./BottomSheetLink";

//import interfaces
import {IModalCustomStyle} from "../../interfaces/modalInterface";

interface IBottomModal {
    text: string
    accept?: Function
    acceptLong?: Function
    refuse?: Function
    subtitle?: string
}

const BottomModal: ForwardRefExoticComponent<IBottomModal> = forwardRef(({text, accept, acceptLong, refuse, subtitle}, ref) => {
    const snapPoints = useMemo(() => ['5%', '25%'], [])

    const renderBackdrop = useCallback((props) => <BottomSheetBackdrop {...props} />, []);

    const acceptCustomStyle: IModalCustomStyle = {
        styleText: {color: colors.orange},
        styleIcon: colors.orange
    }

    return (
        <BottomSheetModal
            ref={ref}
            index={1}
            snapPoints={snapPoints}
            backdropComponent={renderBackdrop}
        >
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{text}</Text>
                {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                <Border/>
                <BottomSheetLink onPress={accept && accept} onLongPress={acceptLong && acceptLong} icon='checkmark-circle' title="Accepter" customStyle={acceptCustomStyle}/>
                <Border/>
                <BottomSheetLink onPress={refuse && refuse} icon='close-circle' title="Refuser"/>
                <Border/>
            </View>
        </BottomSheetModal>
    )
})

export default BottomModal;

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontFamily: family.bold,
        fontSize: 20,
        marginBottom: 10
    },
    subtitle: {
        fontSize: size.small,
        fontFamily: family.light,
        marginTop: -10,
        marginBottom: 10
    }
})
