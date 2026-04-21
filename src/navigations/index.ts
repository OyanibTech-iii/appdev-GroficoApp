import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useContext, useEffect } from 'react';
import { Platform, StatusBar, useColorScheme } from 'react-native';
import { useDispatch } from 'react-redux';
import AuthNav from './AuthNav';
import MainNav from './MainNav';
import ProcessNav from './ProcessNav';
import ReleaseNav from './ReleaseNav';
import { AuthContext } from '../utils/AuthContext';
import { useSelector } from 'react-redux';


const RootNavigator () => {
  const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === 'dark';
  const { data } = useSelector((state: { auth: { data: undefined } }) => state.auth);

  // const { isError, errorMessage } = useSelector(state => state.auth);
  const { isLoggedIn, isProcessing, isReleasing, user, resetLogin } = useContext(AuthContext);
  const handleRetry = () => {
    dispatch(resetLogin());
  };


  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#F2F2F2', true);
    }

    StatusBar.setBarStyle('dark-content', true);
  }, [isDarkMode]);

  // console.log('Auth Data (Redux): ', JSON.stringify(data, null, 2));
  // console.log('Auth User (Context): ', JSON.stringify(user, null, 2));
  // console.log({errorMessage});

  return (
    <NavigationContainer>
    {
      isReleasing?(
        <ReleaseNav />
      ) : isProcessing ? (
    <ProcessNav />
  ) : isLoggedIn ? (
    <MainNav />
  ) : (
    <AuthNav />
  )
}
</NavigationContainer>
  );
};


export default RootNavigator;