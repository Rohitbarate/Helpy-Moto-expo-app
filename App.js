import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'
import Icon from "react-native-vector-icons/Octicons";
import ChatIcon from "react-native-vector-icons/MaterialIcons";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "./components/screens/HomeScreen";
import SendScreen from "./components/screens/SendScreen";
import SettingScreen from "./components/screens/SettingScreen";
import UserScreen from "./components/screens/UserScreen";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#000"
      inactiveColor="#fff"
      barStyle={{ backgroundColor: '#5D5FEF', }}
      
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Icon name="home" color={color} size={26} />
          ),
          tabBarColor:'#5D5FEF'
          
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={SendScreen}
        options={{
          tabBarLabel: 'Bookings',
          tabBarIcon: ({color}) => (
            <MIcon name="book-outline" color={color} size={26} />
          ),
          tabBarColor:'#1e8d03'
        }}
      />
      <Tab.Screen
        name="Chats"
        component={SettingScreen}
        options={{
          tabBarLabel:'Chats',
          tabBarIcon: ({color}) => (
            <ChatIcon name="chat" color={color} size={26} />
          ),
          tabBarColor:'#b50025'
        }}
      />
      <Tab.Screen
        name="Account"
        component={UserScreen}
        options={{
          tabBarLabel:'Account',
          tabBarIcon: ({color}) => (
            <MIcon name="account-circle-outline" color={color} size={26} />
          ),
          tabBarColor:'#ee7a04'
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
