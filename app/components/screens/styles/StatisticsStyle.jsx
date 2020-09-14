import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  img: {
    alignSelf: "center",
    width: 70,
    height: 70,
  },
  ico: {
    alignSelf: "center",
    width: 50,
    height: 50,
  },
  mainTitle: {
    fontSize: 12,
    color: "white",
    textAlign: "left",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  money: {
    color: "white",
    marginHorizontal: 25,
    fontSize: 30,
  },
  generalView: {
    backgroundColor: "white",
    width: "100%",
  },
  top: {
    justifyContent: "flex-start",
    marginTop: 40,
  },
  separator: {
    marginVertical: 30,
  },
  margin: {
    margin: 20,
  },
  centerText: {
    textAlign: "center",
    justifyContent: "center",
    margin: 5,
  },
  touch: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 10,
    elevation: 1,
  },
  small: {
    fontSize: "9px",
  },
  bigText: {
    fontSize: 30,
  },
});

export default styles;
