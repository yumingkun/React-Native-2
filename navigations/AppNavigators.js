import React from 'react';
import {
    createStackNavigator,
    createTabNavigator,
} from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';


import Welcome from  '../js/pages/WelcomPage';


import  Page1 from '../js/pages/Page1';
import  Page2 from '../js/pages/Page2';
import  Page3 from '../js/pages/Page3';




//底部导航
 const AppTabNavigators =createTabNavigator({
    Page1: {
        screen:Page1,
        navigationOptions: {
            tabBarLabel: 'page1',//底部标题
            tabBarIcon: (({tintColor, focused}) => (//底部图标(具体用法参考官网)
               <Ionicons
                    name={focused?'ios-home':'ios-home-outline'}
                    size={26}
                    style={{color:tintColor}}
               />
            ))
        },

    },
    Page2:{
        screen:Page2,
        navigationOptions:{
            tabBarLabel: 'page2',
            tabBarIcon: (({tintColor, focused}) => (
                <Ionicons
                    name={focused?'ios-people':'ios-people-outline'}
                    size={26}
                    style={{color:tintColor}}
                />
            ))

        }
    },
    Page3:{
        screen:Page3,
        navigationOptions:{
            tabBarLabel: 'page3',
            tabBarIcon: (({tintColor, focused}) => (
                <Ionicons
                    name={focused?'ios-clock':'ios-clock-outline'}
                    size={26}
                    style={{color:tintColor}}
                />
            ))

        }
    }

},{
    tabBarPosition:'bottom',//位置
    tabBarOptions: {
        showIcon: true,//是否显示图标！！！！！！！
        style: {
            height: 45,//底部导航的宽度
            backgroundColor: '#533537',//底部导航的颜色
        },
        labelStyle: {
            fontSize: 12,//字体大小
            marginTop:-2,//字体距离图标大小
        },

    }

});



//顶部导航，主入口，要放在其他导航后面，（加载顺序）
export const AppStackNavigator=createStackNavigator({
    Welcome:{
      screen:Welcome,
      navigationOptions:{
          header:null,
      }
    },
    HomeTab:{//底部导航（也是主页）
        screen:AppTabNavigators,
        navigationOptions:{
            header:null,
        }
    } ,

} );


