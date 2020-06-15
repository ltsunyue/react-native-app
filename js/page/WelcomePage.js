import React, {useEffect, useState} from 'react';
import {Image, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import NavigationUtil from "../navigator/NavigationUtil";

function WelcomePage (props){
    console.disableYellowBox = true; // 去除警告
    const [count, setCount] = useState(3);
    let times;
    useEffect(()=>{
        NavigationUtil.navigation = props.navigation;
        times = setInterval(()=>{
            if( count <= 0){
                NavigationUtil.resetToHomePage(props);
                return;
            }
            setCount(count - 1)
        }, 1000);
        SplashScreen.hide();
        return ()=>{
            times && clearTimeout(times);
        };
    });
    function Jump(){
        NavigationUtil.resetToHomePage(props);
    }
    return (
        <View style={styles.page}>
            <View
                style={styles.jump}
            >
                <TouchableOpacity
                    onPress={()=> Jump()}
                >
                    <Text
                        style={styles.text}
                    >跳过{count}</Text>
                </TouchableOpacity>

            </View>
            <Image
                style={styles.tinyLogo}
                source={require('../static/img/start-up.png')}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    tinyLogo: {
        flex: 1,
        width: 300,
        height: 300,
    },
    page: {
        position: 'relative',
        alignSelf: 'center',
    },
    jump:{
        position: 'absolute',
        top: 20,
        right: -10,
        width: 50,
        borderRadius: 20,
        zIndex: 999,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    text:{
        lineHeight: 25,
        color: '#fff',
        textAlign: 'center',
    }
});
export default WelcomePage;
