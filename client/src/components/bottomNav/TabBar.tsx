import React from "react";
import {View} from "react-native";
import {BottomTabBar} from "@react-navigation/bottom-tabs";

//import components
import Create from "../create/Create";

const TabBar = (props) => {
    return (
        <View style={{position: "relative"}}>
            <BottomTabBar {...props}/>
            <Create/>
        </View>
    )
}

export default TabBar
