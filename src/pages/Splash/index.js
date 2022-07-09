import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomeAuth'); // Pindah ke halaman lain
    }, 2000);
  });

  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
