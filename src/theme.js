import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import {DefaultTheme as NavigationTheme} from '@react-navigation/native';

const theme = {
    ...DefaultTheme,
    ...NavigationTheme,
    roundness: 2,
    version: 3,
    colors: {
      ...NavigationTheme.colors,
      ...DefaultTheme.colors,
      primary: '#3498db',
      secondary: '#f1c40f',
      tertiary: '#a1b2c3',
      card: 'white',
      surface: '#3498db',
      text: '#22292e',
      accent: '#3498db'
    },
  };

export default theme;