import { View, Text, TouchableOpacity, Animated } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import styles from "./style";

export default function AnimatedRecordButton({
  isFilled, //Inner Red Circle is filled when set true
  animate, //Component animates each time isFilled property changes
  animateOnMount, //when set true, the component animates when loaded
}) {
  const animationValue = useRef(new Animated.Value(Number(isFilled))).current;

  const innerCircleDimensions = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["50%", "100%"],
  });
  const innerCircleRadius = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [5, 25],
  });

  const animationTransition = Animated.timing(animationValue, {
    toValue: animateOnMount ^ isFilled,
    duration: 250,
    useNativeDriver: false,
  });

  useEffect(() => {
    if (animate) {
      animationTransition.start();
    }
  }, [isFilled]);

  return (
    <View style={styles.outerCircle}>
      <Animated.View
        style={[
          styles.innerCircle,
          {
            width: innerCircleDimensions,
            height: innerCircleDimensions,
            borderRadius: innerCircleRadius,
          },
        ]}
      />
    </View>
  );
}
