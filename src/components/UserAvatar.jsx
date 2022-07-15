import { Avatar } from 'react-native-paper'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function UserAvatar(props) {
    return (
        <Avatar.Image
            size={props.size}
            backgroundColor="transparent"
            style={styles.avatar}
            {...props}
            source={require('../../assets/morty.jpg')}
        />
    )
}

const styles = StyleSheet.create({
    avatar: {
        marginTop: 40,
        marginBottom: 20
    }
})
