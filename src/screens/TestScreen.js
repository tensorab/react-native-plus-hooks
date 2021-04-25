import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


const TestScreen = () => {
    const name = 'Mamun';
    return (
        <View>
            <Text style={styles.Header1}>Getting started with react native!</Text>
            <Text style={styles.Header3}>My name is {name}.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    Header1: {
        fontSize: 45
    },
    Header3: {
        fontSize: 20
    }
});

export default TestScreen;