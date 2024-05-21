import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomHeader = ({ route }) => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Image source={require('./assets/barra-de-menu.png')} style={styles.menuIcon} />
        </TouchableOpacity>
        <View>
          <Text style={styles.welcomeText}>Bem-Vindo</Text>
          <Text style={styles.clientName}>{route.params?.nome || 'Nome do cliente'}</Text>
        </View>
        <Image source={require('./assets/hero.png')} style={styles.heroImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#1F1E1E',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
    position: 'absolute',
    width: '100%',
    paddingTop: 2, // Ajuste para status bar
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    justifyContent: 'space-between',
    width: '90%',
  },
  menuIcon: {
    marginRight: 15,
    width:40,
    height:40,
  },
  welcomeText: {
    fontSize: 18,
    color: 'white',
  },
  clientName: {
    fontSize: 14,
    color: 'white',
    marginRight: 20,
  },
  heroImage: {
    height: 40,
    width: 150,
    marginRight: 15,
    marginLeft: 30,
    resizeMode: 'contain',
  },
});

export default CustomHeader;
