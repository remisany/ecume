import React, {useCallback, useMemo, useRef} from 'react'
import {BottomSheetBackdrop, BottomSheetModal} from '@gorhom/bottom-sheet'
import {View, StyleSheet, Text, Pressable} from 'react-native'
import Ionicons from "@expo/vector-icons/Ionicons";

//import constants
import styleConstants from "../../constants/styleConstants";

//import components
import CreateNoteForm from "../forms/CreateNoteForm";

const Create: React.FC = () => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null)

    const snapPoints = useMemo(() => ['5%', '75%'], [])

    const handlePresentModalPress = useCallback(() => bottomSheetModalRef.current?.present(), [])

    const renderBackdrop = useCallback((props) => <BottomSheetBackdrop {...props} />, []);

    return (
        <View>
            <Pressable onPress={handlePresentModalPress}>
                <Ionicons name="add-circle-sharp" color={styleConstants.colors.black} size={35}/>
            </Pressable>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={1}
                snapPoints={snapPoints}
                backdropComponent={renderBackdrop}
            >
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Créer</Text>
                    <CreateNoteForm/>
                </View>
            </BottomSheetModal>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: styleConstants.family.bold,
        fontSize: 20,
        marginBottom: 10,
        alignSelf: "center"
    },
    contentContainer: {
        paddingHorizontal: styleConstants.size.paddingContainer
    },
});

export default Create;
