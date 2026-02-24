import { View, Text } from 'react-native'
import React from 'react'
import { SearchBar } from 'react-native-elements';
                import { useState } from 'react';


const CustomSeachbar = () => {
  const [search, setSearch] = useState('');

  const updateSearch = (value) => {
    setSearch(value);
  };

  return (
      <View style={{ paddingTop: 20 }}>
        <SearchBar
          placeholder="Search for products or courses..."
          onChangeText={updateSearch}
          value={search}
          platform="default"
          containerStyle={{
            backgroundColor: 'transparent',
            borderBottomColor: 'transparent',
            borderTopColor: 'transparent',
            paddingHorizontal: 20,
          }}
          inputContainerStyle={{
            backgroundColor: '#ffffff',
            borderRadius: 15,
            height: 40,
            elevation: 3, // Shadow for Android
            shadowColor: '#000', // Shadow for iOS
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
          }}
          inputStyle={{
            fontFamily: 'Poppins-Regular',
            fontSize: 12,
            color: '#0f3a03',
          }}
          leftIconContainerStyle={{ marginLeft: 10 }}
          searchIcon={{ color: '#47bf24' }}
        />
      </View>
  )
}

export default CustomSeachbar