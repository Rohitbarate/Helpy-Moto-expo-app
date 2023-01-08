import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const CollapsibleView = ({que,ans}) => {
  const [isOpen, setIsOpen] = useState(false);
  const iconRef = useRef(new Animated.Value(0)).current;

  const iconAnimation = () => {
    Animated.timing(iconRef, {
      toValue: !isOpen ? 1 : 0,
      duration: 100,
      useNativeDriver: true,
    }).start(({finished})=> finished && setIsOpen(!isOpen));
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.que}>
          {que}
        </Text>
        <TouchableOpacity
          onPress={iconAnimation}
          style={{
            elevation:4,
            zIndex:100,
            transform: [
              {
                rotate: iconRef.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0deg", "90deg"],
                }),
              },
            ],
          }}
        >
          <Icon name="right" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <Animated.View
        style={[
          styles.ansView,
          {
            transform: [
              {
                scaleY:iconRef
              }
            ],
            display:!isOpen?"none":"flex",
          },
        ]}
      >
        <Text style={styles.ans}>
          {ans}
        </Text>
      </Animated.View>
    </View>
  );
};

export default CollapsibleView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopColor: "#5F5F5F",
    borderTopWidth: 1,
    paddingTop: 5,
    overflow: "hidden",
    paddingBottom:10
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
    // elevation:4,
    // zIndex:100
  },
  que: {
    width: "90%",
    fontSize: 16,
    fontWeight: "bold",
  },
  ansView: {
    // flex: 1,
    right:0,
    bottom:0,
    width:'95%'
  },
  ans: {
    fontSize: 14,
    fontWeight: "400",
    color: "#4F4F4F",
  },
});
