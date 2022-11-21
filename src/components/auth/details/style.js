import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "space-between",
    // backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  containerMain: {
    flex: 1,
  },
  textInput: {
    borderColor: "lightgray",
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  containerButton: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 10,
    marginHorizontal: 20,
    marginTop: 80,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "lightgray",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;
