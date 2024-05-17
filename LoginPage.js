import React, { useState } from 'react';
import { StatusBar, ImageBackground, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginPage({ navigation }) {
  const [cnpj, setCnpj] = useState('');

  const handleLogin = async () => {
    console.log('Dados de login:', cnpj);
    try {
      const response = await axios.post('http://192.168.0.12:3000/login', { cnpj });
      console.log('Resposta da requisição:', response);
      if (response && response.data) {
        const { nome } = response.data;
        if (nome) {
          console.log('Nome recebido:', nome);
          await AsyncStorage.setItem('userName', nome);
          console.log('Nome armazenado no AsyncStorage');
          navigation.navigate('Home', { nome }); // Passar o nome como parâmetro de navegação
        } else {
          console.error('Erro: Nome não recebido', response.data);
          Alert.alert('Erro', 'Nome não recebido');
        }
      } else {
        console.error('Erro: Resposta do servidor inválida', response);
        Alert.alert('Erro', 'Resposta do servidor inválida');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      if (error && error.response && error.response.data) {
        Alert.alert('Erro', error.response.data);
      } else {
        Alert.alert('Erro', 'Erro desconhecido');
      }
    }
  };

  return (
    <LinearGradient
      colors={['#08066E', '#2522B0']}
      style={styles.container}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}>
      <View style={styles.mainContainer}>      
        <ImageBackground source={require('./assets/gorila.png')} style={styles.image} resizeMode='cover'></ImageBackground>
        <ImageBackground source={require('./assets/hero.png')} style={styles.image2} resizeMode='contain'></ImageBackground>
        <Text style={styles.text_login}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu CNPJ"
          placeholderTextColor="black"
          onChangeText={text => setCnpj(text)}
          value={cnpj}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto"/>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    
    width: 410,
    height: '100%',
    opacity: 0.15,
    position: 'absolute',
  },
  image2: {
    width: 450,
    height:40,

  },
  text_auto_mei: {
    fontSize: 34,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 100,
  },
  text_login: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    padding: 10,
    marginTop: 20,
    marginRight: 170,
  },
  input: {
    width: 250,
    height: 40,
    backgroundColor: '#38ef7d',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 1,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#38ef7d',
    width: 150,
    height: 40,
    borderRadius: 25,
    marginTop: 50,
    marginBottom: 150,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
});
