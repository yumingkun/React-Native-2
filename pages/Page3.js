
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';



type Props = {};
export default class Page2 extends Component<Props> {

    render() {
        const {navigation}=this.props;
        return (
            <View style={styles.container}>
                <Text>欢迎来到page3</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffaa',
    }
});
