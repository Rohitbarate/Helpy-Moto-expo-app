import { StyleSheet, TouchableOpacity, Image,View,Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NearbyDrivers from "./NearbyDrivers";
import HireDriver from "./HireDriver";
import DriverInfo from "./DriverInfo";
import Home from "./Home";
import Icon from "react-native-vector-icons/FontAwesome";
import Location from "react-native-vector-icons/Octicons";
// import CleaningServices from "./cleaningserScreens/CleaningServices";
// import ServiceDetails from "./cleaningserScreens/ServiceDetails";
import TowingService from './TowingService'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    // <NavigationContainer>
      // <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor:'#fff',
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 16, fontWeight: "600" },
          headerStyle: { backgroundColor: "#5D5FEF" },
          headerRight: () => (
            <TouchableOpacity>
              <Image
                style={{ height: 40, aspectRatio: 1, borderRadius: 20 }}
                source={require("../../assets/img/user.jpg")}
              />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
              <Location
                name="location"
                size={24}
                color="#fff"
              />
              <View style={{display:"flex",flexDirection:'column',marginLeft:10}}>
              <Text style={[styles.txt,{fontSize:16}]}>Delhi </Text>
              <Text style={styles.txt}>Enter your location</Text>
              </View>
              
            </View>
          ),
        }}
      >
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerLeft: () => (
              <TouchableOpacity>
                <Icon name="bars" size={24} color="#fff" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Hire Driver"
          component={HireDriver}
        />
        <Stack.Screen name="Nearby Drivers" component={NearbyDrivers} options={{headerTitle:"Available drivers"}} />
        <Stack.Screen
          name="Driver"
          component={DriverInfo}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Cleaning Services"
          component={CleaningServices}
        />
        <Stack.Screen
          name="ServiceDetails"
          component={ServiceDetails}
        /> */}
        <Stack.Screen
          name="Towing Service"
          component={TowingService}
        /> 
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  txt:{
    color:'#fff',
    fontSize:12,
  }
});
