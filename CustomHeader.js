import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const CustomHeader = ({ route }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <Image source={require('./assets/perfil.png')} style={styles.profileImage} />
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
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5, // Aumente o valor para tornar a sombra mais forte no Android
    position:'absolute',
    width:"100%",
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    justifyContent: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    marginRight: 15,
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
