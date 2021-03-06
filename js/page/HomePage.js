import React, {useState} from 'react';
import {Text, View, StatusBar, StyleSheet, Image, FlatList, Dimensions, TextInput } from 'react-native';
import SafeAreaViewPlus from '../common/SafeAreaViewPlus';
import Swiper from 'react-native-swiper';
import Ionicons  from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get("window").width;
const DATA = [
    {
        name: 'boat-outline',
        text: '旅游',
    },{
        name: 'bed-outline',
        text: '住宿',
    },{
        name: 'desktop-outline',
        text: '家电',
    },{
        name: 'fitness-outline',
        text: '娱乐',
    },
];

const MENU = [
    {
        name: '\uebd2',
        text: '爬山',
    },{
        name: '\uebd3',
        text: '饭饭',
    },{
        name: '\uebd5',
        text: '椰子',
    },{
        name: '\uebd7',
        text: '游戏机',
    },{
        name: '\uebd8',
        text: '扫卫生',
    },{
        name: '\uebdc',
        text: '心动',
    },{
        name: '\uebe0',
        text: '大吉他',
    },{
        name: '\uebde',
        text: '气球',
    },{
        name: '\ue61d',
        text: '看电影了',
    },{
        name: '\ue629',
        text: '喽他',
    },
];

function HomePage(){
    const [value, onChangeText] = useState(`请输入要搜索的内容`);

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
            <View style={styles.header}>
                <Ionicons style={styles.headerInputs} name='git-pull-request-outline'  size={26}/>
                <TextInput
                    clearTextOnFocus={true}
                    style={styles.input}
                    clearButtonMode="never"
                    onChangeText={text => onChangeText(text)}
                    placeholder={value}
                />
                <Ionicons style={styles.headerInput} name='add-circle-outline'  size={26}/>
                <Ionicons style={styles.headerInput} name='settings-outline'  size={26}/>
            </View>
            <View style={styles.ionicond}>
                {
                    DATA.length > 0 && DATA.map((item, index)=> <View key={ index } style={styles.ionicondView}>
                        <Ionicons name={ item.name } style={{color: '#fff'}}  size={26}/>
                        <Text style={{color: '#fff'}} >{ item.text }</Text>
                    </View>)
                }
            </View>
            <View style={styles.grids}>
                {
                    MENU.length > 0 && MENU.map((item, index)=> {
                        return(
                            <View style={styles.gridsView} key={index}>
                                <Text style={styles.instructions}>{item.name}</Text>
                                <Text style={styles.gridsViewText}>{item.text}</Text>
                            </View>
                        )
                    })
                }
            </View>
            <View
                style={styles.wrapper}
            >
                <Swiper
                    showsButtons={false}
                    autoplay={true}
                    paginationStyle={styles.paginationStyle}
                    dotStyle={styles.dotStyle}
                    activeDotStyle={styles.activeDotStyle}
                >
                    <View style={styles.texts}>
                        <View style={styles.text}>
                            <Image source={require('../static/1.jpg')} style={styles.bannerImg}/>
                        </View>
                    </View>
                    <View style={styles.texts}>
                        <View style={styles.text}>
                            <Image source={require('../static/2.jpg')} style={styles.bannerImg}/>
                        </View>
                    </View>
                    <View style={styles.texts}>
                        <View style={styles.text}>
                            <Image source={require('../static/3.jpg')} style={styles.bannerImg}/>
                        </View>
                    </View>
                    <View style={styles.texts}>
                        <View style={styles.text}>
                            <Image source={require('../static/4.jpg')} style={styles.bannerImg}/>
                        </View>
                    </View>
                </Swiper>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    grids: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center',
        alignItems: 'center'
    },
    gridsView: {
        marginTop: 5,
        width: width /5 ,
        alignSelf: 'center',
        alignItems: 'center'
    },
    gridsViewText: {
        fontSize: 10,
    },
    instructions: {
        fontSize: 25,
        marginBottom: 3,
        fontFamily:'iconfont',
    },
    input: {
        paddingLeft: 13,
        flex: 2,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 8,
        color: '#ccc',
        marginRight: 10,
        marginLeft: 10
    },
    headerInput: {
        width: 40,
        color: '#fff',
        alignSelf: 'center',
        alignItems: 'center'
    },
    headerInputs: {
        marginLeft: 10,
        width: 30,
        color: '#fff',
        alignSelf: 'center',
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        height: 40,
        backgroundColor: '#21A1F1'
    },
    ionicond: {
        marginBottom: 10,
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#21A1F1'
    },
    ionicondView: {
        flex: 1,
        color: '#fff',
        alignSelf: 'center',
        alignItems: 'center'
    },
    title: {
        width: 200,
        height: 50,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: 'red'
    },
    titles:{
        height: 10,
    },
    homeText: {
        height: 10,
        backgroundColor: 'red'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        borderRadius: 5,
        color: '#fff',
        overflow: 'hidden',
        fontSize: 30,
        fontWeight: 'bold'
    },
    texts: {
      paddingRight: 10,
      paddingLeft: 10
    },
    bannerImg: {
        width: '100%',
        height: '100%'
    },
    wrapper: {
        marginTop: 10,
        marginBottom: 10,
        height: 200
    },
    paginationStyle: {
        bottom: 6,
    },
    dotStyle: {
        width: 20,
        height: 3,
        backgroundColor:'#fff',
        opacity: 0.4,
        borderRadius: 0,
    },
    activeDotStyle: {
        width: 20,
        height: 3,
        backgroundColor:'#fff',
        borderRadius: 0,
    },
});
export default HomePage
