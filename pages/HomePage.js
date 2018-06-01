import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

type Props = {};

export default class App extends Component<Props> {
    render() {
        const {navigation} =this.props;
        return (
            <View style={styles.container}>
                <Text>HomePage</Text>
                <Button
                    title="go to page1"
                    onPress={()=>navigation.navigate('Page1')}
                />
                <Button
                    title="go to page2"
                    onPress={()=>navigation.navigate('Page2')}
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
        backgroundColor: '#ffffaa',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
