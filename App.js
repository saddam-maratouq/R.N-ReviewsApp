import Home from "./Screens/Home";
import * as React from "react";
import { useFonts } from "expo-font";
import MainRout from "./routes/MainRout";
import Test from "./Screens/Test/Test";
import { SafeAreaProvider } from 'react-native-safe-area-context';

// import Navigator from './routes/homeStack'




export default function App() {
  const [loaded] = useFonts({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
  // <Test/>   
  <SafeAreaProvider>
  <MainRout/> 
  </SafeAreaProvider>
  ) 
}
 