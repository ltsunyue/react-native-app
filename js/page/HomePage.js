import React, {Component} from 'react';
import {Text, View, StatusBar, StyleSheet} from 'react-native';


class HomePage extends Component {
    render() {
        return (
            <View>
                <StatusBar
                    translucent={true}
                    backgroundColor="transparent"
                    barStyle="light-content"
                />
                <View style={styles.homeText}></View>
            </View>
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
