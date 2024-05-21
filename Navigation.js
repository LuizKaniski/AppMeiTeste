import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from './HomePage';
import CustomHeader from './CustomHeader';
import CustomDrawerContent from './CustomDrawerContent';
import { View, StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomePage} options={{ header: (props) => <CustomHeader {...props} /> }} />
      {/* Adicione outras telas do Drawer aqui */}
    </Drawer.Navigator>
  );
}

export default function Navigation() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
