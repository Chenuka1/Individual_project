// LoginPage.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      // Prepare the login credentials object
      const credentials = {
        username: username,
        password: password
      };

      // Make a POST request to the login endpoint on the server
      const response = await fetch('http://10.0.2.2:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials) // Send the credentials in the request body
      });

      // Check if the response is successful
      if (!response.ok) {
        // If response is not ok, throw an error with the error message from the server
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      // Extract the token from the response
      const { token } = await response.json();

      // Store the token securely
      await AsyncStorage.setItem('token', token);

      // Navigate to the Home screen with authToken as a route parameter
      navigation.navigate('Home', { authToken: token });
    } catch (error) {
      // Handle errors that might occur during fetch operation
      setError(error.message);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder=" enter Username"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholderTextColor="#aaa"
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f9f9f9',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 18,
    color: '#333',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginPage;
