import React from "react";
import {useFonts} from "expo-font";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ApolloProvider} from "@apollo/client";
import {NavigationContainer} from "@react-navigation/native";
import Toast from 'react-native-toast-message';

//import components
import LoggedInScreen from "./src/screens/auth/LoggedInScreen";
import LoginScreen from "./src/screens/noAuth/LoginScreen";
import SignupScreen from "./src/screens/noAuth/SignupScreen";
import ForgotScreen from "./src/screens/noAuth/ForgotScreen";
import PasswordScreen from "./src/screens/auth/PasswordScreen";

//import server
import apolloClient from "./src/server/apolloClient";

//import constants
import toastConstants from "./src/constants/toastConstants";

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
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
                  <Stack.Screen name="connecte" component={LoggedInScreen}/>
                  <Stack.Screen name="definition" component={PasswordScreen}/>
                  <Stack.Screen name="connexion" component={LoginScreen}/>
                  <Stack.Screen name="inscription" component={SignupScreen}/>
                  <Stack.Screen name="recuperation" component={ForgotScreen}/>
              </Stack.Navigator>
          </NavigationContainer>
          <Toast config={toastConstants.config}/>
      </ApolloProvider>
  )
}

export default App;
