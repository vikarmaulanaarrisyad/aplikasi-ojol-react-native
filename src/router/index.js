import React from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash, Login, Register, WelcomeAuth} from '../pages';

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="WelcomeAuth" component={WelcomeAuth} />
    </Stack.Navigator>
  );
};

export default Route;
