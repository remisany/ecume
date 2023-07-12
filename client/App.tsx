import * as React from "react";
import {useFonts} from "expo-font";
import { createStackNavigator } from '@react-navigation/stack';
import {ApolloProvider} from "@apollo/client";

//import components
import LoggedInScreen from "./src/screens/LoggedInScreen";
import LoginScreen from "./src/screens/LoginScreen";

//import server
import apolloClient from "./src/server/apolloClient";
import {useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import storageConstants from "./src/constants/storageConstants";
import SignupScreen from "./src/screens/SignupScreen";

const Stack = createStackNavigator();

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        storageConstants.get().then(response => setIsLoggedIn(response))
    }, [])

    const [fontsLoaded] = useFonts({
    "Pacifico": require("./src/assets/fonts/Pacifico-Regular.ttf"),
    "OpenSans-Light": require("./src/assets/fonts/OpenSans-Light.ttf"),
    "OpenSans-Regular": require("./src/assets/fonts/OpenSans-Medium.ttf"),
    "OpenSans-Bold": require("./src/assets/fonts/OpenSans-Bold.ttf"),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
      <ApolloProvider client={apolloClient}>
          <NavigationContainer>
              <Stack.Navigator screenOptions={{headerShown: false}}>
                  {isLoggedIn ?
                      <Stack.Screen name="loggedIn" component={LoggedInScreen}/>
                      :
                      <>
                        <Stack.Screen name="login" component={LoginScreen}/>
                        <Stack.Screen name="signup" component={SignupScreen}/>
                      </>
                  }
              </Stack.Navigator>
          </NavigationContainer>
      </ApolloProvider>
  )
}

export default App;
