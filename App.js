import "react-native-gesture-handler";
import React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-community/async-storage";
import OnBoardingScreen from "./screens/OnBoardingScreen";
import SignUpScreen from "./screens/SignUpScreen";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import LoadingScreen from "./screens/LoadingScreen";
import * as firebase from "firebase";
import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();

export default function App({ navigation }) {
  const [isFirstLaunch, setisFirstLaunch] = React.useState(null);
  let routeName;

  React.useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value === null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setisFirstLaunch(true);
      } else {
        setisFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) return null;
  else if (isFirstLaunch === true) {
    routeName = "OnBoarding";
  } else {
    routeName = "Loading";
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routeName}>
        <Stack.Screen
          name="OnBoarding"
          component={OnBoardingScreen}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={({ navigation }) => ({
            title: "",
            headerStyle: {
              backgroundColor: "#f9fafd",
              shadowColor: "#f9fafd",
              elevation: 0,
            },
            headerLeft: () => (
              <View style={{ marginLeft: 10 }}>
                <FontAwesome.Button
                  name="long-arrow-left"
                  size={25}
                  backgroundColor="#f9fafd"
                  color="#333"
                  onPress={() => navigation.navigate("Login")}
                />
              </View>
            ),
          })}
        />

        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
