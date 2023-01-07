import React,{useRef, useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Animated

} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const CollapsibleView = ()=>{
    const [isOpen,setIsOpen]= useState(false);

    // const iconRef = useRef(new Animated.Value('0deg')).current;

    // const iconAnimation = ()=>{
    //     Animated.timing(iconRef,{
    //         toValue:'90deg',
    //         duration:500
    //     }).start();
    // }

    return(
        <View style={styles.container}>
            <View style={styles.row} >
                <Text style={styles.que}>How this service is going to affect my vehicle condition?</Text>
                <TouchableOpacity
                // onPress={()=> iconAnimation}
                >
                    <Animated.View
                        style={{
                            transform: [
                                { rotateZ: "90deg" }
                              ]
                        }}
                    >
                    <Icon name="right" size={18} color="#000" />
                    </Animated.View>
                </TouchableOpacity>
            </View>
            <View style={styles.ansView} >
            <Text style={styles.ans} >
            The following terms and conditions, together with any referenced documents form a legal agreement between you and your employer, employees,agents, contractors and any other entity on whose behalf you accept these terms
            </Text>
            </View>
        </View>
    );
}

export default CollapsibleView;

const styles = StyleSheet.create({
    container:{
        flex:1,
        borderBottomColor:'#5F5F5F',
        borderBottomWidth:1,
        paddingBottom:5
    },
    row:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:5
    },
    que:{
        width:'90%',
        fontSize:16,
        fontWeight:'bold'
    },
    ansView:{

    },
    ans:{
        fontSize:14,
        fontWeight:'400',
        color:'#4F4F4F'
    }
})