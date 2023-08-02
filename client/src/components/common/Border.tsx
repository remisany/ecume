import React from 'react'
import {View, StyleSheet} from 'react-native'

const Border: React.FC = () => {
    return (
        <View style={styles.container}></View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "70%",
        height: .5,
        backgroundColor: "rgb(219,219, 219)",
    },
});

export default Border;
