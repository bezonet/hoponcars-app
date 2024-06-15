import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {colors} from '../Constants';
import {fontSize} from '../Constants';

const PaymentScreen = () => {
  const GoTodebitCardForm = () => {
    Alert.alert('going to Debit and credt card information filling form');
  };

  const GoToTeanContact = () => {
    Alert.alert('Going to TeanContact Screen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.txtContainer}>
        <Text style={styles.txt}>Select your preferred payment method</Text>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          onPress={GoTodebitCardForm}
          style={styles.cardContainer}>
          <Image source={require('../Images/paybycreditcard.png')} />
          <Text style={styles.btnTxt}>Pay by Credit or Debit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={GoToTeanContact}
          style={styles.cardContainer}>
          <Image source={require('../Images/paybycash.png')} />
          <Text style={styles.btnTxt}>Pay by Cash</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dulblack,
    padding: 20,
  },
  txtContainer: {
    display: 'flex',
    paddingVertical: 20,
  },
  txt: {
    color: colors.White,
    fontSize: fontSize.medium,
    fontWeight: '600',
  },
  optionsContainer: {
    flex: 1,
  },
  btnTxt: {
    color: colors.White,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.black,
    borderRadius: 5,
    marginVertical: 5,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
});

export default PaymentScreen;
