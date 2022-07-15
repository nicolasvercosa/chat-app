import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import theme from './src/theme';
import DrawerNav from './src/navigations/Drawer';
import AuthProvider from './src/context/userContext';


export default function App() {


  return (
    <AuthProvider>
      <PaperProvider theme={theme}>
        <DrawerNav />
        <StatusBar style="auto" />
      </PaperProvider>
    </AuthProvider>





  );
}