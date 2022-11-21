import { View, Text } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Feather } from "@expo/vector-icons";
import CameraScreen from "../../screens/camera";
import { useSelector } from "react-redux";
import styles from "./style";

const Tab = createMaterialBottomTabNavigator();
const EmptyTab = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  return (
    <View style={styles.container}>
      <Text>Welcome {currentUser.email}</Text>
    </View>
  );
};

export default function HomeScreen() {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: "black",
        borderBottomColor: "darkslategray",
        borderBottomWidth: 1,
        borderStyle: "solid",
      }}
    >
      <Tab.Screen
        name="feed"
        component={EmptyTab}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={EmptyTab}
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="add"
        component={CameraScreen}
        options={{
          title: "Post",
          tabBarIcon: ({ color }) => (
            <Feather name="plus-circle" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="inbox"
        component={EmptyTab}
        options={{
          title: "Messages",
          tabBarIcon: ({ color }) => (
            <Feather name="message-square" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={EmptyTab}
        options={{
          title: "Me",
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
