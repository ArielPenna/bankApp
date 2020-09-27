import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:
    { flex: 1, width: "100%", height: "100%", alignItems: "center" },   
  
  mainTitle:
    { marginTop: 25, fontSize: 30, color: "#fff", textAlign: "center" }, 
  
  separator:
    { marginVertical: 15 }, 
  
  touch:
    { alignItems: "center", backgroundColor: "#f7b700", padding: 10, margin: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8 },
  
  small:
    { fontSize: 9 },
  
  bigText:
    { fontSize: 30 },
  
  misdatos:
    { flexDirection: "column", justifyContent: "center", alignItems: "center" },
  
  misproductosrectangulo:
    { alignItems: "center", backgroundColor: "#f7b700", width: 300, padding: 20, margin: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8 },
  
  imgmiscuentas:
    { alignSelf: "center", width: 50, height: 50 },

  label:
    { fontSize: 18, color: "#f0f3bd" },

  inputR:
    { width: 250, height: 30, padding: 2, margin: 5, marginLeft: 15, borderRadius: 2, backgroundColor: "white", fontSize: 18 },
  
  inputA:
    { width: 250, height: 'auto', padding: 2, margin: 5, marginLeft: 15, borderRadius: 2, backgroundColor: "white", fontSize: 18 },

  adressContainer:
    { flex: 1, flexDirection: 'column', marginBottom: -30 },
  
  streetPrincipal:
    { flexDirection: 'row', justifyContent: 'space-between', marginLeft: 12, marginBottom: 10 },
  
  inputStreet:
    { width: 195, height: 30, padding: 2, margin: 5, borderRadius: 2, backgroundColor: "white", fontSize: 18 },
  
  inputSubStreet:
    { width: 45, height: 30, padding: 2, margin: 5, marginLeft: 5, borderRadius: 2, backgroundColor: "white", fontSize: 18 },
  
  button:
    { backgroundColor: "#f7b700", justifyContent: "space-around", alignItems: "center", borderRadius: 2, height: 35, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8 },
  
  buttonText:
    { color: "#752667", textAlign: "center", justifyContent: "space-around", alignItems: "center", fontWeight: "bold" },
  
  buttonFalse:
    { backgroundColor: "#752667", justifyContent: "space-around", alignItems: "center", borderRadius: 2, height: 35, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8 },
  
  buttonTextFalse:
    { color: "#fff", textAlign: "center", justifyContent: "space-around", alignItems: "center", fontWeight: "bold" }    
});

export default styles;
