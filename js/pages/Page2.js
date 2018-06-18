
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    AsyncStorage,
} from 'react-native';

import Toast,{DURATION} from 'react-native-easy-toast';//导入弹出框组件
const KEY='text';//指定key

type Props = {};
export default class AsyncStorageTest extends Component {
    constructor(props) {
        super(props);
    }

    //保存
    save() {
        AsyncStorage.setItem(KEY, this.text, (error)=> {  //设置键值对 key:value
            if (!error) {
                this.toast.show('保存成功', DURATION.LENGTH_LONG);//设置提示框，并设置持续时间
            } else {
                this.toast.show('保存失败', DURATION.LENGTH_LONG);
            }
        });
    }
    //取出
    get() {
        AsyncStorage.getItem(KEY, (error, result)=> {
            if (error) {
                this.toast.show('取出失败', DURATION.LENGTH_LONG);
            } else {
                if (result) {
                    this.toast.show('取出的结果为:' + result, DURATION.LENGTH_LONG);
                } else {
                    this.toast.show('没有找到对应的内容', DURATION.LENGTH_LONG);
                }
            }
        });
    }
    //移除
    remove(){
        AsyncStorage.removeItem(KEY,(error)=>{
            if (!error) {
                this.toast.show('移除成功', DURATION.LENGTH_LONG);
            } else {
                this.toast.show('移除失败', DURATION.LENGTH_LONG);
            }
        });
    }
    render() {
        return (
            <View>
                <TextInput style={{height:80}}
                           onChangeText={(text)=> {
                               this.text = text;
                           }}
                />
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.text} onPress={()=>this.save()}>
                        保存
                    </Text>
                    <Text style={styles.text} onPress={()=>this.remove()}>
                        移除
                    </Text>
                    <Text style={styles.text} onPress={()=>this.get()}>
                        取出
                    </Text>
                </View>
                <Toast ref={toast=> {//提示框展示位置
                    this.toast = toast
                }}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        margin:10
    }
});