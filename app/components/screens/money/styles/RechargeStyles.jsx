import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
   container:
      { flex: 1, width: "100%", height: "100%", alignContent: "center", justifyContent: "center", alignItems: "center" },

   containerInput:
      { backgroundColor: "#f7b700", width: 340, height: 444, borderRadius: 2, shadowOpacity: 0.57, shadowRadius: 15.19, elevation: 8 },

   text:
      { fontSize: 20, padding: 22 },
   
   text2:
      { paddingLeft: 25, paddingRight: 15, paddingTop: 25, fontSize: 20, marginBottom: 58 },
   
   inputMoney:
      { width: 296, height: 55, marginLeft: 17, marginTop: 25, borderRadius: 2, backgroundColor: "white", fontSize: 20, textAlign: 'center' },
   

   btn:
      { width: '90%', marginLeft: 20, marginBottom: 10, marginTop: -23, backgroundColor: "#752667", borderRadius: 5, paddingVertical: 10, paddingHorizontal: 12 },

   appButtonText:
      { color: "#f7b700", fontSize: 22, textAlign: "center" }
})

export default styles