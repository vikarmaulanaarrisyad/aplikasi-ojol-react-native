import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils';
import {Button} from '../../components';

const ActionButton = ({desc, title}) => {
  return (
    <View style={styles.component}>
      <Text style={styles.text.desc}>{desc}</Text>
      <Button title={title} />
    </View>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  wrapper: {
    component: {marginBottom: 43, maxWidth: 225},
  },
  text: {
    desc: {
      fontSize: 10,
      color: colors.text.default,
      textAlign: 'center',
      paddingHorizontal: '50%',
      marginBottom: 6,
    },
  },
});
