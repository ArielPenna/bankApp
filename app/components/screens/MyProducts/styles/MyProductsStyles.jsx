import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:
    { flex: 1, width: "100%", height: "100%", alignItems: "center" },   
  
  separator: { marginVertical: 30 },
  
  misproductos:
    { flexDirection: "column", flex: 1, justifyContent: "center", marginTop: 150 },  
  
  misproductosrectangulo:
    { alignItems: "center", backgroundColor: "#f7b700", width: 300, padding: 20, margin: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8 },
    
  imgmiscuentas:
    { alignSelf: "center", width: 50, height: 50 },
  
  textmicuentas:
    { fontSize: 14 },

});

export default styles;