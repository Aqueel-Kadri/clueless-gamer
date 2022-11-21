import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  formContainer: {
    marginVertical: 20,
    flexDirection: "row",
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
  },
  inputText: {
    flex: 75,
  },
  mediaPreview: {
    flex: 25,
    aspectRatio: 9 / 16,
    backgroundColor: "black",
  },
  cancelButton: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    borderColor: "lightgray",
    borderWidth: 1,
    borderStyle: "solid",
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    fontWeight: "bold",
    marginHorizontal: 10,
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
