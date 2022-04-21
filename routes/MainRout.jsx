
import * as React from 'react';
import { View, Text } from 'react-native';
import {  NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home';
import About from '../Screens/About';
import Review from '../Screens/Review'; 
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


// navigation options 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


//icons library 
import { FontAwesome5 } from '@expo/vector-icons'; 

//   const Drawer = createDrawerNavigator(); 
const Tabs = createMaterialTopTabNavigator();  

function MainRout() { 
  return (
  
    
    <NavigationContainer>
      <Tabs.Navigator initialRouteName="Home" 

      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => { 
            let Icons; 

            if (route.name === 'Home') {
                Icons = 'home' 
               size = focused ? 25 : 20 
              //  color = focused ? '#f0f' : '#555'
            }
                
             else if (route.name === 'About') {
                Icons =  'heart'  
               size = focused ? 25 : 20 
              //  color = focused ? '#f0f' : '#555'
            }

            else if (route.name === 'Review') { 
               Icons =  'fantasy-flight-games'  
               size = focused ? 25 : 20  
              //  color = focused ? '#f0f' : '#555' 
            }

            return <FontAwesome5 name={Icons} size={size} color={color} />  
          
          },
          //another way to control color with more options ...
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: '#555', 
          tabBarActiveBackgroundColor : 'gray',
          tabBarShowLabel : false ,
          tabBarLabelStyle : { fontSize:14} ,
          tabBarStyle: { backgroundColor: 'black' }, 
        })}  
        
      > 
        <Tabs.Screen name="Home" component={Home} options={{ title: 'gameZone' }}/>
        <Tabs.Screen name="About" component={About}  options={{ title: ' About_gameZone' }}  /> 
        <Tabs.Screen name="Review" component={Review}  options={{ title: ' Review_gameZone' }} />  
      </Tabs.Navigator>
    </NavigationContainer> 
    
  );
}

export default MainRout; 