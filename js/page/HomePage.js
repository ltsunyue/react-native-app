import React, {Component} from 'react';
import {Text, View, StatusBar, StyleSheet, DeviceInfo} from 'react-native';
import SafeAreaViewPlus from '../common/SafeAreaViewPlus';


class HomePage extends Component {
    render() {
        return (
            <>
                <StatusBar
                    translucent={true}
                    backgroundColor="transparent"
                    barStyle="light-content"
                />
                <SafeAreaViewPlus
                    topColor={'#21A1F1'}
                />
                <Text>111111</Text>
            </>
        );
    }
}
const styles = StyleSheet.create({
   homeText: {
       height: 50,
       backgroundColor: 'red'
   }
});
export default HomePage;
