import { View, Text, Touchable, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import { Audio } from "expo-av";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import styles from "./style";
import AnimatedRecordButton from "../../components/custom/animatedRecordButton";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function CameraScreen() {
  const cameraTypes = [Camera.Constants.Type.back, Camera.Constants.Type.front];
  const cameraFlashStatus = [
    Camera.Constants.FlashMode.off,
    Camera.Constants.FlashMode.torch,
  ];

  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [hasAudioPermissions, setHasAudioPermissions] = useState(false);
  const [hasGalleryPermissions, setHasGalleryPermissions] = useState(false);
  const [galleryItems, setGalleryItems] = useState([]);
  const isFocused = useIsFocused();

  const [cameraRef, setCameraRef] = useState(null);
  const [cameraType, setCameraType] = useState(cameraTypes[0]);
  const [cameraFlash, setCameraFlash] = useState(cameraFlashStatus[0]);
  const [isRecording, setIsRecording] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const recordingStarted = useRef(false);
  const navigation = useNavigation();

  const pickFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      aspect: [16, 9],
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
    });
    if (!result.canceled) {
      navigation.navigate("savePost", { source: result.assets[0].uri });
    }
  };

  const startRecording = async () => {
    if (cameraRef) {
      try {
        const options = {
          maxDuration: 60,
          quality: Camera.Constants.VideoQuality["480"],
        };
        const videoRecordPromise = cameraRef.recordAsync(options);
        if (videoRecordPromise) {
          console.log("before recording starts");
          recordingStarted.current = true;
          const data = await videoRecordPromise;
          console.log("after recording stops");
          const source = data.uri;
          navigation.navigate("savePost", { source: source });
        }
      } catch (e) {
        console.warn(e);
      }
    }
  };

  const stopRecording = async () => {
    if (cameraRef) {
      console.log("before stop recording");
      cameraRef.stopRecording();
      recordingStarted.current = false;
    }
  };

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.granted);

      const audioStatus = await Audio.requestPermissionsAsync();
      setHasAudioPermissions(audioStatus.granted);

      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermissions(galleryStatus.granted);

      if (galleryStatus.status === "granted") {
        const userGalleryMedia = await MediaLibrary.getAssetsAsync({
          sortBy: ["creationTime"],
          mediaType: ["video"],
        });
        setGalleryItems(userGalleryMedia.assets);
      }
    })();
  }, []);

  useEffect(() => {
    if (isRecording) {
      startRecording();
    } else if (recordingStarted.current) {
      stopRecording();
    }
  }, [isRecording]);

  if (!hasAudioPermissions || !hasCameraPermission || !hasGalleryPermissions) {
    return (
      <View
        style={{
          backgroundColor: "black",
        }}
      ></View>
    );
  }
  return (
    <View style={styles.container}>
      {isFocused ? (
        <Camera
          style={styles.camera}
          ref={(ref) => setCameraRef(ref)}
          ratio={"16:9"}
          type={cameraType}
          flashMode={cameraFlash}
          onCameraReady={() => setIsCameraReady(true)}
        />
      ) : null}
      <View style={styles.bottomBarContainer}>
        <View style={styles.galleryButtonContainer}>
          <TouchableOpacity
            onPress={() =>
              setCameraType(
                (currentState) =>
                  cameraTypes[Number(!cameraTypes.indexOf(currentState))]
              )
            }
          >
            <Feather
              name="repeat"
              size={25}
              color="white"
              style={{
                transform: [{ rotate: "90deg" }],
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              setCameraFlash(
                (currentState) =>
                  cameraFlashStatus[
                    Number(!cameraFlashStatus.indexOf(currentState))
                  ]
              )
            }
          >
            {cameraFlash === cameraFlashStatus[1] ? (
              <Ionicons name="ios-flash" size={24} color="white" />
            ) : (
              <Ionicons name="ios-flash-off-outline" size={24} color="white" />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.recordButtonContainer}>
          <TouchableOpacity
            onPress={() => setIsRecording((currentState) => !currentState)}
          >
            <AnimatedRecordButton isFilled={!isRecording} animate />
          </TouchableOpacity>
        </View>
        <View style={styles.galleryButtonContainer}>
          <TouchableOpacity
            style={styles.galleryButton}
            onPress={() => pickFromGallery()}
          >
            {galleryItems[0] === undefined ? (
              <></>
            ) : (
              <Image
                style={styles.galleryButtonImage}
                source={{ uri: galleryItems[0].uri }}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
