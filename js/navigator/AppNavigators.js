import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack";
import WelcomePage from '../page/WelcomePage';
import HomePage from '../page/HomePage';


const InitNavigator = createStackNavigator(
    {
        WelcomePage:{
            screen: WelcomePage,
            navigationOptions:{
                headerShown:false, //隐藏头部
            },
        },
    }
);

const MainNavigator = createStackNavigator(
    {
        HomePage:{
            screen: HomePage,
            navigationOptions:{
                headerShown:false, //隐藏头部
            },
        },
    }
);

export default createAppContainer(createSwitchNavigator(
    {
        Init: InitNavigator,
        Main: MainNavigator,
    },{

    }
))
