import React, {Component} from 'react';
import {Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';


class WelcomePage extends Component {
    componentDidMount() {
        SplashScreen.hide();
    }
    render() {
        return (
            <View>
                <Text>WelcomePage</Text>
            </View>
        );
    }
}

export default WelcomePage;
