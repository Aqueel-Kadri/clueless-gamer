import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthScreen from "../../screens/auth";
import { initialLoadingAction } from "../../redux/actions";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../home";
import SavePostScreen from "../../screens/savePost";

const Stack = createNativeStackNavigator();

export default function Route() {
  const currentUserObj = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialLoadingAction());
  }, []);

  if (!currentUserObj.loaded) {
    return <View />;
  }

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          {currentUserObj.currentUser === null ? (
            <Stack.Screen
              name="auth"
              component={AuthScreen}
              options={{ headerShown: false }}
            />
          ) : (
            <>
              <Stack.Screen
                name="home"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="savePost"
                component={SavePostScreen}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
