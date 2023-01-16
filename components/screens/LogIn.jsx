import { StyleSheet, Text, TextInput, View ,TouchableOpacity, ScrollView, KeyboardAvoidingView,} from "react-native";
import React from "react";
import { Video } from "expo-av";


const LogIn = ({navigation,setUserLogged}) => {
  return (
    <KeyboardAvoidingView
    style={{flex:1,backgroundColor:'#fff'}}
    >
    <ScrollView 
    contentContainerStyle={styles.container}
    keyboardShouldPersistTaps="handled"
    >
      <View style={styles.bannerView}>
        <Video
          isMuted={true}
          isLooping={true}
          shouldPlay={true}
          resizeMode="contain"
          source={{
            uri: "https://cdnl.iconscout.com/lottie/premium/thumb/login-6599082-5455225.mp4",
          }}
          style={styles.banner}
        />
      </View>
      <Text style={styles.HEADER}>Welcome Back</Text>
      <View
        style={styles.form}
      >
        <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        value=""
        placeholder="email"
      />
        <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        value=""
        placeholder="password"
      />
      <Text style={{alignSelf:'flex-end',color:'#5d5fefd4',fontWeight:'900',letterSpacing:1,marginBottom:10}}>forgot password</Text>
        <TouchableOpacity style={styles.btn}
        onPress={()=> navigation.replace('Root')}
        >
          <Text style={styles.btnText}>Sign in</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:10}}
      >   
      <Text style={{textAlign:'center',fontSize:14}} >Don't have account? </Text>
      <TouchableOpacity
      style={{alignItems:'center'}}
        onPress={()=> navigation.replace('SignUp')}
        >
          <Text style={{color:'#5D5FEF',fontWeight:'900',fontSize:16}}>Create</Text>
        </TouchableOpacity>
        </View>
    </ScrollView>
    </KeyboardAvoidingView>
    
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal:16,
    backgroundColor:'#fff',
  },
  bannerView: {
    marginVertical:10
  },
  banner: {
    width: 250,
    aspectRatio: 1,
  },
  HEADER: {
    fontSize: 24,
    fontWeight: "900",
    color: "#5D5FEF",
    marginBottom:20,
    alignSelf:'flex-start',
    
  },
  form:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    width:'100%',
    marginVertical:10,
    paddingHorizontal:10,
  },
  input: {
    height: 50,
    width:'100%',
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderColor:'#5D5FEF',
    borderRadius:10
  },
  btn:{
    width:'90%',
    height:50,
    backgroundColor:'#5D5FEF',
    marginTop:20,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'

  },
  btnText:{
    color:'#fff',
    fontSize:20,
    fontWeight:'900',
  }
});
