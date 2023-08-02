import React, {forwardRef, ForwardRefExoticComponent, useCallback, useMemo} from "react";
import {StyleSheet, Text, View} from "react-native";
import {BottomSheetBackdrop, BottomSheetModal} from "@gorhom/bottom-sheet";

//import constants
import styleConstants from "../../constants/styleConstants";

//import components
import Border from "./Border";
import BottomSheetLink from "./BottomSheetLink";

//import interfaces
import {IModalCustomStyle} from "../../interfaces/modalInterface";

interface IAppModal {
    text: string
    accept?: Function
    acceptLong?: Function
    refuse?: Function
    subtitle?: string
}

const AppModal: ForwardRefExoticComponent<IAppModal> = forwardRef(({text, accept, acceptLong, refuse, subtitle}, ref) => {
    const snapPoints = useMemo(() => ['5%', '25%'], [])

    const renderBackdrop = useCallback((props) => <BottomSheetBackdrop {...props} />, []);

    const acceptCustomStyle: IModalCustomStyle = {
        styleText: {color: styleConstants.colors.orange},
        styleIcon: styleConstants.colors.orange
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

export default AppModal;

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontFamily: styleConstants.family.bold,
        fontSize: 20,
        marginBottom: 10
    },
    subtitle: {
        fontSize: styleConstants.size.small,
        fontFamily: styleConstants.family.light,
        marginTop: -10,
        marginBottom: 10
    }
})
