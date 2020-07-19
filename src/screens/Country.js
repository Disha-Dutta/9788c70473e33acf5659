import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import RowItem from "../components/RowItem";

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

      <View style={styles.imageContainer}>
        <Image
          source={{ uri: data.flag }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Button title="Capital Weather" onPress={navigateToWeatherPage} />
      <Text style={{ marginTop: 8 }}>* SVG not supported in React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    marginTop: 8,
    paddingHorizontal: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    marginBottom: 8,
  },
});
