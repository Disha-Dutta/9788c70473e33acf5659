import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import RowItem from "../components/RowItem";

export default function Weather({ route, navigation }) {
  const { data } = route.params;

  const [weather, setWeather] = React.useState(null);
  useEffect(() => {
    fetch(
      "http://api.weatherstack.com/current?access_key=a0c35334e5b7bbe4e0429c1c161f1921&query=" +
        data.capital
    )
      .then((res) => res.json())
      .then((res) => setWeather(res));
  }, [data]);

  if (!weather)
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="small" />
      </View>
    );
  const weatherData = weather.current || {};
  return (
    <View style={styles.root}>
      {!!weatherData.weather_icons && (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: weatherData.weather_icons[0] }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      )}
      {!!weatherData.temperature && (
        <RowItem label="Temperature" value={weatherData.temperature + " deg"} />
      )}
      {!!weatherData.wind_speed && (
        <RowItem label="Wind Speed" value={weatherData.wind_speed} />
      )}
      {!!weatherData.precip && (
        <RowItem label="Precipitation" value={weatherData.precip} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 8,
    marginTop: 12,
  },
  loaderContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 90,
    height: 90,
  },
  imageContainer: {
    marginVertical: 8,
    paddingHorizontal: 8,
  },
});
