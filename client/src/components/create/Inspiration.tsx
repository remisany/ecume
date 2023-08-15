import React from "react";
import {StyleSheet, View} from "react-native";

//import components
import AppText from "../common/AppText";

//import constants
import {colors} from "../../constants/styleConstants";

interface IInspiration {
    inspiration: Number
}

const Inspiration: React.FC<IInspiration> = ({inspiration}) => {
    return (
        <View style={[styles.container]}>
            {inspiration !== 0 ?
                <AppText>
                    « J'ai des mensonges tellement beaux, tu voudras plus jamais croire la vérité. » - Orelsan
                </AppText>
                :
                <AppText>
                    « Je ne travaille pas avec l'inspiration. L'inspiration est pour les amateurs. Je me mets juste au travail. » - C. Close
                </AppText>
            }
        </View>
    )
}

export default Inspiration;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: 10,
        marginTop: 105,
        margin: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 62,
    }
})
