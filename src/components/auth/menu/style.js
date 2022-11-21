import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "blue",
  },
  containerMain: {
    flex: 1,
    padding: 30,
    // backgroundColor: "blue",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 25,
    color: "darkslategray",
    textAlign: "center",
  },
  buttonProvider: {
    borderColor: "lightgray",
    borderWidth: 1,
    borderStyle: "solid",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonProviderText: {
    paddingRight: 20,
    // borderStyle: "solid",
    // borderWidth: 1,
    // borderColor: "green",
  },
  containerBottomButton: {
    backgroundColor: "ghostwhite",
    alignItems: "center",
    padding: 20,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "lightgray",
  },
  bottomButtonText: {
    fontWeight: "bold",
    color: "red",
  },
});

export default styles;
