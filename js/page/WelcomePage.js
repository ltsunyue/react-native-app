import React, {Component} from 'react';
import {Image, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import NavigationUtil from "../navigator/NavigationUtil";

class WelcomePage extends Component {
    constructor(props){
        super(props);
        console.disableYellowBox = true; // 去除警告
        this.state = {
            time: 3
        };
    }

    componentDidMount() {
        NavigationUtil.navigation = this.props.navigation;
        this.times = setInterval(()=>{
            if(this.state.time <= 0){
                NavigationUtil.resetToHomePage(this.props);
            }
           this.setState({
               time: this.state.time -1
           })
        }, 1000);
        SplashScreen.hide();
    }
    componentWillMount(){
        this.times && clearTimeout(this.times);
    }
    Jump = () => {
        console.log(111);
        NavigationUtil.resetToHomePage(this.props);
    };
    render() {
        const {time} = this.state;
        return (
            <View style={styles.page}>
                <View
                    style={styles.jump}
                >
                    <TouchableOpacity
                        onPress={()=> this.Jump()}
                    >
                        <Text
                            style={styles.text}
                        >跳过{time}</Text>
                    </TouchableOpacity>

                </View>
                <Image
                    style={styles.tinyLogo}
                    source={require('../static/img/start-up.png')}
                />
            </View>
        );
    }
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
