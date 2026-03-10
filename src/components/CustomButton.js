import { Dimensions, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';

const CustomButton = ({ containerStyle, label, textStyle, onPress, loading = false }) => {
  const { width } = Dimensions.get('window');

  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={loading ? undefined : onPress} disabled={loading}>
        <View style={{ padding: width * 0.014, borderRadius: 10, backgroundColor: '#16a34a' }}>
          {loading ? (
            <ActivityIndicator color="#ffffff" size="small" />
          ) : (
            <Text style={textStyle}>{label}</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
