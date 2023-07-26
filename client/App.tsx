import * as React from "react";
import {useFonts} from "expo-font";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ApolloProvider} from "@apollo/client";
import {useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import Toast from 'react-native-toast-message';

//import components
import LoggedInScreen from "./src/screens/auth/LoggedInScreen";
import LoginScreen from "./src/screens/noAuth/LoginScreen";
import SignupScreen from "./src/screens/noAuth/SignupScreen";
import ForgotScreen from "./src/screens/noAuth/forgotScreen";

//import server
import apolloClient from "./src/server/apolloClient";

//import constants
import storageConstants from "./src/constants/storageConstants";
import toastConstants from "./src/constants/toastConstants";
import PasswordScreen from "./src/screens/PasswordScreen";

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        //storageConstants.set('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmZmNGY3YmI4ODQ1ODA2MWFlNjU2ZiIsImVtYWlsIjoiYmFuZ28ucmVtaUBob3RtYWlsLmZyIiwiaGFzQ2hhbmdlUGFzc3dvcmQiOmZhbHNlLCJpYXQiOjE2OTAzMTIwNDV9.KxxP2UAzpFbDh90MSCgeNiyiYskwvIQ0Gx0BZnXvZgo')
        //storageConstants.set('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAYS5mciIsImlhdCI6MTUxNjIzOTAyMn0.JqTZhm7_3gPXRICjj6_uMFgcOd0mQA3yEXY60reTIaA')
        storageConstants.get().then(response => setIsLoggedIn(response !== null))
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
                      <>
                          <Stack.Screen name="connecte" component={LoggedInScreen}/>
                          <Stack.Screen name="definition" component={PasswordScreen}/>
                      </>
                      :
                      <>
                          <Stack.Screen name="connexion" component={LoginScreen}/>
                          <Stack.Screen name="inscription" component={SignupScreen}/>
                          <Stack.Screen name="recuperation" component={ForgotScreen}/>
                      </>
                  }
              </Stack.Navigator>
          </NavigationContainer>
          <Toast config={toastConstants.config}/>
      </ApolloProvider>
  )
}

export default App;
