import React, { useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { getHeaderTitle } from '@react-navigation/elements';
import TopBar, { TopBarBack } from '../components/TopBar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Chats from '../screens/Chats';
import Contacts from '../screens/Contacts';
import Settings from '../screens/Settings';
import Chat from '../screens/Chat';
import AddContact from '../screens/AddContact';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

import theme from '../theme';
import CustomDrawerContent from '../components/CustomDrawerContent';
import { AuthContext } from '../context/userContext';

const Drawer = createDrawerNavigator();


export default function DrawerNav() {
    const {user} = React.useContext(AuthContext)
    
    return (


        <NavigationContainer theme={theme}>
            <Drawer.Navigator
            initialRouteName='Configurações'
                screenOptions={{
                    drawerItemStyle: {
                        /* display: "none", */
                    },
                    drawerStyle: {
                        backgroundColor: 'white',
                        width: 275,
                    }, header: ({ navigation, route, options }) => {
                        const title = getHeaderTitle(options, route.name)
                        return <TopBar title={title} />
                    }
                }}
                useLegacyImplementation
                drawerContent={(props) => <CustomDrawerContent {...props} />}>
                {!user ? (
                    <>
                        <Drawer.Screen name='Entrar' component={SignIn} options={{ headerShown: false, animationTypeForReplace: !user ? 'pop' : 'push' }} />
                        <Drawer.Screen name='Criar Conta' component={SignUp} options={{ headerShown: false }} />
                    </>
                ) : (
                    <>
                        <Drawer.Screen
                            name="Conversas"
                            component={Chats}
                            options={{
                                drawerIcon: ({ focused, size }) => {
                                    return (
                                        <>
                                            {focused ?
                                                (<MaterialCommunityIcons name="message" size={26} color="#3498db" />)
                                                :
                                                (<MaterialCommunityIcons name="message" size={26} color="#2b343b" />)
                                            }
                                        </>
                                    )
                                }
                            }} />
                        <Drawer.Screen
                            name="Contatos"
                            component={Contacts}
                            options={{
                                drawerIcon: ({ focused, size }) => {
                                    return (
                                        <>
                                            {focused ?
                                                (<MaterialCommunityIcons name="account" size={26} color="#3498db" />)
                                                :
                                                (<MaterialCommunityIcons name="account" size={26} color="#2b343b" />)
                                            }
                                        </>
                                    )
                                }
                            }}
                        />
                        <Drawer.Screen
                            name="Configurações"
                            component={Settings}
                            options={{
                                drawerIcon: ({ focused, size }) => {
                                    return (
                                        <>
                                            {focused ?
                                                (<MaterialCommunityIcons name="cog" size={26} color="#3498db" />)
                                                :
                                                (<MaterialCommunityIcons name="cog" size={26} color="#2b343b" />)
                                            }
                                        </>
                                    )
                                },
                             
                            }}
                        />
                        <Drawer.Screen
                            name="Conversa"
                            component={Chat}
                            options={{
                                drawerItemStyle: { display: 'none' },
                                header: ({ route, options }) => {
                                    const title = getHeaderTitle(options, route)
                                    return <TopBarBack title={route.name} />
                                }
                            }}
                        />
                        <Drawer.Screen
                            name="Adicionar Contato"
                            component={AddContact}
                            options={{
                                drawerItemStyle: { display: 'none' },

                                header: ({ route, options }) => {
                                    const title = getHeaderTitle(options, route)
                                    return <TopBarBack title={route.name} />
                                }
                            }}
                        />
                    </>

                )}
            </Drawer.Navigator>
        </NavigationContainer>

    )
}



