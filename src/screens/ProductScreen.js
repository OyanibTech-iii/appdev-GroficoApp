import { View, Text, Image } from 'react-native'
import { IMG } from '../utils';
import CustomFooter from '../components/CustomFooter';

import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductScreen = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const gardenImages = [
        IMG.GARDEN1,
        IMG.GARDEN2,
        IMG.GARDEN3,
        IMG.GARDEN4
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % gardenImages.length
            );
        }, 2000);

        return () => clearInterval(interval);
    }, [gardenImages.length]);

    return (
        <SafeAreaView style={{
            marginTop: 120,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <View>
                <Image
                    source={gardenImages[currentImageIndex]}
                    style={{
                        width: 350,
                        height: 200,
                        borderRadius: 10,
                    }}
                />
            </View>
            <View >
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
            </View></SafeAreaView>

    )
}

export default ProductScreen