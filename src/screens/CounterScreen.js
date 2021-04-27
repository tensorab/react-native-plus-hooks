import React, { useReducer } from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';

const COUNTER_INCREAMENT = 1

const reducer = (state, action) => {
    return {...state, counter: state.counter + action.payload}
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 })

    return (
        <View>
            <Button title="Increase" onPress={() => {
                dispatch({type: "Increase", payload: COUNTER_INCREAMENT})
            }}/>
            <Button title="Decrease" onPress={() => {
                dispatch({type: "Decrease", payload: -1 * COUNTER_INCREAMENT})
            }}/>
            <Text>Current Count:{state.counter}</Text>

        </View>
    );
}
const styles = StyleSheet.create({});

export default CounterScreen;
