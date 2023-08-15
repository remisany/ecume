import React, {useCallback, useMemo, useRef} from 'react'
import {BottomSheetBackdrop, BottomSheetModal} from '@gorhom/bottom-sheet'
import {View, StyleSheet, Text, Pressable} from 'react-native'
import Ionicons from "@expo/vector-icons/Ionicons";

//import constants
import {colors, family, size} from "../../constants/styleConstants";

//import components
import CreateNoteForm from "../forms/CreateNoteForm";

const Create: React.FC = () => {
    const bSMRef = useRef<BottomSheetModal>(null)

    const snapPoints = useMemo(() => ['8%', '75%'], [])

    const handlePresentModalPress = useCallback(() => bSMRef.current?.present(), [])

    const renderBackdrop = useCallback((props) => <BottomSheetBackdrop {...props} />, []);

    return (
        <View style={styles.container}>
            <Pressable onPress={handlePresentModalPress} style={styles.button}>
                <View style={{backgroundColor: colors.white, position: "absolute", height: 35, width: 35}}></View>
                <Ionicons name="add-circle-sharp" color={colors.yellow} size={70}/>
            </Pressable>
            <BottomSheetModal
                ref={bSMRef}
                index={1}
                snapPoints={snapPoints}
                backdropComponent={renderBackdrop}
            >
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Créer</Text>
                    <CreateNoteForm ref={bSMRef}/>
                </View>
            </BottomSheetModal>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: family.bold,
        fontSize: 20,
        alignSelf: "center"
    },
    container: {
        position: "absolute",
        left: "50%",
        marginLeft: -35,
        marginTop: -37.5
    },
    button: {
        height: 70,
        width: 70,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    contentContainer: {
        paddingHorizontal: size.paddingContainer
    },
});

export default Create;
