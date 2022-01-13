import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { setOrigin, setDestination } from "../slices/navSlice";

const NavFavorite = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const data = [
    {
      id: "23",
      icon: "briefcase",
      name: "Work",
      location: { lat: 51.5032973, lng: -0.1195537 },
      destination: "London Eye, London, UK",
    },
  ];

  return (
    <FlatList
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { location, destination, icon, name } }) => (
        <TouchableOpacity
          style={tw`flex-row items-center p-5`}
          onPress={(data, details = null) => {
            dispatch(
              setDestination({
                location: location,
                description: destination,
              })
            );
            navigation.navigate("MapScreen");
          }}
        >
          <Icon
            style={tw`mr-4 bg-gray-300 p-3 rounded-full`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{name}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorite;
