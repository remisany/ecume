import * as React from "react";
import {useFonts} from "expo-font";
import { createStackNavigator } from '@react-navigation/stack';
import {ApolloProvider} from "@apollo/client";

//import components
import LoggedInScreen from "./app/screens/LoggedInScreen";
import LoginScreen from "./app/screens/LoginScreen";

//import server
import apolloClient from "./app/server/apolloClient";
import {useEffect, useState} from "react";
import storageConstants from "./app/constants/storageConstants";

const Stack = createStackNavigator();

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [fontsLoaded] = useFonts({
    "Pacifico": require("./app/assets/fonts/Pacifico-Regular.ttf"),
    "OpenSans-Light": require("./app/assets/fonts/OpenSans-Light.ttf"),
    "OpenSans-Regular": require("./app/assets/fonts/OpenSans-Medium.ttf"),
    "OpenSans-Bold": require("./app/assets/fonts/OpenSans-Bold.ttf"),
  })

  if (!fontsLoaded) {
    return null
  }

  useEffect(() => {
      storageConstants.get().then(response => setIsLoggedIn(response))
  }, [])

  return (
      <ApolloProvider client={apolloClient}>
          <Stack.Navigator>
              {isLoggedIn ? <LoggedInScreen/> : <LoginScreen/>}
          </Stack.Navigator>
      </ApolloProvider>
  )
}

export default App;
