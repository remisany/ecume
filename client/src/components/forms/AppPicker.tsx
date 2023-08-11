import React, {useState} from 'react'
import {StyleSheet, View} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {Dropdown} from "react-native-element-dropdown";

//import components
import AppText from "../common/AppText";

//import interface
import {IPickerItems} from "../../interfaces/pickerInterface";

//import constants
import styleConstants from "../../constants/styleConstants";

interface IAppPicker {
    title: string
    items: IPickerItems
    value: string | number | null
    setValue: Function
}

const AppPicker: React.FC<IAppPicker> = ({title, items, value, setValue}) => {
    const [isFocus, setIsFocus] = useState<boolean>(false);

    return (
        <View style={styles.container}>
            <AppText customStyle={{marginBottom: 5}}>{title}</AppText>
            <Dropdown
                style={[styles.dropdown, isFocus && {borderColor: styleConstants.colors.yellow}]}
                data={items}
                maxHeight={250}
                labelField="label"
                valueField="value"
                value={value}
                placeholder={!isFocus ? '' : ''}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                activeColor={styleConstants.colors.yellow}
                onChange={item => {
                    setValue(item.value)
                    setIsFocus(false)
                }}
                renderRightIcon={() => (
                    isFocus ? <Ionicons name="chevron-up" color={styleConstants.colors.yellow} size={25}/>
                    : <Ionicons name="chevron-down" color={styleConstants.colors.black} size={25}/>
                )}
                containerStyle={styles.itemContainer}
                itemContainerStyle={{borderRadius: 5}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
    },
    dropdown: {
        height: 45,
        borderColor: styleConstants.colors.black,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    itemContainer: {
        borderRadius: 5,
        marginTop: 5,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
        borderColor: '#D8D8D8',
    }
});

export default AppPicker;
