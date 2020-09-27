import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

   container:
      { flex: 1, width: "100%", height: "100%", alignContent: "center", justifyContent: "center", alignItems: "center" },

   container2:
      { backgroundColor: "#f7b700", width: 340, height: 444, borderRadius: 2, shadowOpacity: 0.57, shadowRadius: 15.19, elevation: 8 },

   text:
      { fontSize: 20, padding: 22 },
   
   text2:
      { paddingLeft: 25, paddingRight: 15, paddingTop: 25, fontSize: 20, marginBottom: 58 },

   numValidation:
      { flex: 1, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "black", color: "#fff", fontSize: 45 },

   btn:
      { width: '90%', marginLeft: '20px', marginBottom: '10px', marginTop: -23, backgroundColor: "#752667", borderRadius: 5, paddingVertical: 10, paddingHorizontal: 12 },

   appButtonText:
      { color: "#f7b700", fontSize: 22, textAlign: "center" }

})

export default styles