import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import RowItem from "../components/RowItem";
import * as Svg from "react-native-svg";

export default function Country({ route, navigation }) {
  const { data } = route.params;

  const navigateToWeatherPage = () => navigation.navigate("Weather", { data });

  return (
    <View style={styles.root}>
      <RowItem label="Country Name" value={data.name} />
      <RowItem label="Country Capital" value={data.capital} />
      <RowItem label="Population" value={data.population} />
      <RowItem label="Latitute" value={data.latlng[0]} />
      <RowItem label="Longitude" value={data.latlng[1]} />

      <Image
        source={{ uri: data.flag }}
        style={{ width: "100%", height: 200 }}
        resizeMode="contain"
      />
      <Button title="Capital Weather" onPress={navigateToWeatherPage} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    marginTop: 8,
    paddingHorizontal: 8,
  },
  image: {
    margin: 8,
    borderWidth: 1,
  },
});
