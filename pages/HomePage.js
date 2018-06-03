import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

type Props = {};

export default class App extends Component<Props> {
    static navigationOptions = {
        title: '主页',

    };
    render() {
        const {navigation} =this.props;
        return (
            <View style={styles.container}>
                <Button
                    title="go to TabNav"
                    onPress={()=>navigation.navigate('TabNav')}
                />

                <Text/>

                <Button
                    title="go to DrawerNav"
                    onPress={()=>navigation.navigate('DrawerNav')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e5fffd',
    }
});
