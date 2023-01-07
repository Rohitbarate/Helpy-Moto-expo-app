import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { FAQs, CustomerRating } from "../apis/services";
// import CollapsibleView from "./CollapsibleView";
import RatingCard from "./RatingCard";
import Icon from "react-native-vector-icons/Feather";
import CollapsibleView from "./CollapsibleView";

const ServiceDetails = ({ route }) => {
  const item = route.params.item;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <View style={[styles.infoContainer, styles.VIEW]}>
        <Image source={item.img} style={styles.image} />
        <Text style={styles.desc}>{item.description}</Text>
        <View style={styles.row}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon name="clock" size={22} color="#5D5FEF" />
            <Text
              style={{
                fontSize: 18,
                lineHeight: 19,
                color: "#5D5FEF",
                marginLeft: 8,
              }}
            >
              Takes {item.time} Hours
            </Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text
              style={{
                fontSize: 14,

                lineHeight: 20,
                paddingHorizontal: 24,
                paddingVertical: 4,
                color: "#fff",
              }}
            >
              Add
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.serviceContainer, styles.VIEW]}>
        <Text
          style={[
            styles.HEADER,
            {
              marginBottom: 8,
            },
          ]}
        >
          Service Included
        </Text>
        <Text style={styles.serText}>
          {`\u2022 ${item.warranty} Months warranty`}{" "}
        </Text>
        <Text style={styles.serText}>{`\u2022 Full body wash`}</Text>
        <Text style={styles.serText}>{`\u2022 Interior vaccuming`}</Text>
        <Text
          style={styles.serText}
        >{`\u2022 Free performence boost assistance`}</Text>
        <Text style={styles.serText}>
          {`\u2022 After wash care include polishing, shinner etc`}
        </Text>
        <Text style={styles.serText}>
          {`\u2022 ${item.offForMember}% off on Membership`}
        </Text>
      </View>
      <View style={styles.offerView}>
        <View style={styles.col}>
          <Text
            style={{
              fontSize: 14,

              color: "#ffffff",
              marginBottom: 8,
              lineHeight: 20,
            }}
          >
            Helpy Moto Assurance Program
          </Text>
          <Text style={{ fontSize: 13, color: "#ffffff", lineHeight: 19 }}>
            Free service in case of Unsatisfactory cleaning result
          </Text>
        </View>
        <TouchableOpacity>
          <Icon name="arrow-right-circle" size={36} color="#02af02" />
        </TouchableOpacity>
      </View>
      <View style={[styles.faqView, styles.VIEW]}>
        <Text style={styles.HEADER}>FAQs</Text>

        {/*Code for Collapsible Start*/}
        <CollapsibleView />
        {/* {FAQs.map((faq) => {
          return <CollapsibleView key={faq.title} data={faq} />;
        })} */}

        {/*Code for Collapsible ends*/}
      </View>
      <View style={[styles.rating, styles.VIEW]}>
        <Text style={[styles.HEADER, { marginBottom: 24 }]}>
          Customer Rating
        </Text>
        <FlatList
          data={CustomerRating}
          renderItem={RatingCard}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />
      </View>
    </ScrollView>
  );
};

export default ServiceDetails;

const styles = StyleSheet.create({
  container: {
    width: 360,
    color: "#ffffff",
  },
  HEADER: {
    fontSize: 18,
    lineHeight: 23,
    fontWeight: "bold",
    marginBottom: 10,
  },
  VIEW: {
    width: 360,
    display: "flex",
    padding: 16,
  },
  infoContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: "100%",
    height: 197,
    marginBottom: 16,
    borderRadius: 4,
  },
  desc: {
    fontSize: 14,
    lineHeight: 20,
    color: "#4F4F4F",
    marginBottom: 16,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  button: {
    backgroundColor: "#5D5FEF",
    borderRadius: 4,
  },
  serviceContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  serText: {
    marginBottom: 8,
    fontSize: 14,
    lineHeight: 20,
    color: "#4F4F4F",
  },
  offerView: {
    width: "100%",
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#5D5FEF",
    paddingVertical: 8,
    justifyContent: "space-between",
  },
  col: {
    paddingVertical: 8,
  },
  faqView: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  rating: {},
});
