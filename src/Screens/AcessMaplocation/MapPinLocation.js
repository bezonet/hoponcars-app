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
const MapPinLocation = ({ navigation }) => {
    const [text, setText] = useState('');

  const mapStyle = [
    { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{ color: '#263c3f' }],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#6b9a76' }],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{ color: '#38414e' }],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#212a37' }],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#9ca5b3' }],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{ color: '#746855' }],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#1f2835' }],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#f3d19c' }],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{ color: '#2f3948' }],
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#17263c' }],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#515c6d' }],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{ color: '#17263c' }],
    },
  ];

  return (
    <View style={styles.container}>
         <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="gray" style={styles.arrowStyle} />
         </TouchableOpacity>

         <View style={styles.viewOne}>
           <View style={styles.inputView}>
           <View style={{flexDirection:'column',width:wp(5),marginRight:wp(2)}}>
           <View style={[styles.circle,{marginTop:hp(2)}]} />
           <View style={[styles.line,{height:hp(7)}]} />
            <View style={styles.circle} />
            <View style={[styles.line,{height:hp(10)}]} />
           <View style={styles.rectangle} />
         </View>
         <View style={{flexDirection:'column',width:wp(90),backgroundColor:'transparent'}}>
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
       onFocus={() => navigation.navigate('PickSaveLocation')}
       />

        <TextInput placeholder="Enter Picker Point" 
       onChangeText={newText => setText(newText)}
       defaultValue={text}
       style={[styles.inputStyle,{marginTop:hp(2)}]}
       placeholderTextColor={'gray'}
       />
         </View>
      
      </View>
</View>
       
<View style={styles.mapView}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            draggable
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Test Marker'}
            description={'This is a description of the marker'}
          />
        </MapView>
      </View>
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MapPinLocation')}>
            <Text style={styles.buttonText}>Confirm Destination</Text>
          </TouchableOpacity>
        </View>
    </View>
     
 
  );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:colors.lightblack,
        padding:2
   
    },
    viewOne:{
     backgroundColor:'red',
      backgroundColor:colors.lightblack,
      marginTop:hp(3)
    },
    inputView:{
flexDirection:'row',
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
    mapStyle: {
      ...StyleSheet.absoluteFillObject,
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
    button: {
        backgroundColor: '#000000',
        paddingVertical: 15,
        borderRadius: 5,
        marginTop: 40,
        alignItems: 'center',
        width: '95%',
      },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
    mapView:{
      flex:1,
   
      padding:wp(3),
  
    },
    circle: {
      width: hp(1.3),
      height: hp(1.3),
      borderRadius: 10,
      backgroundColor: colors.greish,
      marginLeft: wp(6.2),
    },
    line: {
      height: hp(8),
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
    textStylebtn:{
        color:colors.White,
        fontSize:13,
        fontWeight:'500',
          paddingVertical:hp(1),
          padding:wp(4)
    },
    save:{
        flexDirection:'row',
paddingHorizontal:hp(1),

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
         width:wp(10),
         paddingHorizontal:wp(2.7),
         paddingVertical:wp(1.9),
         height:hp(5),
         alignItems:'center'
      
    },
    textStyle:{
        color:colors.White,
        fontSize:12,
        paddingHorizontal:wp(5)
            },
  });

export default MapPinLocation;
