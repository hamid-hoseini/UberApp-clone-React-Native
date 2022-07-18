import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Icon } from "react-native-elements";
import tw from 'tailwind-react-native-classnames';

const RideOptionsCard = () => {

  const navigation = useNavigation();
  const [selected, setSelected] = useState()
  const data = [
    {
      id: 'Uber-X-123',
      title: "Uber X",
      multiplier: 1,
      image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png"
    },
    {
      id: 'Uber-XL-456',
      title: "Uber XL",
      multiplier: 1.2,
      image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberXL.png"
    },
    {
      id: 'Uber-LUX-789',
      title: "Uber LUX",
      multiplier: 1.75,
      image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/Lux.png"
    }
  ];

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('NavigateCard')}
          style={tw`absolute  left-5 z-50 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-2 text-xl`}>Select a Ride</Text>
      </View>
      <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: {id, title, multiplier, image}, item}) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-10 ${id === selected?.id && "bg-gray-200"}`}
          >
            <Image 
              style={{ width: 100, height: 100, resizeMode: "contain"}}
              source={{uri: image}}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>Travel Time...</Text>
            </View>
            <Text style={tw`text-xl`}>$99</Text>
          </TouchableOpacity>
        )}
      />
      <View style={tw`-mt-5`}>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-2 m-1 ${!selected && "bg-gray-300"}`}
        >
          <Text style={tw`text-center text-white text-xl`}> Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})