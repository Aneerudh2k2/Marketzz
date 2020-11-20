import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

const CanteenScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CanteenScreen</Text>
    </View>
  );
};

export default CanteenScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
