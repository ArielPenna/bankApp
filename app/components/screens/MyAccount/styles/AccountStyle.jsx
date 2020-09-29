import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:
    { flex: 1, width: "100%", height: "100%", alignItems: "center" }, 
  
  misproductos:
    { flexDirection: "column", flex: 1, justifyContent: "center", marginTop: 150 }, 
  
  ico:
    { alignSelf: "center", width: 50, height: 50 },
  
  row:
    { flexDirection: "row", justifyContent: "center", alignItems: "center" },
  
  touch:
    { alignItems: "center", backgroundColor: "#f7b700", padding: 10, margin: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8 },
  
  small:
    { fontSize: 9 },

  cvuaccount:
    { margin: 30, backgroundColor: "#FFFFFF", width: 280, height: 150, justifyContent: "space-around", padding: 10, alignItems: "center", textAlign: "left", borderRadius: 2 },
  
  textaccount:
    { fontSize: 20, fontWeight: "bold" },
  
  mainView:
    { flexDirection: "column", flex: 1, justifyContent: "center", marginTop: 20 }, 
  
});

export default styles;
