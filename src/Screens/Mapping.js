import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Text, SafeAreaView, Dimensions, PermissionsAndroid, Platform} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from 'react-native-geolocation-service';
import { GOOGLE_PLACES_API_KEY } from '../components/constant';
const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.04;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;



const Mapping = () => {
  const mapRef = useRef();
  const [coord, setCoord] = useState();
  const [destination, setDestination] = useState();

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getLiveLocation();
      } else {
        console.log('Location permission denied');
      }
    } else {
      getLiveLocation();
    }
  };

  const getLiveLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoord({
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        });
        moveToLocation(latitude, longitude);
      },
      (error) => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const moveToLocation = (latitude, longitude) => {
    mapRef.current.animateToRegion(
      {
        latitude,
        longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      2000
    );
  };

  const onPressAddress = (details) => {
    setDestination({
      latitude: details?.geometry?.location.lat,
      longitude: details?.geometry?.location.lng,
    });
    moveToLocation(
      details?.geometry?.location.lat,
      details?.geometry?.location.lng
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <GooglePlacesAutocomplete
          placeholder="Search Destination"
          fetchDetails={true}
          onPress={(data, details = null) => {
            onPressAddress(details);
          }}
          query={{
            key: GOOGLE_PLACES_API_KEY,
            language: 'en',
          }}
          styles={{
            container: { flex: 0 },
            listView: { backgroundColor: 'white' },
          }}
        />
      </View>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={coord}>
        {coord && (
          <Marker coordinate={coord} />
        )}
        {destination && (
          <Marker coordinate={destination} />
        )}
        {coord && destination && (
          <MapViewDirections
            origin={coord}
            destination={destination}
            apikey={GOOGLE_PLACES_API_KEY}
            strokeColor="hotpink"
            strokeWidth={4}
          />
        )}
      </MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  searchContainer: {
    zIndex: 1,
    flex: 0.5,
    marginHorizontal: 10,
    marginVertical: 5,
  },
});

export default Mapping;
