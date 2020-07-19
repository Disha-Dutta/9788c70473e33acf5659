import React from "react";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    padding: 8,
  },
  valueContainer: {
    flex: 1,
    paddingLeft: 8,
  },
  label: {
    fontWeight: "bold",
  },
});
export default function RowItem({ label, value }) {
  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.valueContainer}>
        <Text>{value}</Text>
      </View>
    </View>
  );
}
