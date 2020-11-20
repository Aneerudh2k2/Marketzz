import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

import * as firebase from "firebase";
import { Header } from "react-native/Libraries/NewAppScreen";

const DashboardScreen = () => {
  return (
    <View style={styles.signout}>
      <Button
        style={styles.signoutButton}
        title="Sign out"
        color="#2274a5"
        onPress={() => firebase.auth().signOut()}
      />
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  signout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signoutButton: {
    width: "100%",
    height: "auto",
    borderRadius: 2,
    padding: 10,
    paddingHorizontal: 50,
    backgroundColor: "#afd2e9",
  },
});
