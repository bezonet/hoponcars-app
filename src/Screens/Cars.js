import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
// import {useNavigation} from '@react-navigation/native';

const Cars = () => {
  // const navigation = useNavigation();

  const goToCash = () => {
    Alert.alert('Payment screen');
  };

  const CarsData = [
    {
      carName: 'Saloon Car',
      passangers: 4,
      suitcase: 2,
      Luggages: 1,
      price: 25,
      img: require('../Images/car1.png'),
    },
    {
      carName: 'Range Rover Evoque',
      passangers: 6,
      suitcase: 3,
      Luggages: 2,
      price: 35,
      img: require('../Images/car2.png'),
    },
    {
      carName: 'Saloon Car',
      passangers: 4,
      suitcase: 2,
      Luggages: 1,
      price: 25,
      img: require('../Images/car1.png'),
    },
    {
      carName: 'Saloon Car',
      passangers: 4,
      suitcase: 2,
      Luggages: 1,
      price: 25,
      img: require('../Images/car1.png'),
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {CarsData.map((item, index) => (
        <View key={index} style={styles.carItem}>
          <Text style={styles.carName}>{item.carName}</Text>
          <Image source={item.img} style={styles.carImage} />
          <Text style={styles.carDetails}>{item.passangers} Passengers</Text>
          <Text style={styles.carDetails}>{item.suitcase} Suitcases</Text>
          <Text style={styles.carDetails}>{item.Luggages} Luggages</Text>
          <Text style={styles.carPrice}>One Way ${item.price}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.bookBtn} onPress={goToCash}>
              <Text style={{color: '#FFB61D', fontWeight: 'bold'}}>
                Book now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: '#212121',
    padding: 10,
  },
  carItem: {
    backgroundColor: '#333',
    borderRadius: 10,
    width: '45%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#FFB300',
    padding: 10,
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  carDetails: {
    color: '#FFD700',
    marginBottom: 5,
  },
  carPrice: {
    color: '#FFFFFF',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 10,
    width: '60%',
    borderRadius: 5,
    overflow: 'hidden',
  },
  carImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  bookBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FFB61D',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
});

export default Cars;
