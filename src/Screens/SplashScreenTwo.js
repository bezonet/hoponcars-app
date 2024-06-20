import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from '../Constants/index';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SplashScreenTwo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgView}>
        <Image source={require('../Images/logo.png')} style={styles.imgStyle} />
        <View style={styles.textView}>
          <Text style={styles.textStyle}>Move with safety</Text>
          <Ionicons name="shield-checkmark-outline" size={24} color="white" style={styles.arrowStyle} />
        </View>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EnterPickerlocation')}>
          <Text style={styles.buttonText}>Get Started</Text>
          <Ionicons name="arrow-forward" size={24} color="white" style={styles.arrow} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.yellow,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },
  imgView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(5),
  },
  imgStyle: {
    height: hp(30),
    width: wp(80),
    resizeMode: 'contain',
  },
  textView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(2),
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
    borderColor: colors.White,
    justifyContent: 'space-between',
    width: wp(60),
  },
  textStyle: {
    fontSize: wp(5),
    color: colors.White,
  },
  arrowStyle: {
    // marginLeft: wp(1),
  },
  btnView: {
    position: 'absolute',
    bottom: hp(5),
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: hp(2),
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(90),
  },
  buttonText: {
    color: 'white',
    fontSize: wp(5),
    marginRight: wp(2),
  },
  arrow: {
    marginLeft: wp(2),
  }
});

export default SplashScreenTwo;
