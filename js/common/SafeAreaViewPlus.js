import React, {Component} from 'react';
import {DeviceInfo, StyleSheet, View} from 'react-native';

export default class SafeAreaViewPlus extends Component {
    render() {
        return(
            <View
                style={DeviceInfo.isIPhoneX_deprecated ? {height: 44, backgroundColor: this.props.topColor} : {height: 34, backgroundColor: this.props.topColor}}
            />
        )
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topArea: {
        height: 44,
        backgroundColor: 'red',
    },
    bottomArea: {
        height: 34,
    },
});
