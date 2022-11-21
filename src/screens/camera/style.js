import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  camera: {
    aspectRatio: 9 / 16,
    backgroundColor: "black",
  },
  bottomBarContainer: {
    position: "absolute",
    flexDirection: "row",
    bottom: 0,
    marginBottom: 30,
  },
  recordButtonContainer: {
    flex: 1,
  },
  galleryButtonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  galleryButton: {
    borderWidth: 2,
    borderColor: "#fffa",
    height: "90%",
    width: "45%",
    borderRadius: 10,
    overflow: "hidden",
  },
  galleryButtonImage: {
    height: "100%",
    width: "100%",
  },
});

export default styles;
