import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import { IMG, ROUTES } from '../../utils';

const Register = () => {

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View >
        <Image source={IMG.LOGO} style={{ width: 300, height: 200, marginBottom: 10 }} resizeMode="contain" />
      </View>
      {/* <Text style={{ fontSize: 20 }}>Register</Text> */}
      {/* <Text style={{ color: 'black', fontFamily: 'Poppins-Medium' }}>{email}</Text>
      <Text style={{ color: 'black', fontFamily: 'Poppins-Medium' }}>{password}</Text>
      <Text style={{ color: 'black', fontFamily: 'Poppins-Medium' }}>{confirmPassword}</Text> */}

      <View style={{ width: '100%', alignItems: 'center', }}>
        <CustomTextInput
          label={'Email Address'}
          placeholder={'Email Address'}
          placeholderTextColor={'#94b28b'}
          value={val => setEmail(val)}
          containerStyle={{
            width: '80%',
            marginBottom: 8,

          }}
          labelStyle={{
            fontSize: 15,
            color: '#0f3a03',
            fontWeight: '500',
            fontFamily: 'Poppins-Medium',
          }}
          textStyle={{
            color: '#47bf24',
            letterSpacing: .8,
            fontSize: 12,
            fontFamily: 'Poppins-Medium',
          }}
        />

        <CustomTextInput
          label={'Password'}
          placeholder={'Password'}
          placeholderTextColor={'#94b28b'}
           isPassword={true}
          value={val => setPassword(val)}
          containerStyle={{
            width: '80%',
            fontFamily: 'Poppins-Medium',
          }}
          labelStyle={{
            fontSize: 15,
            color: '#0f3a03',
            fontWeight: '500',
            fontFamily: 'Poppins-Medium',
          }}
          textStyle={{
            color: '#47bf24',
            letterSpacing: .8,
            fontSize: 12,
            fontFamily: 'Poppins-Medium',
          }}
        />
        <CustomTextInput
          label={'Confirm Password'}
          placeholder={'Confirm Password'}
          placeholderTextColor={'#94b28b'}
          value={val => setConfirmPassword(val)}
           isPassword={true}
          containerStyle={{
            width: '80%',
            fontFamily: 'Poppins-Medium',
          }}
          labelStyle={{
            fontSize: 15,
            color: '#0f3a03',
            fontWeight: '500',
            fontFamily: 'Poppins-Medium',
          }}
          textStyle={{
            color: '#47bf24',
            letterSpacing: .8,
            fontSize: 12,
            fontFamily: 'Poppins-Medium',
          }}
        />
        <CustomButton
          label={'Create Account'}
          containerStyle={{
            marginVertical: 20,
            width: '80%',
            backgroundColor: '#47bf24',
            borderRadius: 10,
            fontFamily: 'Poppins-Medium',
          }}
          textStyle={{
            color: '#ffffff',
            textAlign: 'center',
            fontSize: 16,
            fontFamily: 'Poppins-Medium',
          }}
          onPress={() => {

              if ( email === '' || password === '' || confirmPassword === '') {
              Alert.alert('Invalid Credentials', 'Please fill in all fields, Try again!');
              return;
            }
          }}
        />

        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontFamily: 'Poppins-Medium', color: '#0f3a03', fontSize: 15 }}>Already have an account?</Text>
          <TouchableOpacity
            style={{ marginLeft: 5, }}
            onPress={() => navigation.navigate(ROUTES.LOGIN)}
          >
            <Text style={{ color: '#47bf24', fontFamily: 'Poppins-Bold', letterSpacing: .8 }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;
