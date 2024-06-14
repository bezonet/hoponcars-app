import React from 'react';
import { View, Text,Image, TouchableOpacity,KeyboardAvoidingView,TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { colors } from '../Constants/index';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const TermAndPolicy = ({ navigation }) => {
  return (

      <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24}  style={styles.arrowStyle} />
          </TouchableOpacity>
     <View style={styles.secView}>
       <View style={styles.imgView}>
        <Image source={require('../Images/Designer.png')} style={styles.imgStyle}/>
      </View>
    <View style={styles.textView}>
      <Text style={[styles.textStyle,{justifyContent:'flex-end',marginTop:40}]}>
       By tapping the arrow below, you agree   to Uber’s Terms of Use and acknowledge that you have read the  Privacy Policy
      </Text>
   </View>

  <View style={styles.textView}>
   <Text style={[styles.textStyle,{justifyContent:'flex-end',marginTop:47}]}>
     Check the box to indicate that you are atleast 18 years of age, agree to the <Text style={styles.termStyle}>Terms & Conditions</Text> and acknowledge the <Text style={styles.termStyle}>Privacy Policy</Text>.</Text>
  </View>
 </View>
     
     <View style={styles.btnView}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
container: {
      flex: 1,
      backgroundColor: '#1A1A1A',
      padding: 16,
      justifyContent: 'space-between',

    },
 secView:{
   flex:1,
// backgroundColor:'red'
    },
    imgView:{
      marginTop:hp(5),
height:hp(30),
width:wp(30),
// backgroundColor:'green',
alignSelf:'center',
justifyContent:'center'
    },
    arrowStyle: {
      marginRight: 'auto',
      color:Colors.lightGray
    },
    btnView: {
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#000000',
      paddingVertical: 15,
      borderRadius: 5,
      marginTop: 40,
      alignItems: 'center',
      width: '100%',
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
    textStyle:{
      fontSize:17,
      color:'#EDF6FF',
      fontWeight:'400',
      alignSelf:'center'
    },
    textView:{
      flex:1,width:wp(90),
      justifyContent:'center',
      alignSelf:'center',
      // backgroundColor:'gray'
    },
    imgStyle:{
      height:hp(20),width:wp(34),marginTop:10
    },
    termStyle:{
      color:colors.purpleblue
    }
  });

export default TermAndPolicy;
