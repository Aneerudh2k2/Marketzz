import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const Skip = ({ ...props }) => {
  return (
    <TouchableOpacity style={{ marginHorizontal: 8 }} {...props}>
      <Text style={{ fontSize: 16 }}>Skip</Text>
    </TouchableOpacity>
  );
};

const Dots = ({ selected }) => {
  let backgroundColor;

  backgroundColor = selected ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.3)";

  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Next = ({ ...props }) => {
  return (
    <TouchableOpacity style={{ marginHorizontal: 8 }} {...props}>
      <Text style={{ fontSize: 16 }}>Next</Text>
    </TouchableOpacity>
  );
};

const Done = ({ ...props }) => {
  return (
    <TouchableOpacity style={{ marginHorizontal: 8 }} {...props}>
      <Text style={{ fontSize: 16 }}>Done</Text>
    </TouchableOpacity>
  );
};

const OnBoardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.navigate("Login")}
      pages={[
        {
          backgroundColor: "#d3faf5",
          image: (
            <Image
              source={require("../assets/boarding/onboarding-img3.jpg")}
              style={{ width: 350, height: 350 }}
            />
          ),
          title: "Coding!!",
          subtitle: "Have a enthusiatic mind and buckle up your coding skills",
        },
        {
          backgroundColor: "#f4eaf3",
          image: (
            <Image
              source={require("../assets/boarding/onboarding-img2.jpg")}
              style={{ width: 343, height: 200 }}
            />
          ),
          title: "Time is precious",
          subtitle:
            "I find my time is more valuable in learning precious stuffs",
        },
        {
          backgroundColor: "#e94f37",
          image: (
            <Image
              source={require("../assets/boarding/onboarding-img1.jpg")}
              style={{ width: 250, height: 250 }}
            />
          ),
          title: "Team Work",
          subtitle:
            "Group up your team for knowing the technical nitty-gritty stuff ",
        },
      ]}
    />
  );
};

export default OnBoardingScreen;
