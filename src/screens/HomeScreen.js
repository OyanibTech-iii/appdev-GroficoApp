import React, { useContext, useState } from 'react';
import { Image, Text, TouchableOpacity, View, ScrollView, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from 'react-native-elements';
import { IMG, ROUTES } from '../utils';
import { AuthContext } from '../utils/AuthContext';
import CustomFooter from '../components/CustomFooter';
import SocialMedia from '../components/SocialMedia';
import CustomSeachbar from '../components/CustomSeachbar';
import Banner from '../components/Banner';
import CustomCarousel from '../components/CustomCarousel';


const HomeScreen = () => {
  const navigation = useNavigation();
  const { logout } = useContext(AuthContext);

  const openLink = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("Don't know how to open this URL: " + url);
    }
  };

  const [search, setSearch] = useState('');

  const updateSearch = (value) => {
    setSearch(value);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f9f9f9' }}>

      <CustomSeachbar search={search} updateSearch={updateSearch} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Banner />
        <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium', color: '#072d14', marginLeft: 30, textAlign: 'start' }}>Garden Transformed </Text>
        <CustomCarousel />
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
              position: 'absolute',
            }}
          />

        </View>
        <SocialMedia />
        <CustomFooter />
      </ScrollView>

      <View style={{ height: 80 }} />
    </View>
  );
};

export default HomeScreen;