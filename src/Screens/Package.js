import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {colors, fontSize, radius} from '../Constants';

const Package = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgConatiner}>
        <Image source={require('../Images/packageScreen.png')} />
      </View>
      <View style={styles.TxtContainer}>
        <Text style={styles.txt1}>Send packgaes with {'\n'}Connect</Text>
        <Text style={styles.txt2}>
          Get it delivered in the time it takes to
          {'\n'} drive there
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Send a Package</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Recieve a Package</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dullBlack,
    padding: 25,
  },
  imgConatiner: {
    flex: 2,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TxtContainer: {
    display: 'flex',
    marginVertical: 30,
  },
  txt1: {
    color: colors.White,
    fontSize: fontSize.mediumLarge,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  txt2: {
    fontSize: fontSize.statusSize,
    color: colors.White,
  },
  btnContainer: {
    display: 'flex',
  },
  btnText: {
    color: 'white',
    fontSize: fontSize.medium,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: colors.black,
    borderRadius: 2,
    paddingVertical: 15,
    marginTop: 10,
  },
});

export default Package;
