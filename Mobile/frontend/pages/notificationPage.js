import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

const Notification = () => {
    return (
        <View style={styles.container}>
            <Text>This is notification page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Notification;
