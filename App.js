import React, { useState } from "react";
import {
  TouchableOpacity,
  Image,
  View,
  Text,
  StyleSheet,
  StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/screens/Home";
import NearbyDrivers from "./components/screens/NearbyDrivers";
import HireDriver from "./components/screens/HireDriver";
import DriverInfo from "./components/screens/DriverInfo";
import TowingService from "./components/screens/TowingService";
import CleaningServices from "./components/screens/CleaningServices";
import ServiceDetails from "./components/screens/ServiceDetails";
import Icon from "react-native-vector-icons/FontAwesome";
import Location from "react-native-vector-icons/Octicons";
import HeartIcon from "react-native-vector-icons/Fontisto";
import Chats from "./components/screens/Chats";
import Bookings from "./components/screens/Bookings";
import UserProfile from "./components/screens/UserProfile";
import LogIn from "./components/screens/LogIn";
import SignUp from "./components/screens/SignUp";

export default function App() {
  const [userLogged, setUserLogged] = useState(false);

  const Tab = createBottomTabNavigator();

  const Stack = createNativeStackNavigator();

  const HomeStack = () => {
    return (
      
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 16, fontWeight: "600" },
          headerStyle: { backgroundColor: "#5D5FEF" },
          headerTitle: () => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Location name="location" size={24} color="#fff" />
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 10,
                }}
              >
                <Text style={[styles.txt, { fontSize: 16 }]}>Delhi </Text>
                <Text style={styles.txt}>Enter your location</Text>
              </View>
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Image
                style={{ height: 40, aspectRatio: 1, borderRadius: 20 }}
                source={require("./assets/img/user.jpg")}
              />
            </TouchableOpacity>
          ),
        }}
      >
       
            <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="Hire Driver" component={HireDriver} />
          <Stack.Screen
            name="Nearby Drivers"
            component={NearbyDrivers}
            options={{ headerTitle: "Available drivers" }}
          />
          <Stack.Screen
            name="Driver"
            component={DriverInfo}
            options={({ route }) => ({
              headerTitle: route.params.driver.name,
              headerRight: () => (
                <HeartIcon name="heart-alt" size={24} color="#fff" />
              ),
            })}
          />
          <Stack.Screen name="Cleaning Services" component={CleaningServices} />
          <Stack.Screen name="Towing Service" component={TowingService} />
          <Stack.Screen
            name="ServiceDetails"
            component={ServiceDetails}
            options={({ route }) => ({
              headerTitle: route.params.item.serviceName,
              headerShown: true,
            })}
          />         
      </Stack.Navigator>
    );
  };

  const ProfileStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="User" component={UserProfile} />
      </Stack.Navigator>
    );
  };

  const ChatStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Chats" component={Chats} />
      </Stack.Navigator>
    );
  };

  const BookingStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Bookings" component={Bookings} />
      </Stack.Navigator>
    );
  };

  const RootStack = () => {
    return (
      <Tab.Navigator
          initialRouteName="HomeStack"
          screenOptions={{
            tabBarActiveTintColor: "#5D5FEF",
            tabBarInactiveTintColor: "#000",
            headerShown: false,
          }}
        >
          <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="BookingsStack"
            component={BookingStack}
            options={{
              tabBarLabel: "Bookings",
              tabBarIcon: ({ color, size }) => (
                <Icon name="list-alt" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="ChatsStack"
            component={ChatStack}
            options={{
              tabBarLabel: "Chats",
              tabBarIcon: ({ color, size }) => (
                <Icon name="wechat" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="UserStack"
            component={ProfileStack}
            options={{
              tabBarLabel: "User",
              tabBarIcon: ({ color, size }) => (
                <Icon name="user-circle" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
    );
  };


  //  root component

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#5D5FEF" barStyle="dark-content" />
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false}} >
        <Stack.Screen name="Root" component={RootStack} />
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    color: "#fff",
    fontSize: 12,
  },
});
