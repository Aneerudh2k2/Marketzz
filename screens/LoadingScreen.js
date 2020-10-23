import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import firebase from "firebase";

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
