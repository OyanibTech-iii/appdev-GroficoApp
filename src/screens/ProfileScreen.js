import React, { useState } from 'react';
import { Image, Text, View, TouchableOpacity, Modal, Pressable, ScrollView } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { ROUTES, IMG } from '../utils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomFooter from '../components/CustomFooter';
import CustomMeatball from '../components/CustomMeatball';

const ProfileScreen = () => {
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();
  const tabBarHeight = useBottomTabBarHeight();


  return (
    <View style={{ flex: 1, marginBottom: 70 }}>   
      <CustomMeatball />
      <ScrollView contentContainerStyle={{ paddingBottom: tabBarHeight + 20 }}>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View style={{
            width: 100,
            height: 100,
            borderRadius: 65,
            backgroundColor: '#f8fafc',
            padding: 3,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#e2e8f0'
          }}>
            <Image
              source={IMG.PROFILE_PIC}
              resizeMode='cover'
              style={{ width: 100, height: 100, borderRadius: 50}}
            />
          </View>
          <Text style={{ color: '#044b31', fontSize: 20, fontFamily: 'Poppins-Regular', marginTop: 15 }}>Pacifico Oyanib</Text>
          <Text style={{ color: '#64748b', fontSize: 12, fontFamily: 'Poppins-Regular' }}>Administrator</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 30, paddingHorizontal: 10 }}>
          {[
            { icon: 'camera-outline', label: 'Set Photo' },
            { icon: 'pencil-outline', label: 'Edit Info' },
            { icon: 'settings-outline', label: 'Settings' }
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                width: '28%',
                backgroundColor: '#ffffff',
                padding: 15,
                borderRadius: 15,
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#e2e8f0'
              }}
            >
              <Ionicons name={item.icon} size={20} color="#1e293b" />
              <Text style={{ color: '#1e293b', fontSize: 12, marginTop: 8, fontWeight: '500' }}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ flex: 1, backgroundColor: '#ffffff', margin: 20, borderRadius: 12, padding: 20 }}>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ color: '#022e12', fontSize: 16 }}>phone</Text>
            <Text style={{ color: "#64748b", fontSize: 12, marginTop: 4 }}>Mobile</Text>
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text style={{ color: '#022e12', fontSize: 16 }}>bio</Text>
            <Text style={{ color: "#64748b", fontSize: 12, marginTop: 4 }}>Bio</Text>
          </View>

          <View>
            <Text style={{ color: '#022e12', fontSize: 16 }}>username</Text>
            <Text style={{ color: "#64748b", fontSize: 12, marginTop: 4 }}>Username</Text>
          </View>
        </View>
        <CustomFooter />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;