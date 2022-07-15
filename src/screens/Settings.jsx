import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { AuthContext } from '../context/userContext';
import UserAvatar from '../components/UserAvatar';
import { TextInput, Text, Divider, Button } from 'react-native-paper';

export default function Settings() {

  const { signOut, user } = React.useContext(AuthContext)


  return (
    <View style={styles.screen}>
      <View style={styles.avatarArea}>
        <UserAvatar style={styles.avatar} size={100} />
        <TouchableOpacity><Text style={styles.editImageButtonText}>Alterar imagem de perfil</Text></TouchableOpacity>
      </View>

      <Divider />
      <View style={styles.editArea}>

        <Text style={styles.nameTitle}>Nome</Text>
        <TextInput style={styles.input} placeholder={user.name} />
        <Button style={styles.button} mode='contained' onPress={()=>{}}>Salvar</Button>
      </View>


      <Button onPress={() => signOut()}>Sair</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  avatarArea: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10
  },
  avatar: {
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 10,
    marginRight: 15
  },
  editImageButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3498db'
  },
  editArea: {
  },
  nameTitle: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10
  },
  input: {
    width: 370,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 40,
  },
  button: {
    width: 370,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10
  }
})