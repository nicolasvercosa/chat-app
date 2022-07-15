import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { FAB } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import ContactsItem from '../components/ContactsItem';

const DATA = [
  {
    name: 'Narutinho',
    image: 'https://play-lh.googleusercontent.com/i-0HlK6I-K5ZVI28HFa4iXz0T22Mg2WjQ4gMsEYvqmSNdifp2NE41ZiaUCavmbIimQ'
  } ,
  {
    name: "Narutinho",
    image: 'https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2021/10/narutofeliz-destacada.jpg?fit=774%2C489&quality=99&strip=all&ssl=1'
  },
  {
    name: "Moranguinho",
    image: "https://clubedovideogame.com.br/wp-content/uploads/2022/03/ichigo-kurosaki-1024x576.jpg"
  },
  {
    name: "Rei Chiquita",
    image: "https://cf.shopee.com.br/file/5665a267cd8cb1baa9bed66ecc884913"
  } 
]

export default function Contacts() {
  const navigation = useNavigation();
  const renderItem = ({item}) => (
    <ContactsItem name={item.name} img={item.image} />
  )
  return ( 
    <View style={{flex: 1}}>
      <FlatList data={DATA} renderItem={renderItem} />
      <FAB onPress={()=>{navigation.navigate('Adicionar Contato')}} height={76} width={76} style={styles.fab} icon={'account-plus'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  }
})