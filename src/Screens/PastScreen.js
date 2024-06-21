import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, fontSize, fontFamily} from '../Constants/index';

const PastScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bookingCard}>
        <View style={styles.circle} />
        <View style={styles.bookingDetails}>
          <Text style={styles.bookingText}>From: LHR.... To: Karachi</Text>
          <Text style={styles.detailsText}>
            Passengers: 20 Luggages: 15 Hand Luggages: 10
          </Text>
          <Text style={styles.detailsText}>
            Date/Time: 20 Jun 2024 12:00 AM
          </Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>50$</Text>
          <TouchableOpacity style={styles.viewButton}>
            <Text style={styles.viewButtonText}>View</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dullBlack,
  },
  bookingCard: {
    flexDirection: 'row',
    backgroundColor: colors.black,
    padding: 10,
    alignItems: 'center',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.gray,
    marginRight: 10,
  },
  bookingDetails: {
    flex: 1,
  },
  bookingText: {
    color: colors.White,
    fontSize: fontSize.small,
    fontFamily: fontFamily.semiBold,
  },
  detailsText: {
    color: colors.gray,
    fontSize: fontSize.extraSmall,
    fontFamily: fontFamily.regular,
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  priceText: {
    color: colors.White,
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
  },
  viewButton: {
    marginTop: 5,
    backgroundColor: colors.White,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  viewButtonText: {
    color: colors.black,
    fontSize: fontSize.extraSmall,
    fontFamily: fontFamily.bold,
  },
});

export default PastScreen;
