import React from "react";
import * as firebase from "firebase";
import { StyleSheet, Text, View, Button, LogBox } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import DashboardScreen from "../Home/DashboardScreen";
import CanteenScreen from "../Home/CanteenScreen";
import BookingScreen from "../Home/BookingScreen";
import EcommerceScreen from "../Home/EcommerceScreen";
console.log("Rendering", MaterialCommunityIcons);
const Tab = createMaterialBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  const stationeryIcon = require("../assets/icon/stationery.svg");
  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      backBehavior="history"
      barStyle={styles.tab}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: () => {
            return <FontAwesome name="home" size={26} color="#fff" />;
          },
          tabBarColor: "#414288",
        }}
      />

      <Tab.Screen
        name="Canteen"
        component={CanteenScreen}
        options={{
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons name="food" size={28} color="#fff" />
            );
          },
          tabBarColor: "#ff3f00",
        }}
      />

      <Tab.Screen
        name="Ecommerce"
        component={EcommerceScreen}
        options={{
          tabBarLabel: "Buy and Sell",
          tabBarIcon: () => {
            return <FontAwesome name="shopping-bag" size={26} color="#fff" />;
          },
          tabBarColor: "#453f3c",
        }}
      />

      <Tab.Screen
        name="Stationary"
        component={BookingScreen}
        options={{
          tabBarIcon: () => {
            return <FontAwesome name="paperclip" size={26} color="#fff" />;
          },
          tabBarColor: "#ade25d",
        }}
      />
    </Tab.Navigator>
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
  tab: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
