import React from 'react';
import {Text, StyleSheet, View, Image, Button, ScrollView} from 'react-native';
import {colors} from '../Constants';

const Cars = () => {
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
          <Image source={item.img} style={styles.carImage} />
          <Text style={styles.carName}>{item.carName}</Text>
          <Text style={styles.carDetails}>{item.passangers} Passengers</Text>
          <Text style={styles.carDetails}>{item.suitcase} Suitcases</Text>
          <Text style={styles.carDetails}>{item.Luggages} Luggages</Text>
          <Text style={styles.carPrice}>One Way ${item.price}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Book Now" color="#FFB300" onPress={() => {}} />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: colors.dullBlack,
  },
  carItem: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    // margin: 10,
    width: '45%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFB300',
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginVertical: 5,
  },
  carDetails: {
    color: '#FFD700',
    marginVertical: 2,
  },
  carPrice: {
    color: '#FFFFFF',
    marginVertical: 5,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    borderRadius: 5,
    overflow: 'hidden',
  },
  carImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});

export default Cars;
