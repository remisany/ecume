import * as React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

//import components
import Header from "./Header";
import Icon from "./Icon";

//import constants
import {tabScreenConstant} from "../../constants/tabScreenConstant";

const Tab = createBottomTabNavigator();

const BottomNav: React.FC = () => {
    return (
        <Tab.Navigator>
            {tabScreenConstant.map((screen, index) => {
                const {name, component, icon} = screen

                return (
                    <Tab.Screen
                        key={index}
                        name={name}
                        component={component}
                        options={{
                            headerTitle: () => <Header/>,
                            tabBarIcon: () => <Icon name={icon}/>,
                            tabBarShowLabel: false
                        }}
                    />
                )
            })}
        </Tab.Navigator>
    )
}

export default BottomNav;
