import { View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, registerAction } from "../../../redux/actions";

export default function AuthDetails({ setDetailsPage, authPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const loaded = useSelector((state) => state.auth.loaded);
  const currentUser = useSelector((state) => state.auth.currentUser);

  const handleLogin = () => {
    dispatch(loginAction({ email: email, password: password }));
  };
  const handleRegister = () => {
    dispatch(registerAction({ email: email, password: password }));
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setDetailsPage(false)}>
        <Feather name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        style={styles.textInput}
      />
      <TextInput
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        style={styles.textInput}
      />

      <TouchableOpacity
        style={styles.containerButton}
        onPress={() => (authPage === 0 ? handleLogin() : handleRegister())}
      >
        <Text style={styles.buttonText}>
          {authPage === 0 ? "Sign In" : "Sign Up"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
