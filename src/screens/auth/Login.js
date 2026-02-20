import { useContext, useState } from 'react';
import { Alert, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import { IMG, ROUTES } from '../../utils';
import { AuthContext } from '../../utils/AuthContext';

const Login = () => {
  // GETTER //SETTER
  const [emailAdd, setEmailAdd] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const { login } = useContext(AuthContext);

  //   useEffect(() => {}, [emailAdd, password]);

  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <View >
        <Image source={IMG.LOGO} style={{ width: 300, height: 200, marginBottom: 10 }} resizeMode="contain" />
      </View>
      {/* <Text style={{ color: 'black', fontFamily: 'Poppins-Medium' }}>{emailAdd}</Text>
      <Text style={{ color: 'black', fontFamily: 'Poppins-Medium' }}>{password}</Text> */}

      <View style={{ width: '100%', alignItems: 'center', }}>
        <CustomTextInput
          label={'Email Address'}
          placeholder={'Email Address'}
          placeholderTextColor={'#94b28b'}
          value={val => setEmailAdd(val)}
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
          value={val => setPassword(val)}
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
            letterSpacing: .8,
            color: '#47bf24',
            fontSize: 12,
            fontFamily: 'Poppins-Medium',
          }}
        />
      </View>

      <CustomButton
        label={'Login'}
        containerStyle={{
          justifyContent: 'center',
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
          if (emailAdd === '' || password === '') {
            Alert.alert('Invalid Credentials', 'Please fill in all fields, Try again!');
            return;
          }
          if (emailAdd === '123' && password === '123') {
            Alert.alert('Success', 'Login successful!');
            login({ email: emailAdd });
          } else {
            Alert.alert('Invalid Credentials', 'Email or password is incorrect. Try again!');
          }
        }}
      />

      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontFamily: 'Poppins-Medium', color: '#0f3a03', fontSize: 15 }}>Not register yet?</Text>
        <TouchableOpacity
          style={{ marginLeft: 5 }}
          onPress={() => navigation.navigate(ROUTES.REGISTER)}
        >
          <Text style={{ color: '#47bf24', fontFamily: 'Poppins-Bold', letterSpacing: .8 }}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
