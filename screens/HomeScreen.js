import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { setDestination, setOrigin } from '../slices/navSlice';
import { useDispatch } from 'react-redux';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      {/* <Text style={[tw`text-red-500 p-20`, styles.text, { color: "green" }]}>HomeScreen</Text> */}
      <View>
        <Image 
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain"
          }}
          source={{
            uri: 'https://download.logo.wine/logo/Uber/Uber-Logo.wine.png'
          }}
        />
        <GooglePlacesAutocomplete 
          placeholder='Where From?'
          styles={{
            container: {
              flex: 0
            },
            textInput: {
              fontSize: 18
            }
          }}
          enablePoweredByContainer={false}
          minLength={2}
          onPress={(data, details = null) => {
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description
            }));

            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en'
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debaounce={400}
        />
        <NavOptions />
        <NavFavourites />
      </View>

    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  text: {
    color: "blue"
  }
});