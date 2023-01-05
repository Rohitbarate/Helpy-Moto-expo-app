import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Image,
  } from "react-native";
import React from 'react'

const CleaningServices = ({navigation}) => {


  // offers view start
  const OfferScreen = ({ item }) => {
    return (
      <View style={styles.offerScreen}>
        <Image
          source={require("../../assets/img/discount.png")}
          style={{ height: 34, aspectRatio: 1, borderRadius: 50 }}
        />
        <Text style={{ color: "#fff", fontSize: 14,fontFamily:'Jost-SemiBold', }}>
          {item}
        </Text>
      </View>
    );
  };
  // offers view end

  //  service view screen start
  const ServiceView = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ServiceDetails", {
            item: item,
          });
        }}
      >
        <View style={styles.serviceView}>
          <Image style={styles.serviceImg} source={item.img} />
          <TouchableOpacity style={styles.button}>
            <Text
              style={{
                fontSize: 14,
                fontFamily:'Jost-SemiBold',
                lineHeight: 20,
                paddingHorizontal: 24,
                paddingVertical: 4,
                color: "#fff",
              }}
            >
              Add
            </Text>
          </TouchableOpacity>
          <View style={styles.serviceInfo}>
            <Text style={{ fontSize: 15, fontFamily:'Jost-Medium', marginBottom: 4,lineHeight:21 }}>
              {item.serviceName}
            </Text>
            <Text style={styles.text}>{`\u2022 Takes ${item.time} hours to `}</Text>
            <Text style={styles.text}>{`\u2022 ${item.warranty} Months warranty`} </Text>
            <Text style={styles.text}>{`\u2022 After wash care`}</Text>
            <Text style={styles.text}>
              {`\u2022 ${item.offForMember}% off on Membership`}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  marginRight: 8,
                  fontSize: 13,
                  fontFamily:'Jost-Medium',
                  textDecorationStyle: "dashed",
                  textDecorationLine: "line-through",
                  color: "#000000",
                  opacity: 0.4,
                  lineHeight:19
                }}
              >
                &#8377;{item.price}.00
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  color: "#000",
                  fontFamily:'Jost-Bold',
                  lineHeight:22
                }}
              >
                &#8377;{item.newPrice}.00
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  //  service view screen end

  // root screen
  return (
    <View style={styles.container}>
      <View style={styles.offersCont}>
        <FlatList
          data={services.offers}
          renderItem={OfferScreen}
          keyExtractor={(item) => item}
          horizontal={true}
          pagingEnabled={false}
        />
      </View>
      <View style={styles.services}>
        <FlatList
          data={services.Services}
          renderItem={ServiceView}
          keyExtractor={(item) => item.img}
        />
      </View>
      <View style={{ marginTop: 2, paddingVertical: 16, paddingLeft: 16 }}>
        <Text style={{ fontSize: 16, fontFamily:'Jost-SemiBold', marginBottom: 16,lineHeight:23 }}>
          Trending Services
        </Text>
        {/*  trending services view */}
        <FlatList
          data={services.TrendingServices}
          keyExtractor={(item) => item.id}
          horizontal={true}
          renderItem={({ item }) => (
            <TouchableOpacity
            onPress={()=>{
              navigation.navigate('ServiceDetails',
              {
              item:item
            })}}
            >
            <View style={{ marginRight: 8,}}>
              <Image
                source={item.img}
                style={{ height: 152, aspectRatio: 1 ,borderRadius:4}}
              />
             <Text style={styles.tredServName}>{item.serviceName}</Text>
            </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default CleaningServices

const styles = StyleSheet.create({

})