import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {colors} from '../Constants';

const BeforePayment = () => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <View style={styles.imageContainer}>
        <Image source={require('../Images/BeforePayment.png')} />
      </View>
      {/* Text */}
      <View style={styles.txtContainer}>
        <Text>Text</Text>
      </View>
      {/* Done Button */}
      <View style={styles.btnConatiner}>
        <Text>Done Button</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dulblack,
  },
  imageContainer: {
    flex: 3,
    marginTop: '50%',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  txtContainer: {
    flex: 1,
  },
  btnConatiner: {
    // flex: 1,
  },
});

export default BeforePayment;
