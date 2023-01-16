import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import Arrow from "react-native-vector-icons/AntDesign";
import image from "../../assets/card.png";
import { serviceTypes, vehicleTypes } from "../apis/DATA";


const Home = ({ navigation }) => {

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    >
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 10 ,width:'95%',paddingRight:10,alignSelf:'center'}}
      >
        <ImageBackground source={image} style={styles.image}>
          <Text style={styles.txt1}>Got Stuck? </Text>
          <Text style={styles.txt2}>Don't worry get a mechanic now</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonStyle}>Hire Now</Text>
          </TouchableOpacity>
        </ImageBackground>
        <ImageBackground source={image} style={styles.image}>
          <Text style={styles.txt1}>Got Stuck? </Text>
          <Text style={styles.txt2}>Don't worry get a mechanic now</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonStyle}>Hire Now</Text>
          </TouchableOpacity>
        </ImageBackground>
      </ScrollView>
      <View style={styles.screen}>
        {/* <FlatList
          data={vehicleTypes}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item }) => {
            return (
              <View style={styles.vehivleDiv} key={item.id}>
                <Image
                  source={{ uri: item.img }}
                  style={styles.vhclImg}
                ></Image>
                <Text style={styles.vhclTxt}>{item.name}</Text>
              </View>
            );
          }}
        /> */}
        <Image
          source={require('../../assets/img/map.png')}
          style={{
              height:180,
              width:'95%',
              alignSelf:'center',
              borderRadius:10
          }}
        />
      </View>
      <View style={styles.hireDrDiv}>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "60%",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "900" }}>Need Driver?</Text>
          <TouchableOpacity
          onPress={()=>{navigation.navigate('Hire Driver')}}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "900",
                color: "#3F41D1",
                textAlignVertical: "center",
              }}
            >
              Hire Now
              <Arrow name="arrowright" size={14} color="#3F41D1" />
            </Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require("../../assets/img/icon.png")}
          style={{ height:'80%',width:'20%'}}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>Best Services</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllBtn}>View All  <Arrow name="right" size={14} color="#3F41D1" /></Text>
        </TouchableOpacity>
      </View>
      <View
      style={{marginBottom:10}}
      >
      <FlatList
          data={serviceTypes}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
                <TouchableOpacity key={item.id} onPress={()=>{
                   item.screen && navigation.navigate(item.screen)
                }}>
              <View style={styles.vehivleDiv} >
                <Image
                  source={item.img}
                  style={styles.servImg}
                ></Image>
                <Text style={styles.vhclTxt}>{item.name}</Text>
              </View>
              </TouchableOpacity>
            );
          }}
        />
        </View>
      </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  txt1: {
    fontSize: 22,
    color: "#fff",
  },
  txt2: {
    fontSize: 15,
    color: "#fff",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: 260,
    height: 140,
    marginTop: 10,
    marginLeft: 16,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
  },
  text1: {
    color: "white",
    fontSize: 20,
    marginTop: 30,
    marginLeft: 70,
    marginBottom: 4,
    alignItems: "center",
  },

  text2: {
    color: "white",
    fontSize: 10,
    marginLeft: 45,
    marginBottom: 5,
    alignItems: "center",
  },

  buttonStyle: {
    color: "blue",
    textAlign: "center",
  },
  button: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 5,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    shadowOpacity: 0.35,
    width: 80,
    marginTop: 15,
  },
  heading: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 15,
  },
  screen: {
    marginVertical:15
  },
  vehivleDiv: {
    width: 100,
    height: 100,
    marginLeft: 15,
    backgroundColor: "white",
    borderRadius: 15,
    elevation: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  vhclImg: {
    aspectRatio: 1,
    height: 70,
  },
  vhclTxt: {
    fontWeight: "bold",
    textAlignVertical: "center",
    textAlign:'center',
    paddingHorizontal:2
  },
  hireDrDiv: {
    width: "95%",
    height: 120,
    backgroundColor:
      "linear-gradient(127.16deg, #5D5FEF -18.65%, rgba(93, 95, 239, 0.5) 23.38%, rgba(69, 66, 211, 0.51) 65.4%, #CCCEF8 107.43%, #4251D3 149.46%);",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-around",
    alignItems: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    marginVertical: 15,
    paddingHorizontal:16
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 26,
  },
  seeAllBtn: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 21,
    color: "#5D5FEF",
  },
  servImg:{
      height:'50%',
    marginBottom:5,
    alignSelf:'center'
  }
});
