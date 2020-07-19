import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HomeScreen({ navigation }) {
  const [value, onChangeText] = React.useState("");
  const [countries, setCountries] = React.useState(null);

  const apiCall = (value) =>
    fetch("https://restcountries.eu/rest/v2/name/" + value)
      .then((res) => res.json())
      .then((res) => setCountries(res));

  const navigateToCountry = (data) => navigation.navigate("Country", { data });

  return (
    <View style={styles.root} contenContainerStyle={styles.container}>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => onChangeText(text)}
        placeholder="Enter Country"
        value={value}
      />
      <Button title="Submit" onPress={() => apiCall(value)} disabled={!value} />
      <View style={styles.countryHolder}>
        <FlatList
          data={countries}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigateToCountry(item)}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  countryHolder: {
    width: "100%",
  },
});
