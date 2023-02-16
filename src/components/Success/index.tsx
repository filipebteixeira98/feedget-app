import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { Copyright } from '../Copyright';

import { styles } from './styles';

import successImg from '../../assets/success.png';

export function Success() {
  return (
    <View style={styles.container}>
      <Image source={successImg} style={styles.image} />
      <Text style={styles.title}>We appreciate the feedback</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}>I want to send another</Text>
      </TouchableOpacity>
      <Copyright />
    </View>
  );
}
