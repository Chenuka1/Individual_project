import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Patient = () => {
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
      <Text style={styles.header}>Medical Details</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Full Name:</Text>
        <Text style={styles.value}>{patient.fullName}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Registered Hospital:</Text>
        <Text style={styles.value}>{patient.registeredHospital}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Past Diseases:</Text>
        <Text style={styles.value}>{patient.pastDiseases}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Allergies:</Text>
        <Text style={styles.value}>{patient.allergies}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Medications:</Text>
        <Text style={styles.value}>{patient.medications}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Surgery:</Text>
        <Text style={styles.value}>{patient.surgery}</Text>
      </View>
      <Text style={styles.header}>Vaccination Schedule</Text>
      {patient.upcomingVaccine.map((vaccine, index) => (
        <View key={index} style={styles.vaccineItem}>
          <Text style={styles.vaccineName}>{vaccine.vaccine}</Text>
          <Text style={styles.vaccineDescription}>{vaccine.description}</Text>
          <Text style={styles.vaccineDate}>{new Date(vaccine.upcomingVaccinationDate).toLocaleDateString()}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    flex: 1,
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    flex: 2,
    color: '#555',
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
});

export default Patient;
