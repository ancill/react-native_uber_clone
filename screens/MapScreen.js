import React from "react";
import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";

const MapScreen = () => {
  return (
    <View>
      <Text>Map screen</Text>

      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`} />
    </View>
  );
};

export default MapScreen;
