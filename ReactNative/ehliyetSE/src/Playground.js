import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Playground = () => {
  return (
    <View>
      <Text>Playground</Text>
    </View>
  );
};

export default Playground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
