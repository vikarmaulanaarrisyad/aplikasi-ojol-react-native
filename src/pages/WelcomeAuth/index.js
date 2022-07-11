import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {welcomeAuth} from '../../assets';
import {colors} from '../../utils';
import ActionButton from './ActionButton';

const WelcomeAuth = () => {
  return (
    <View style={styles.wrapper.page}>
      {/* <View style={styles.wrapper.ilustration} /> */}
      <Image source={welcomeAuth} style={styles.wrapper.ilustration} />
      <Text style={styles.text.welcome}>Selamat Datang di O-JOL</Text>
      <ActionButton
        desc="Silahkan masuk, jika sudah memiliki akun"
        title="Masuk"
      />
      <ActionButton
        desc="atau daftar, jika belum memiliki akun"
        title="Daftar"
      />
    </View>
  );
};

export default WelcomeAuth;

const styles = StyleSheet.create({
  wrapper: {
    page: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      backgroundColor: 'white',
    },
    ilustration: {
      width: 219,
      height: 117,
      // backgroundColor: colors.default,
      marginBottom: 10,
    },
  },
  text: {
    welcome: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.default,
      marginBottom: 10,
    },
  },
});
