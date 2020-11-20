import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { FAB } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { Dimensions } from "react-native";
const windowHeight = Dimensions.get("window").height;

const EcommerceScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [pvalue, setPvalue] = useState(null);
  const [dvalue, setDvalue] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        style={{ maxHeight: 550 }}
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                flex: 0.125,
                flexDirection: "row",
                paddingTop: 10,
                justifyContent: "flex-start",
                alignContent: "flex-start",
              }}
            >
              <Text style={{ flex: 1, fontSize: 15 }}>Product Name</Text>
              <View
                style={{
                  flex: 1,
                  borderRadius: 3,
                  borderWidth: 1,
                  borderColor: "#666",
                }}
              >
                <TextInput
                  value={pvalue}
                  onChangeText={(text) => setPvalue(text)}
                  placeholder="Enter the product name"
                />
              </View>
            </View>

            <View
              style={{
                flex: 0.2,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: 10,
              }}
            >
              <Text style={{ flex: 0.5, fontSize: 15 }}>Type</Text>
              <View
                style={{
                  flex: 0.5,
                  borderWidth: 1,
                  borderRadius: 3,
                  borderColor: "#666",
                }}
              >
                <Picker
                  style={{
                    height: 50,
                    width: 175,
                  }}
                  mode="dropdown"
                  selectedValue={selectedValue}
                  onValueChange={(itemValue) => setSelectedValue(itemValue)}
                  itemStyle={{ fontSize: 20 }}
                >
                  <Picker.Item label="Electronics" value="electronics" />
                  <Picker.Item label="Books" value="books" />
                  <Picker.Item label="Fashion" value="fashion" />
                  <Picker.Item label="Sports" value="sport" />
                  <Picker.Item label="Other item" value="other" />
                </Picker>
              </View>
            </View>

            <View
              style={{
                flex: 0.5,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignContent: "flex-start",
                paddingTop: 10,
              }}
            >
              <Text style={{ flex: 1, fontSize: 15 }}>Description</Text>
              <View
                style={{
                  flex: 1,
                  borderColor: "gray",
                  borderWidth: 1,
                  borderRadius: 3,
                }}
              >
                <TextInput
                  style={{
                    left: 10,
                  }}
                  clearButtonMode="while-editing"
                  value={dvalue}
                  onChangeText={(text) => setDvalue(text)}
                  numberOfLines={5}
                  multiline={true}
                />
              </View>
            </View>

            <View
              style={{
                // flex: 0.2,
                flexDirection: "row",
                justifyContent: "flex-start",
                margin: 10,
                borderWidth: 1,
                borderRadius: 6,
                borderStyle: "solid",
                borderColor: "#666",
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                  padding: 15,
                }}
                onPress={pickImage}
              >
                <AntDesign
                  style={{ flex: 0.5, alignSelf: "center" }}
                  name="upload"
                  size={24}
                  color="black"
                />
                <Text
                  style={{
                    flex: 1,
                    fontSize: 15,
                    left: -50,
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Upload Product Image
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={{
                marginTop: 10,
                width: "100%",
                height: windowHeight / 15,
                padding: 20,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
                backgroundColor: "#453f3c",
              }}
              onPress={() => {
                console.log("Submit");
                image && (
                  <View style={{ flex: 1, justifyContent: "center" }}>
                    <Image
                      source={{ uri: image }}
                      style={{
                        width: 200,
                        height: 100,
                      }}
                    />
                  </View>
                );
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <FAB
        style={styles.fab}
        icon={() => <AntDesign name="plus" size={24} color="white" />}
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
};

export default EcommerceScreen;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 15,
    maxHeight: 500,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  fab: {
    position: "absolute",
    right: 0,
    bottom: 0,
    margin: 16,
    backgroundColor: "#453f3c",
    borderRadius: 50,
  },
});
