import React from "react";

//import components
import BottomNav from "../../components/common/BottomNav";
import AuthScreen from "./AuthScreen";
import {BottomSheetModalProvider} from "@gorhom/bottom-sheet";

const LoggedInScreen: React.FC = () => {
    return (
        <BottomSheetModalProvider>
            <AuthScreen>
                <BottomNav/>
            </AuthScreen>
        </BottomSheetModalProvider>
    )
}

export default LoggedInScreen;
