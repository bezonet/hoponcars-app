import React,{useState} from 'react';
import { View, Text, TouchableOpacity,ScrollView,TextInput, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { colors } from '../../Constants/index';
import MapView, { Marker } from 'react-native-maps';
import Octicons  from 'react-native-vector-icons/Octicons';
import CustomButton from '../../components/CustomButton'
const EnterSaveLocation = ({ navigation }) => {
    const [text, setText] = useState('');
  return (
    <View style={styles.container}>
         <View style={styles.viewOne}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="gray" style={styles.arrowStyle} />

          </TouchableOpacity>
          <View style={styles.inputView}>
          <View style={{flexDirection:'column',width:wp(5),marginRight:wp(2)}}>
         <View style={styles.circle} />
      <View style={styles.line} />
      <View style={styles.rectangle} />
         </View>
         <View style={{flexDirection:'column',width:wp(90)}}>
   <TextInput placeholder="Enter Picker Point" 
       onChangeText={newText => setText(newText)}
       defaultValue={text}
       style={styles.inputStyle}
       placeholderTextColor={'gray'}
       onFocus={() => navigation.navigate('PickSaveLocation')}
       />
        <TextInput placeholder="Enter Picker Point" 
       onChangeText={newText => setText(newText)}
       defaultValue={text}
       style={styles.inputStyle}
       placeholderTextColor={'gray'}
       />
         </View>
      
      </View>
</View>
       
<View style={styles.mapView}>
    <View style={{flexDirection:'row',paddingHorizontal:wp(2)}}>
    <TouchableOpacity style={styles.save}>
    <FontAwesome name="search-plus" size={14} color="black" style={styles.savebtn} />
       
    </TouchableOpacity>
    <Text style={styles.textStyle}>Saved Places</Text>
    </View>
    <View style={{flexDirection:'row',paddingHorizontal:wp(2),marginTop:hp(2)}}>
    <TouchableOpacity style={[styles.save,{}]}>
    <Octicons name="location" size={14} color="black" style={styles.locationbtn} />
       
    </TouchableOpacity>
    <Text style={styles.textStyle}>Set location on map</Text>
    </View>

</View>
     <View style={styles.btnView}>
        <CustomButton
          onPress={() => navigation.navigate('AddMorePickerlocation')}
          title="Confirm Destination"
         
        />
      </View>
    </View>
     
 
  );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:colors.lightblack,
        padding:5
   
    },
    viewOne:{
    height:hp(25),
     backgroundColor:'red',
      backgroundColor:colors.lightblack
    },
    inputView:{
flexDirection:'row',
height:hp(20),

    },
    inputStyle:{
        backgroundColor:'black',
      width:'88%',
      justifyContent:'center',
      alignSelf:'center',
      paddingHorizontal:wp(2),
      margin:hp(1),
      margin:wp(2),
      elevation:10,
      shadowOpacity:10,
      shadowColor:'black'
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
      margin:hp(3)
    },

    mapView:{
      flex:1,
      backgroundColor:colors.lightblack,
      padding:wp(3)
    },
    circle: {
      width: hp(1.3),
      height: hp(1.3),
      borderRadius: 10,
      backgroundColor: colors.greish,
      marginLeft: wp(6.2),
      marginTop:hp(3)
    },
    line: {
 
      height: hp(7),
      width:wp(0.4),
      backgroundColor: colors.greish,
      marginLeft: wp(7.5),
    },
    rectangle: {
      width: hp(1.3),
      height: hp(1.3),
      backgroundColor: colors.greish,
      marginLeft: wp(6.3),
    },
    textStyle:{
        color:colors.White,
        fontSize:16,
        fontWeight:'500',
        paddingVertical:hp(1),
        paddingHorizontal:wp(3)
    },
    savebtn:{
        backgroundColor:colors.greish,
        borderRadius:50,
        paddingHorizontal:wp(2.7),
        paddingVertical:hp(1.3)
    },
    locationbtn:{
        backgroundColor:colors.greish,
        borderRadius:50,
        paddingHorizontal:wp(2.7),
        paddingVertical:hp(1.1)
    }
  });

export default EnterSaveLocation;
