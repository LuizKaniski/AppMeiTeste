import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import CustomHeader from './CustomHeader'; // Importe o CustomHeader
import { View, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen 
            name="Login" 
            component={LoginPage} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Home" 
            component={HomePage} 
            options={({ route }) => ({
              header: () => <CustomHeader route={route} />, // Use o componente customizado como header
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

