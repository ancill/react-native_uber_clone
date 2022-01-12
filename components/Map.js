import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectorOrigin } from "../slices/navSlice";

const Map = () => {
  const origin = useSelector(selectorOrigin);

  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

export default Map;

const styles = StyleSheet.create({});
