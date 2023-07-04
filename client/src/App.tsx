import * as React from "react";
import {useFonts} from "expo-font";
import {NavigationContainer} from "@react-navigation/native";

//import components
import BottomNav from "./app/components/common/BottomNav";

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    "Pacifico": require("./app/assets/fonts/Pacifico-Regular.ttf"),
    "OpenSans-Light": require("./app/assets/fonts/OpenSans-Light.ttf"),
    "OpenSans-Regular": require("./app/assets/fonts/OpenSans-Medium.ttf"),
    "OpenSans-Bold": require("./app/assets/fonts/OpenSans-Bold.ttf"),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
      <NavigationContainer>
        <BottomNav/>
      </NavigationContainer>
  )
}

export default App;
