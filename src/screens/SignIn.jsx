import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, TextInput, Text } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../context/userContext';


export default function SignIn() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigation = useNavigation();
  const eye = <TextInput.Icon color={'#22292e97'} name="eye" />
  
  const {signIn} = React.useContext(AuthContext);

  return (
    <View style={styles.view}>
      <TextInput value={username} onChangeText={setUsername} label={'Email'} style={styles.input}/>
      <TextInput secureTextEntry value={password} onChangeText={setPassword} label={'Senha'} right={eye} style={styles.input}/>
      <TouchableOpacity onPress={()=> navigation.navigate('Criar Conta')}><Text style={styles.touchtext}>Não tem uma conta? Registrar-se</Text></TouchableOpacity>
      <Button onPress={()=>signIn()} style={styles.button}>Entrar</Button>
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