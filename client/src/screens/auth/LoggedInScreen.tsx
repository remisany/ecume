import React from "react";

//import components
import BottomNav from "../../components/common/BottomNav";
import AuthScreen from "./AuthScreen";

const LoggedInScreen: React.FC = () => {
    return (
        <AuthScreen>
            <BottomNav/>
        </AuthScreen>
    )
}

export default LoggedInScreen;
