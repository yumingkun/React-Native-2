
import React, { Component } from 'react';
import {

    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

type Props = {};
export default class Page5 extends Component<Props> {

    render() {
        const {navigation}=this.props;
        return (
            <View style={styles.container}>
                <Text>欢迎来到page5</Text>
                <Button
                    title="Open Drawer"
                    onPress={()=>navigation.openDrawer()}
                />
                <Button
                    title="Toggle Drawer"
                    onPress={()=>navigation.toggleDrawer()}
                />
                <Button
                    title="Go to Page4"
                    onPress={()=>navigation.navigate('Page4')}
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
        backgroundColor: '#c5ffe1',
    }
});
