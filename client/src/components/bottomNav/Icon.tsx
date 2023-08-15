import * as React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";

//import constants
import {colors} from "../../constants/styleConstants";

interface IIcon {
    name: keyof typeof Ionicons.glyphMap
}

const Icon: React.FC<IIcon> = ({name}) => {
    const navigation = useNavigation();

    const full: keyof typeof Ionicons.glyphMap = name.replace("-outline", "") as keyof typeof Ionicons.glyphMap

    return (
        <Ionicons name={navigation.isFocused() ? full : name} color={colors.black} size={25}/>
    )
}

export default Icon;
