import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Avatar, Divider } from 'react-native-paper';

export default function ContactsItem(props) {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Avatar.Image size={58} source={{ uri: props.img }} />
                <Text style={styles.name}>{props.name}</Text>
            </View>
            <Divider />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        height: 80
    },
    name: {
        marginLeft: 20,
        fontSize: 16,
        fontWeight: '600'
    }
})
