import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  
  container:
    { flex: 1, width: "100%", height: "100%", alignContent: "center", justifyContent: "center", alignItems: "center" },

  img:
    { alignSelf: "center", width: 200, height: 200, marginTop: 50, marginBottom: 80 },

  mainTitle:
    { fontSize: 24, fontWeight: "bold", textAlign: "center" },

  inputR:
    { width: "94%", marginLeft: 5, padding: 10, height: "auto", borderRadius: 2, backgroundColor: "white", marginBottom: 10 },

  label:
    { marginLeft: 15, color: "#f0f3bd", fontSize: 25 },

  btn:
    { marginTop: 15 },

  error:
    { marginLeft: 15, color: "red", fontSize: 25 },

  button:
    { backgroundColor: "#f7b700", justifyContent: "space-around", alignItems: "center", borderRadius: 2, height: 35, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8 },

  buttonText:
    { color: "#752667", textAlign: "center", justifyContent: "space-around", alignItems: "center", fontWeight: "bold" },

  buttonFalse:
    { backgroundColor: "#752667", justifyContent: "space-around", alignItems: "center", borderRadius: 2, height: 35, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8 },
  
  buttonTextFalse:
    { color: "#fff", textAlign: "center", justifyContent: "space-around", alignItems: "center", fontWeight: "bold" }   
  });

export default styles