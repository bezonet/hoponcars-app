import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors, radius, fontSize, fontFamily} from '../Constants/index';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Account = () => {
  return (
    <View style={styles.container}>
      {/* Profile container */}
      <View style={styles.profileContainer}>
        <View style={styles.profilePic}>
          <Image
            style={{resizeMode: 'contain', height: 50}}
            source={require('../Images/profile.png')}
          />
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            height: 50,
          }}>
          <Text style={styles.profileName}>Dot Phasor</Text>
          <Text style={styles.profileNumber}>+91 81234 56789</Text>
        </View>
      </View>
      {/* Faviorate container */}
      <View style={styles.favoritesContainer}>
        <Text
          style={{
            color: colors.gray,
            fontSize: fontSize.statusSize,
            marginVertical: 15,
          }}>
          Faviorates
        </Text>
        <TouchableOpacity style={styles.favoriteItem}>
          <Fontisto name="home" size={15} color="white" />
          <Text style={styles.favoriteText}>Add Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.favoriteItem}>
          <Ionicons name="bag" size={15} color="white" />
          <Text style={styles.favoriteText}>Add Work</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.moreSavedPlaces}>More Saved Places</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Privacy</Text>
        <Text style={styles.optionSubText}>
          Manage the data you share with us
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Security</Text>
        <Text style={styles.optionSubText}>
          Control your account security with 2-step verification
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signOutButton}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dullBlack,
    padding: wp(5),
  },
  header: {
    color: colors.White,
    fontSize: fontSize.large,
    fontFamily: fontFamily.bold,
    marginBottom: hp(2),
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(3),
  },
  profilePic: {},
  profileName: {
    color: colors.White,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.semiBold,
  },
  profileNumber: {
    color: colors.White,
    fontSize: fontSize.statusSize,
    fontFamily: fontFamily.regular,
  },
  favoritesContainer: {
    marginBottom: hp(3),
  },
  favoriteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(1.5),
  },
  favoriteText: {
    color: colors.White,
    fontSize: fontSize.small,
    fontFamily: fontFamily.regular,
    marginLeft: wp(2),
  },
  moreSavedPlaces: {
    color: colors.RobinEggBlue,
    fontSize: fontSize.statusSize,
    fontFamily: fontFamily.regular,
    marginVertical: 15,
  },
  option: {
    marginBottom: hp(3),
  },
  optionText: {
    color: colors.White,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.semiBold,
  },
  optionSubText: {
    color: colors.gray,
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.regular,
  },
  signOutButton: {},
  signOutText: {
    color: colors.White,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.bold,
  },
});

export default Account;
