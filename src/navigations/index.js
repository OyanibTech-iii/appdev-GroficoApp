import { NavigationContainer } from '@react-navigation/native';
import { useContext, useEffect } from 'react';
import { Platform, StatusBar, useColorScheme } from 'react-native';

import AuthNav from './AuthNav';
import MainNav from './MainNav';
import { AuthContext } from '../utils/AuthContext';

export default () => {
  const isDarkMode = useColorScheme() === 'dark';
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#000000', true);
    }

    StatusBar.setBarStyle('dark-content', true);
  }, [isDarkMode]);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainNav /> : <AuthNav />}
    </NavigationContainer>
  );
};
