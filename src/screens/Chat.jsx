import { View, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput, Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Chat() {
  const sendButton = <TextInput.Icon color={'#22292e'}  onPress={()=>alert('oi')} name="send" />
  const emojiButton = <TextInput.Icon name="emoticon-happy-outline" />
  return (
    <View style={styles.screen}>
      <TextInput placeholder='Mensagem' left={emojiButton} right={sendButton} style={styles.input} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen : {
    flex: 1,

  },
  input: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  }
})