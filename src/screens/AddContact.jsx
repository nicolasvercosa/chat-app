import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'

export default function AddContact() {
  return (
    <View>
      <TextInput style={styles.input} />
      <Button  onPress={()=>{}}>Salvar</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: 340,
    marginTop: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 50
  }
})