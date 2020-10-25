import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import firebase from "firebase";
import * as Google from "expo-google-app-auth";

class LoadingScreen extends Component {
  componentDidMount() {
    this.checkifLoggedIn();
  }

  checkifLoggedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate("Home");
      } else {
        this.props.navigation.navigate("Login");
      }
    });
  };
  render() {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

export default LoadingScreen;
