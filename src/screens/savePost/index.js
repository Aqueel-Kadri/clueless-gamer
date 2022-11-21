import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { TextInput } from "react-native-paper";
import { StackActions, useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

export default function SavePostScreen(props) {
  const source = props.route.params.source;
  const navigation = useNavigation();
  const [description, setDescription] = useState("");
  const [requestRunning, setRequestRunning] = useState(false);
  //   const dispatch = useDispatch();

  const handlePost = () => {
    setRequestRunning(true);
    console.log("uploading");
    setTimeout(() => {
      setRequestRunning(false);
      console.log("uploaded");
      navigation.dispatch(StackActions.popToTop());
    }, 2000);
  };
  console.log(requestRunning);
  if (requestRunning) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={60} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Descirbe your video"
          multiline
          maxLength={150}
          style={styles.inputText}
          onChangeText={(text) => setDescription(text)}
        />
        <View style={{ flex: 5 }} />
        <Image source={source} style={styles.mediaPreview}></Image>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={navigation.goBack}
        >
          <AntDesign name="back" size={24} color="black" />
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.cancelButton, backgroundColor: "#f66" }}
          onPress={() => handlePost()}
        >
          <MaterialIcons name="add" size={24} color="white" />
          <Text style={{ ...styles.buttonText, color: "white" }}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
