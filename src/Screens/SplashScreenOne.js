import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from '../Constants/index';
import { useNavigation } from '@react-navigation/native';

const SplashScreenOne = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('SplashScreenTwo'); 
    }, 3000);

    return () => clearTimeout(timer); 
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.imgView}>
        <Image source={require('../Images/logo.png')} style={styles.imgStyle} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.yellow,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  imgView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgStyle: {
    height: hp(80),
    width: wp(80),
    resizeMode: 'contain'
  }
})

export default SplashScreenOne
