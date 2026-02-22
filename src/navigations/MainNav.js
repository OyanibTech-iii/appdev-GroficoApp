import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../utils';

import Home from '../screens/HomeScreen';
import Profile from '../screens/ProfileScreen';
import Product from '../screens/ProductScreen';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.HOME} >
      <Stack.Screen name={ROUTES.HOME} component={Home} options={{ headerShown: false }} />
      <Stack.Screen name={ROUTES.PROFILE} component={Profile} />
      <Stack.Screen name={ROUTES.PRODUCT} component={Product} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
