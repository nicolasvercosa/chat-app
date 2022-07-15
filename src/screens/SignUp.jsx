import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CommonActions, useNavigation } from '@react-navigation/native';
import { Button, Text, TextInput } from 'react-native-paper';

export default function SignUp() {
  const navigation = useNavigation();
  const eye = <TextInput.Icon color={'#22292e97'} name="eye" />
  return (
    <View style={styles.view}>
      <TextInput label={'Nome'} style={styles.input} />
      <TextInput label={'Email'} style={styles.input} />
      <TextInput label={'Senha'} right={eye} style={styles.input} />
      <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.goBack())}><Text style={styles.touchtext}>Cancelar</Text></TouchableOpacity>
      <Button onPress={() => { }} style={styles.button}>Cadastrar</Button>

    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 340,
    marginBottom: 40,
    height: 50,
  },
  button: {
    marginTop: 40,
    width: 340
  },
  touchtext: {
    fontSize: 15,
  }

})