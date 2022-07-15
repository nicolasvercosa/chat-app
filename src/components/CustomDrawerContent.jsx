import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { StyleSheet, View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import UserAvatar from './UserAvatar';

export default function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView contentContainerStyle={styles.customdrawer} {...props}>
            <View style={styles.profileview}>
                <UserAvatar size={100} />
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>ncikas_333</Text>
            </View>
            <View>
                <DrawerItemList {...props} />
            </View>
        </DrawerContentScrollView>)
}

const styles = StyleSheet.create({
    customdrawer: {
        paddingTop: 0,
        flex: 1,
        justifyContent: 'flex-start'
    },
    profileview: {

        justifyContent: 'center',
        backgroundColor: '#3498db',
        width: '100%',
        height: 210,
        paddingLeft: 20,
    },
    avatar: {
        marginTop: 40,
        marginBottom: 20
    }
})