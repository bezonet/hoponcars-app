import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {colors, radius, fontSize, fontFamily} from '../Constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PayByCash = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Pay By Credit Or Debit Card</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter full name"
            placeholderTextColor={colors.lightGray}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter email"
            placeholderTextColor={colors.lightGray}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter address"
            placeholderTextColor={colors.lightGray}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Postcode</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter postcode"
            placeholderTextColor={colors.lightGray}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Card Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter card number"
            placeholderTextColor={colors.lightGray}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Expiration</Text>
          <TextInput
            style={styles.input}
            placeholder="MM/YY"
            placeholderTextColor={colors.lightGray}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>CVC</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter CVC"
            placeholderTextColor={colors.lightGray}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>PayNow</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(5),
    backgroundColor: colors.black,
  },
  title: {
    fontSize: fontSize.large,
    fontFamily: fontFamily.bold,
    color: colors.White,
    textAlign: 'center',
    marginVertical: hp(2),
    fontWeight: 'bold',
    paddingVertical: 20,
  },
  inputContainer: {
    marginBottom: hp(2),
  },
  label: {
    fontSize: 18,
    fontWeight: '800',
    fontFamily: fontFamily.medium,
    color: colors.White,
    marginBottom: hp(1),
  },
  input: {
    backgroundColor: colors.White,
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
    fontSize: fontSize.statusSize,
    fontFamily: fontFamily.regular,
    color: colors.black,
  },
  button: {
    backgroundColor: colors.dulblack,
    borderRadius: radius.radius2,
    paddingVertical: hp(2),
    alignItems: 'center',
    marginTop: hp(3),
  },
  buttonText: {
    fontSize: fontSize.medium,
    fontFamily: fontFamily.bold,
    color: colors.White,
  },
});

export default PayByCash;
