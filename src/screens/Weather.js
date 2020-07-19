import React, { useEffect } from "react";
import { View, Text, Image, Button } from "react-native";
import RowItem from "../components/RowItem";
import * as Svg from "react-native-svg";

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

  if (!weather) return <Text>...Loading</Text>;

  return (
    <View>
      <RowItem
        label="Temperature"
        value={weather.current.temperature + " deg"}
      />
      <RowItem label="Wind Speed" value={weather.current.wind_speed} />
      <RowItem label="Precipitation" value={weather.current.precip} />
      <Image
        source={{ uri: weather.current.weather_icons[0] }}
        style={{ width: "100%", height: 200 }}
        resizeMode="contain"
      />
    </View>
  );
}
