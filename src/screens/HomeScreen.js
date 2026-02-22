import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Image, Text, TouchableOpacity, View, Alert, ScrollView } from 'react-native';
import { IMG, ROUTES } from '../utils';
import { AuthContext } from '../utils/AuthContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomFooter from '../components/CustomFooter';
import HeaderHome from '../components/HeaderHome';


const HomeScreen = () => {
  const navigation = useNavigation();
  const { logout } = useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <HeaderHome />
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', padding: 10, gap: 2, }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(ROUTES.PROFILE);
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              padding: 5,
              backgroundColor: '#16a34a',
              borderRadius: 8,
              marginTop: 20,
            }}
          >
            <Ionicons name="person-outline" size={15} color="white" />
            <Text style={{ fontSize: 12, color: 'white', marginLeft: 5, }}>
              Profile
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(ROUTES.PRODUCT);
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              padding: 5,
              backgroundColor: '#16a34a',
              borderRadius: 8,
              marginTop: 20, 
            }}
          >
            <Ionicons name="cart-outline" size={15} color="white" />
            <Text style={{ fontSize: 12, color: 'white', marginLeft: 5, }}>
              Product
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {

            Alert.alert('Logout', 'Are you sure you want to logout?', [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {
                text: 'Logout',
                onPress: () => {
                  logout();
                },
              },
            ]);
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              padding: 5,
              backgroundColor: 'red',
              borderRadius: 8,
              marginTop: 20,
            }}
          >
            <Ionicons name="log-out-outline" size={16} color="white" />
            <Text style={{ fontSize: 12, color: 'white', marginLeft: 5 }}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* <ScrollView */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 50,
        }}
      >
        <Image
          source={IMG.LOGO}
          style={{
            opacity: 0.1,
            width: 300,
            height: 300,
          }}
        />
        {/* <Text style={{ fontSize: 32, color: 'black', fontWeight: 'bold', marginBottom: 30, fontFamily: 'Poppins-Medium', }}>HomeScreen</Text> */}


      </View>
      {/* </ScrollView> */}
      <CustomFooter />
    </View>
  );
};

export default HomeScreen;
