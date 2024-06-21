import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {colors, fontSize} from '../Constants';

const Messages = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.dullBlack}}>
      <View
        style={{
          flex: 2,
          alignItems: 'center',
          flexDirection: 'column-reverse',
        }}>
        <Image
          style={{resizeMode: 'contain', height: 250}}
          source={require('../Images/messages.png')}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: colors.White,
            fontSize: fontSize.large,
            fontWeight: 'bold',
            marginVertical: 15,
          }}>
          You are all up to date!
        </Text>
        <Text
          style={{
            color: colors.White,
            fontSize: fontSize.statusSize,
            textAlign: 'center',
          }}>
          No new messages available at the{'\n'} moment, come back soon to
          discover{'\n'}
          new offers
        </Text>
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({});
