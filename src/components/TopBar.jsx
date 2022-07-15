import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Appbar, Searchbar } from 'react-native-paper'
import { CommonActions, DrawerActions, useNavigation } from '@react-navigation/native'

export default function TopBar(props) {
    const navigation = useNavigation();
    const [searchbarActive, setSearchbarActive] = useState(true);


    return (
        <>
            {searchbarActive ?
                <Appbar style={styles.appbar}>
                    <Appbar.Action icon={'menu'}
                        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
                    <Appbar.Content title={props.title} />
                    <Appbar.Action icon={'magnify'} onPress={() => setSearchbarActive(!searchbarActive)} />
                </Appbar>
                :
                <Appbar style={styles.appbar}>
                    <Appbar.BackAction
                        onPress={() => setSearchbarActive(true)} />
                    <Appbar.Content title={props.title} />
                    <Searchbar placeholder='Buscar' autoFocus selectionColor={'black'} style={styles.searchbar} />
                </Appbar>}
        </>
    )
}

function TopBarBack(props) {
    const navigation = useNavigation();
    return (
        <Appbar style={styles.appbar}>
            <Appbar.BackAction icon={'menu'} onPress={()=>navigation.dispatch(CommonActions.goBack())} />
            <Appbar.Content title={props.title} />
        </Appbar>
    )
}

export { TopBarBack }

const styles = StyleSheet.create({
    appbar: {
        height: 112,
        paddingTop: 30,
        paddingBottom: 2,
        justifyContent: 'space-between',
    },
    searchbar: {
        width: 'auto',
        shadowColor: 'transparent',
        border: 'none',
        position: 'absolute',
        top: 48,
        left: 50,
        right: 10,
    }
})