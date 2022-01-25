import { StatusBar } from 'expo-status-bar';
import { createSwitchNavigator,createAppContainer } from 'react-native';

import LoginScreen from "./screens/LoginScreen";
import Loadingscreen from "./screens/LoadingScreen";
import DashboardScreen from ".screens/DashboardScreen";

import * as firebase from "firebase";
import{firebaseConfig} from "./config";

if(fierbase.app.length) {
  firebase. initializeapp(firebaseConfig);
} else{
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen:LoadingScreen,
LoginScreen:LoginScreen,
DachboardScreen:DachboardScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);


export default function App() {
  return <AppNavigator />;
  
}


