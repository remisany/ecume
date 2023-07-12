import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";

//import components
import BottomNav from "../components/common/BottomNav";

const LoggedInScreen: React.FC = () => {
    return (
        <NavigationContainer>
            <BottomNav/>
        </NavigationContainer>
    )
}

export default LoggedInScreen;
