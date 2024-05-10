import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Vaccine = () => {
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const fetchPatientDetails = async () => {
      try {
        // Get JWT token from AsyncStorage
        const token = await AsyncStorage.getItem('token');

        const response = await fetch('http://10.0.2.2:5000/api/medical-details', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch patient details');
        }
        const data = await response.json();
        const { patient } = data;
        setPatient(patient);
      } catch (error) {
        console.error('Error fetching patient details:', error);
      }
    };

    fetchPatientDetails();
  }, []);

  if (!patient) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Vaccination Schedule allocated for baby</Text>
      {patient.upcomingVaccine.map((vaccine, index) => (
        <View key={index} style={styles.vaccineItem}>
          <Text style={styles.vaccineName}>{vaccine.vaccine}</Text>
          <Text style={styles.vaccineDescription}>{vaccine.description}</Text>
          <Text style={styles.vaccineDate}>Upcoming vaccine date: {new Date(vaccine.upcomingVaccinationDate).toLocaleDateString()}</Text>
          <Text style={styles.status}>{vaccine.status}</Text>
        </View>
      ))}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 20,
  },
  vaccineItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  vaccineName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  vaccineDescription: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  vaccineDate: {
    fontSize: 14,
    color: '#777',
    fontStyle: 'italic',
  },
  status: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
  },
  personalDetails: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default Vaccine;
