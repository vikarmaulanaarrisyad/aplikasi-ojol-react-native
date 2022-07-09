import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import Route from './router';

const App = () => {
  <NavigationContainer>
    <Route />
  </NavigationContainer>;
};

const styles = StyleSheet.create({
  ScrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default App;
