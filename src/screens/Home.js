import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HomeScreen({ navigation }) {
  const [value, onChangeText] = React.useState("");
  const [countries, setCountries] = React.useState(null);

  const [fetching, setFetching] = React.useState(false);
  const apiCall = (value) => {
    setFetching(true);
    fetch("https://restcountries.eu/rest/v2/name/" + value)
      .then((res) => res.json())
      .then((res) => setCountries(res))
      .finally(() => setFetching(false));
  };

  const navigateToCountry = (data) => navigation.navigate("Country", { data });

  return (
    <View style={styles.root} contenContainerStyle={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeText(text)}
          placeholder="Enter Country"
          value={value}
        />
        <Button
          title="Submit"
          onPress={() => apiCall(value)}
          disabled={!value}
          style={styles.button}
        />
      </View>
      <View style={styles.countryHolder}>
        <Text style={styles.heading}>Select Your Country</Text>

        {fetching && <ActivityIndicator size="small" />}

        <FlatList
          data={countries}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigateToCountry(item)}
              style={styles.item}
            >
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
    paddingHorizontal: 8,
  },
  form: {
    padding: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  heading: {
    fontSize: 22,
    marginBottom: 8,
  },
  item: {
    padding: 8,
  },
});
