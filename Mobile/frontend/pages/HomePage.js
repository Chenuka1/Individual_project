import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'; // Import useRoute hook
import { FontAwesome } from '@expo/vector-icons'; // Importing FontAwesome icons
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomePage = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Use useRoute hook to access route params
  const authToken = route.params?.authToken; // Access authToken from route params

  

  const goTomedicaldetails = () => {
    navigation.navigate('medical', { authToken: authToken });
  };

  const goTovaccine = () => {
    navigation.navigate('vaccine');
  };

  const handleLogout = async () => {
    try {
      // Remove authentication token from AsyncStorage
      await AsyncStorage.removeItem('authToken');
      // Navigate to the 'Login' screen
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.jpg')} style={styles.logo} />
      
      <Image source={require('../assets/slider-1.jpg')} style={styles.image} />
      <Text style={styles.text}>Welcome to the Babycare app!</Text>

      <View style={styles.container2}>
        <Image source={require('../assets/nurse2.jpg')} style={styles.image2} />
        <Image source={require('../assets/Doctor.jpg')} style={styles.image2} />
      </View>

      <View style={styles.buttoncontainer}>
        {/* <TouchableOpacity style={styles.button} onPress={goToLoginPage}>
          <FontAwesome name="user" size={20} color="white" />
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.button1} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={goTomedicaldetails}>
          <Text style={styles.buttonText}>Patient details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={goTovaccine}>
          <Text style={styles.buttonText}>Vaccine details</Text>
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
    backgroundColor: 'white',
  },
  logo: {
    marginTop: 45,
    height: 50,
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
  buttoncontainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  button: {
    marginLeft: 10,
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    elevation: 3, // Shadow for Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center', // Align items vertically
  },
  button1: {
    marginLeft: 10,
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    elevation: 3, // Shadow for Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center', // Align items vertically
  },
  buttonText: {
    color: 'white',
    marginLeft: 5,
  },
});

export default HomePage;
