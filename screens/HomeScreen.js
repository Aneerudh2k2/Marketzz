import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import firebase from "firebase";

const HomeScreen = () => {
  return (
    <View>
      <Button title="Sign out" onPress={() => firebase.auth().signOut()} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
