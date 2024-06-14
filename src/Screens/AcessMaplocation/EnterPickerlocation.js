import React,{useState} from 'react';
import { View, Text, TouchableOpacity,ScrollView,TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { colors } from '../../Constants/index';
const EnterPickerlocation = ({ navigation }) => {
    const [text, setText] = useState('');
  return (
    <View style={styles.container}>
         <View style={styles.viewOne}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="red" style={styles.arrowStyle} />
          </TouchableOpacity>
      <TextInput placeholder="Enter Picker Point" 
       onChangeText={newText => setText(newText)}
       defaultValue={text}
       style={styles.inputStyle}
       />
      <View style={{padding: 10}}>
     
     
    </View>
        </View>
       

 
    </View>
     
 
  );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:colors.White,
   
    },
    viewOne:{
    height:hp(30),
    backgroundColor:'red'
    // backgroundColor:colors.dulblack
    },
    inputStyle:{
        backgroundColor:'black',
      width:'90%',
      justifyContent:'center',
      alignSelf:'center'
    },
   
    title: {
      fontSize: 24,
      color: 'white',
      marginBottom: 40,
      marginTop:20,
      textAlign: 'left',
      fontWeight:'500'
    
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 300,
      alignSelf: 'center',
    },
    input: {
      color: 'white',
      borderBottomWidth: 1,
      borderBottomColor: '#DADADA',
      width: 140,
      padding: 8,
      fontSize: 16,
    },
    arrowStyle: {
      marginRight: 'auto',
      paddingHorizontal:wp(2),
      paddingVertical:hp(2)
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
  });

export default EnterPickerlocation;
