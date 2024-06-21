import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors, fontSize, radius} from '../Constants';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          To find your pickup{'\n'} location{'\n'} automatically, turn {'\n'} on
          location services
        </Text>
        <TouchableOpacity style={styles.locationButton}>
          <Text style={styles.locationButtonText}>Turn on location</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.toggleContainer}>
        <TouchableOpacity style={styles.toggleButton}>
          <Image
            source={require('../Images/location.png')}
            style={styles.icon}
          />
          <Text style={styles.toggleButtonText}>Ride</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.toggleButton}>
          <Image
            source={require('../Images/package.png')}
            style={styles.icon}
          />
          <Text style={styles.toggleButtonText}>Package</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.view3}>
        <TouchableOpacity style={styles.input}>
          <Text style={styles.locationButtonText}>Enter pickup point</Text>
        </TouchableOpacity>
        <Text style={styles.aroundYouText}>Around you</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dullBlack,
  },
  header: {
    flex: 1,
    backgroundColor: colors.orangeish,
    paddingHorizontal: 25,
    paddingVertical: 30,
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  headerText: {
    color: colors.black,
    fontSize: fontSize.mediumLarge,
  },
  locationButton: {
    backgroundColor: colors.black,
    borderRadius: radius.radius5,
    maxWidth: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  locationButtonText: {
    color: colors.White,
    fontSize: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.dullBlack,
    paddingVertical: 15,
  },
  toggleButton: {
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
  },
  toggleButtonText: {
    color: colors.White,
    marginTop: 5,
  },
  input: {
    backgroundColor: colors.blakish,
    color: colors.White,
    padding: 10,
    marginHorizontal: 40,
    margin: 10,
    borderRadius: 5,
    fontSize: 20,
  },
  aroundYouText: {
    color: colors.White,
    fontSize: fontSize.medium,
    marginLeft: 10,
    marginTop: 10,
  },
  map: {
    width: '100%',
    height: hp('30%'),
    marginTop: 10,
  },
  view3: {
    flex: 1,
  },
});

export default Home;
