import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { drivers } from "../apis/DATA";
import DriverContainer from "./DriverContainer";

const HIreDriver = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
      <Image source={require('../../assets/card.png')} style={styles.image} />
      <View style={{position:'absolute',top:15,left:10}}>
      <Text style={styles.txt1}>Got Stuck? </Text>
        <Text style={styles.txt2}>Don't worry hire a driver now</Text>
      </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>Nearby Drivers</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Nearby Drivers")}>
          <Text style={styles.seeAllBtn}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={drivers}
        keyExtractor={(item) => item.driverId}
        renderItem={({ item }) => {
          return <DriverContainer driver={item} navigation={navigation} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HIreDriver;

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal: 16,
  },
  txt1: {
    fontSize: 22,
    color: "#fff",
  },
  txt2: {
    fontSize: 15,
    color: "#fff",
  },
  image: {
    width:'100%',
    height:200,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:12
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    marginVertical: 15,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    lineHeight: 26,
  },
  seeAllBtn: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 21,
    color: "#5D5FEF",
  },
});
