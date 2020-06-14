import React, {Component} from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import store from "./store";

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Text>11111</Text>
            </Provider>
        );
    }
}

