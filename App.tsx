import React from 'react';
import { View } from 'react-native';

import AppNavigationNi from './src/navigations';

import rootSaga from './src/App/sagas';
import configureStore from './src/App/reducers';

import { Provider } from 'react-redux';
import { AuthProvider } from './src/utils/AuthContext';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const { store, runSaga } = configureStore();
runSaga(rootSaga);

GoogleSignin.configure({
  webClientId: '6741921438-tml6v66944nmia7r4je5vn2r7pup04dn.apps.googleusercontent.com', 
  offlineAccess: true,
});

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
          <AppNavigationNi />
        </View>
      </AuthProvider>
    </Provider>
  );
};

export default App;