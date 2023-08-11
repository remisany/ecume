import React from "react";

//import components
import BottomNav from "../../components/bottomNav/BottomNav";
import Auth from "../../components/common/Auth";

const LoggedInScreen: React.FC = () => {
    return (
        <Auth>
            <BottomNav/>
        </Auth>
    )
}

export default LoggedInScreen;
