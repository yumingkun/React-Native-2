import React, { Component } from 'react'
import {
    View,
    Image,
    Dimensions,
    StyleSheet
} from 'react-native'
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');//获取手机的宽和高

const styles =StyleSheet.create( {
    wrapper: {

    },
    container: {
        flex: 1,//必写
    },
    image: {
        width,//等于width:width
        height,
    }
});

export default class WelcomPage extends Component {
    //加载计时器
    componentDidMount(){
        this.timer=setTimeout(()=>{
            this.props.navigation.navigate('HomeTab');//7秒后进入底部导航主页
        },1000)
    }
    //卸载计时器
    componentWillUnmount(){
        this.timer&&clearTimeout(this.timer);//同时为真的才执行卸载
    }
    render () {
        return (
            <View style={styles.container}>
                <Swiper style={styles.wrapper}
                        showsButtons={true}       //为false时不显示控制按钮
                        paginationStyle={{      //小圆点位置
                            bottom: 70
                        }}
                        loop={false}        //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
                        autoplay={true}          //自动轮播
                        autoplayTimeout={2}      //每隔2秒切换
                >

                    <Image style={styles.image} source={require('../../images/1.jpg')}/>
                    <Image style={styles.image} source={require('../../images/2.jpg')}/>
                    <Image style={styles.image} source={require('../../images/4.jpg')}/>

                </Swiper>
            </View>
        )
    }
}