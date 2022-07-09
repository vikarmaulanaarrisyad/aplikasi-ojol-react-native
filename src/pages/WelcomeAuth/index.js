import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ActionButton = ({desc, title}) => {
  return (
    <View style={{marginBottom: 43, maxWidth: 225}}>
      <Text
        style={{
          fontSize: 10,
          color: '#7e7e7e',
          textAlign: 'center',
          paddingHorizontal: '50%',
          marginBottom: 6,
        }}>
        {desc}
      </Text>

      <TouchableOpacity
        style={{
          bakcgroundColor: '#A55E5A',
          borderRadius: 25,
          paddingVertical: 13,
        }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: 'white',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const WelcomeAuth = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          width: 219,
          height: 117,
          backgroundColor: '#A55E5A',
          marginBottom: 10,
        }}
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#A55E5A',
          marginBottom: 10,
        }}>
        Selamat Datang di O-JOL
      </Text>
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

const styles = StyleSheet.create({});
