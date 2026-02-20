import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Image, Text, TouchableOpacity, View, Alert, ScrollView } from 'react-native';
import { IMG, ROUTES } from '../utils';
import { AuthContext } from '../utils/AuthContext';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { logout } = useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>

      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', padding: 10, gap: 2,}}>
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
              backgroundColor: '#47bf24',
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
      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 50,
        }}
      >
        <Image
          source={IMG.LOGO}
          style={{
            width: 200,
            height: 200,
            marginBottom: 30,
          }}
        />
        {/* <Text style={{ fontSize: 32, color: 'black', fontWeight: 'bold', marginBottom: 30, fontFamily: 'Poppins-Medium', }}>HomeScreen</Text> */}



      </ScrollView>
    </View>
  );
};

export default HomeScreen;
