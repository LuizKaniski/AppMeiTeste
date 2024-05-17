import React, { useEffect, useState } from 'react';
import { StatusBar, ImageBackground, Text, View, ScrollView, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomePage({ route }) {
  const [nome, setNome] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      const userName = await AsyncStorage.getItem('userName');
      console.log('Nome recuperado do AsyncStorage:', userName);
      if (userName) {
        setNome(userName);
      }
    };
    getUserData();
  }, []);

  useEffect(() => {
    if (route.params && route.params.nome) {
      setNome(route.params.nome);
    }
  }, [route.params]);

  const meses = [
    { nome: 'DAS Janeiro', status: 'check' },
    { nome: 'DAS Fevereiro', status: 'check' },
    { nome: 'DAS Março', status: 'check' },
    { nome: 'DAS Abril', status: 'close' },
    { nome: 'DAS Maio', status: 'close' },
    { nome: 'DAS Junho', status: 'espera' },
    { nome: 'DAS Julho', status: 'espera' },
    { nome: 'DAS Agosto', status: 'espera' },
    { nome: 'DAS Setembro', status: 'espera' },
    { nome: 'DAS Outubro', status: 'espera' },
    { nome: 'DAS Novembro', status: 'espera' },
    { nome: 'DAS Dezembro', status: 'espera' },
  ];

  const getStatusImage = (status) => {
    switch (status) {
      case 'check':
        return require('./assets/verificar.png');
      case 'close':
        return require('./assets/botao-x.png');
      case 'espera':
        return require('./assets/tempo.png');
      default:
        return null;
    }
  };

  return (
    <LinearGradient
      colors={['#08066E', '#2522B0']}
      style={styles.container}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}>
      <View style={styles.mainContainer}>
        <ImageBackground source={require('./assets/gorilahome.png')} style={styles.image} resizeMode='cover'></ImageBackground>
        <View style={styles.viewcentral}>
          <LinearGradient
            colors={['#474B9A', '#DAE1EE']}
            style={styles.gradient}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
              <View style={styles.viewtitulo}>
                <Text style={styles.text_CNPJ}>Meu CNPJ</Text>
              </View>
              {meses.map((mes, index) => (
                <LinearGradient
                  key={index}
                  colors={['#000', '#636363']}
                  style={styles.viewmeses}
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}>
                  <Text style={styles.text_mes}>{mes.nome}</Text>
                  <Image source={getStatusImage(mes.status)} style={styles.statusImage} />
                </LinearGradient>
              ))}
            </ScrollView>
          </LinearGradient>
        </View>
      </View>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  viewtitulo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 40,
    borderRadius: 25,
    borderBlockColor: 'black',
    borderWidth: 2,
    marginTop: 25,
    marginBottom: 25,
  },
  viewmeses: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 250,
    height: 50,
    borderRadius: 25,
    margin: 15,
    paddingHorizontal: 20,
    elevation: 5,
    shadowColor: '#000',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
  },
  viewcentral: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 650,
    borderRadius: 25,
    overflow: 'hidden',
    opacity: 0.8,
    shadowColor: '#000',
    elevation: 5,
    borderBlockColor: 'black',
    borderWidth: 2,
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  image: {
    width: 410,
    height: '100%',
    opacity: 0.15,
    position: 'absolute',
  },
  text_CNPJ: {
    fontSize: 22,
    color: 'black',
    textAlign: 'center',
  },
  text_mes: {
    fontSize: 18,
    color: 'white',
  },
  statusImage: {
    width: 30,
    height: 30,
  },
});
