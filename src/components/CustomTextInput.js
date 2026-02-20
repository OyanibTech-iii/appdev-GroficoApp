import { useState } from 'react';
import { Dimensions, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomTextInput = ({
  placeholder,
  label,
  labelStyle,
  value,
  containerStyle,
  textStyle,
  placeholderTextColor,
  isPassword = false,
}) => {
  const { width, height } = Dimensions.get('window');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <View style={{ flexDirection: 'row', }}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          onChangeText={value}
          secureTextEntry={isPassword && !showPassword}
          style={[
            textStyle,
            {
              // color: '#47bf24',
              flex: 1,
              borderBottomWidth: 1,
              borderBottomColor: '#092301',
              fontFamily: 'Poppins-Medium',
            },
          ]}
        />
        {isPassword && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}          
          >
            <Icon
              name={showPassword ? 'eye-off' : 'eye'}
              size={24}
              color="#47bf24"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomTextInput;
