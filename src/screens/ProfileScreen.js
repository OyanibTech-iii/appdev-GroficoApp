import { Image, Text, View } from 'react-native';
import { IMG } from '../utils';
import CustomFooter from '../components/CustomFooter';

const ProfileScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
      {/* <Text>ProfileScreen</Text> */}
      <CustomFooter />
    </View>
  );
};

export default ProfileScreen;
