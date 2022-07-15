import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar, Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function ChatsItem(props) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={()=>navigation.navigate('Conversa')} style={styles.container}>
            <View style={styles.avatarAndNameAndDate}>
                <View style={styles.avatarAndName}>                                  
                    <Avatar.Image {...props} size={58} source={{uri: props.img}}  />        
                    <View style={styles.nameAndMsg}>
                        <Text style={styles.name}>{props.name}</Text>
                        <Text>mensagen m disej idkkkk</Text>
                    </View>
                </View>
                <Text>20:09</Text>
            </View>
            <Divider />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',

    },
    avatarAndName: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 80,
    },
    avatarAndNameAndDate: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    name: {
        fontSize: 18,
        fontWeight: '600'
    },
    nameAndMsg: {
        marginLeft: 10,
        flexDirection: 'column'
    }
})