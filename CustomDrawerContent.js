import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={styles.all}>
      <View style={styles.header}>
        <Text style={styles.title}>Menu</Text>
      </View>
      <DrawerItemList {...props} />
      <TouchableOpacity style={styles.logoutButton} onPress={() => alert('Sair')}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  all:{
  backgroundColor: '#1F1E1E',
  textAlign:'center',
  alignContent:'center',
    
  },
  header: {
    padding: 20,
    backgroundColor: '#1F1E1E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width:200,
    marginLeft:37,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
  },
});
