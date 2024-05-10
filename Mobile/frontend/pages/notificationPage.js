// import React, { useState, useEffect } from "react";
// import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Notification = ({ navigation }) => {
//     const [notifications, setNotifications] = useState([]);

//     useEffect(() => {
//         // Fetch notifications from backend when the component mounts
//         fetchNotifications();
//     }, []);

//     const fetchNotifications = async () => {
//         try {
//             // Get JWT token from AsyncStorage
//             const token = await AsyncStorage.getItem('token');

//             // Fetch notifications from backend with JWT token in headers
//             const response = await fetch('http://10.0.2.2:5000/api/notifications', {
//                 headers: {
//                     'Authorization': `Bearer ${token}`
//                 }
//             });
//             const data = await response.json();

//             // Set fetched notifications in state
//             setNotifications(data);
//         } catch (error) {
//             console.error('Error fetching notifications:', error);
//         }
//     };

//     const handleLogout = async () => {
//         try {
//             // Clear JWT token from AsyncStorage
//             await AsyncStorage.removeItem('token');

//             // Navigate to the login screen
//             navigation.navigate('Login');
//         } catch (error) {
//             console.error('Error logging out:', error);
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.heading}>Vaccine Notifications</Text>

//             <ScrollView style={styles.notificationContainer}>
//                 {notifications.map((notification, index) => (
//                     <View style={styles.notificationItem} key={index}>
//                         <Text style={styles.notificationTitle}>{notification.title}</Text>
//                         <Text style={styles.notificationBody}>{notification.body}</Text>
//                     </View>
//                 ))}
//             </ScrollView>

//             <Button title="Logout" onPress={handleLogout} />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#f0f0f0',
//         padding: 20,
//     },
//     heading: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },
//     notificationContainer: {
//         marginBottom: 20,
//     },
//     notificationItem: {
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         padding: 15,
//         marginBottom: 15,
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//     },
//     notificationTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 5,
//     },
//     notificationBody: {
//         fontSize: 16,
//     },
// });

// export default Notification;
