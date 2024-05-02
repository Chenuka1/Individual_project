import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const navigation = useNavigation();

  const goToLoginPage = () => {
    navigation.navigate('Login');
  };

  const goToNotificationPage = () => {
    navigation.navigate('Notification');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.jpg')}
        style={styles.logo}
      />
      <Image
        source={require('../assets/slider-1.jpg')}
        style={styles.image}
      />
      <Text style={styles.text}>Welcome to the Babycare app!</Text>

      <View style={styles.container2}>
        <Image
          source={require('../assets/nurse2.jpg')}
          style={styles.image2}
        />
        <Image
          source={require('../assets/Doctor.jpg')}
          style={styles.image2}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={goToLoginPage}>
        <Text style={styles.buttonText}>Login Page</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToNotificationPage}>
        <Text style={styles.buttonText}>Notification Page</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', 
    backgroundColor:'white'
  },
  logo: {
    marginTop: 40,
    height: 65,
    marginBottom: 20,
  },
  image: {
    width: 500,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  container2: {
    marginTop: 20,
    flexDirection: 'row', // Display items horizontally
  },
  image2: {
    width: 200,
    height: 200,
    marginRight: 10, // Add some margin between images
  },
  button: {
    marginTop: 10,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default HomePage;
