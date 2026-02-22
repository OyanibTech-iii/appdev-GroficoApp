import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';


const HeaderHome = () => {
  return (
    <View>
     <View style={{ backgroundColor: '#16a34a', padding: 4, alignItems: 'center',flexDirection: 'row', justifyContent: 'center', gap: 5, }}>
        <Icon name="search-outline" size={15} color="white" />
        <Text style={{ fontSize: 12, color: 'white', fontFamily: 'Poppins-Medium', textDecorationStyle:'underline', textDecorationColor:'white', textDecorationLine:'underline' }}>
          Search
        </Text>
      </View>
    </View>
  )
}

export default HeaderHome