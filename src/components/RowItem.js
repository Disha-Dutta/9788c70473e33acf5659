import React from "react";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
  },
  valueContainer: {
    flex: 1,
    paddingLeft: 8,
  },
  label: {
    fontWeight: "500",
  },
});
export default function RowItem({ label, value }) {
  return (
    <View style={styles.root}>
      <View style={StyleSheet.label}>
        <Text>{label}</Text>
      </View>
      <View style={styles.valueContainer}>
        <Text>{value}</Text>
      </View>
    </View>
  );
}
