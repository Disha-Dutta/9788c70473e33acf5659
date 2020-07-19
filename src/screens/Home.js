import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

export default function HomeScreen() {
  const [value, onChangeText] = React.useState("");
  const [countries, setCountries] = React.useState(null);

  const apiCall = (value) =>
    fetch("https://restcountries.eu/rest/v2/name/" + value)
      .then((res) => res.json())
      .then((res) => setCountries(res));

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
            <View>
              <Text>{item.name}</Text>
            </View>
          )}
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
