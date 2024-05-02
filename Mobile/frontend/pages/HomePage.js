import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'; // Importing FontAwesome icons

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
      <View style={styles.buttoncontainer}>
      <TouchableOpacity style={styles.button} onPress={goToLoginPage}>
        <FontAwesome name="user" size={20} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToNotificationPage}>
        <FontAwesome name="bell" size={20} color="white" />
      </TouchableOpacity>


      </View>
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
  buttoncontainer:{
    flexDirection: 'row',
    marginTop: 30,



  },
  button: {
    marginLeft:10,
   
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center', // Align items vertically
  },
});

export default HomePage;
