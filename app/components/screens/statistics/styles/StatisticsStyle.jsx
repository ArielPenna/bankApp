import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:
    { flex: 1, width: "100%", height: "100%", alignItems: "center" }, 
  
  ico:
    { alignSelf: "center", width: 50, height: 50 },

  mainTitle:
    { fontSize: 12, color: "#fff", textAlign: "left" },

  row:
    { flexDirection: "row", justifyContent: "center", alignItems: "center" },

  generalView:
    { backgroundColor: "white", width: "100%", borderRadius:2, paddingTop:10 },

  top:
    { justifyContent: "flex-start", marginTop: 40 },

  separator:
    { marginVertical: 30 },

  margin:
    { margin: 20 },

  income:
    { textAlign: "center", justifyContent: "center", margin: 5, color:"green", fontWeight: "bold" },
    
  outcome:
    { textAlign: "center", justifyContent: "center", margin: 5, color: "red", fontWeight: "bold" },
  
  touch:
    { alignItems: "center", backgroundColor: "#f7b700", padding: 10, margin: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8 },

  small:
    { fontSize: 9 },

  bigText:
    { fontSize: 30 },

  misproductos:
    { flexDirection: "column", justifyContent: "center", alignItems: "center" },

  misproductosrectangulo:
    { alignItems: "center", backgroundColor: "#f7b700", width: 300, padding: 20, margin: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8 },

  imgmiscuentas:
    { alignSelf: "center", width: 50, height: 50 },

  textmicuentas:
    { fontSize: 14 },

  cvuaccount:
    { margin: 35, backgroundColor: "#FFFFFF", width: 280, height: 150, justifyContent: "space-around", padding: 10, alignItems: "center", textAlign: "left" },

  textaccount:
    { fontSize: 20, fontWeight: "bold" }

});

export default styles;
