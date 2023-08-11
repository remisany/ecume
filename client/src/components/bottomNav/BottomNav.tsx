import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

//import components
import Header from "../common/Header";
import Icon from "./Icon";
import HomeScreen from "../../screens/auth/HomeScreen";
import NotificationScreen from "../../screens/auth/NotificationScreen";
import TabBar from "./TabBar";

//import constants
import tabScreenOptions from "../../constants/tabScreenConstant";

const Tab = createBottomTabNavigator();

const BottomNav: React.FC = () => {
    return (
        <Tab.Navigator tabBar={(props) => <TabBar {...props}/>}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    ...tabScreenOptions,
                    headerTitle: () => <Header/>,
                    tabBarIcon: () => <Icon name="home-outline"/>
                }}
            />

            <Tab.Screen
                name="Notification"
                component={NotificationScreen}
                options={{
                    ...tabScreenOptions,
                    headerTitle: () => <Header/>,
                    tabBarIcon: () => <Icon name="md-notifications-outline"/>
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomNav;
