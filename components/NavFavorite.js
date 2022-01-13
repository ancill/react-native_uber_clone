import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const NavFavorite = () => {
  const data = [
    {
      id: "123",
      icon: "home",
      location: "Home",
      destination: "Code Street, London, UK",
    },
    {
      id: "23",
      icon: "briefcase",
      location: "Work",
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
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 bg-gray-300 p-3 rounded-full`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorite;
