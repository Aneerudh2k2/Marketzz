import React from "react";
import { StyleSheet, Text, View, Button, LogBox } from "react-native";
import firebase from "firebase";
import FormButton from "../components/FormButton";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = () => {
  return (
    <View style={styles.signout}>
      <TouchableOpacity
        style={styles.signoutButton}
        onPress={() => firebase.auth().signOut()}
      >
        <Text style={{ color: "#2274a5", fontSize: 18 }}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

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
