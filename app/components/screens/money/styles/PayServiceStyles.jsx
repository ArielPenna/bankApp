import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
   container:
      { flex: 1, width: "100%", height: "100%", alignContent: "center", justifyContent: "center", alignItems: "center" },
   
   containerInput:
      { backgroundColor: "#f7b700", width: 340, height: 444, borderRadius: 2, shadowOpacity: 0.57, shadowRadius: 15.19, elevation: 8 },

   text:
      { fontSize: 28, padding: 22, textAlign: "center" },

   inputs:
      { width: '78%', height: 60, marginLeft: 31, marginTop: 41, borderRadius: 5, backgroundColor: "white", fontSize: 20, textAlign: 'center' },

   btn:
      { width: '90%', marginLeft: 20, marginBottom: 10, marginTop: 40, backgroundColor: "#752667", borderRadius: 5, paddingVertical: 10, paddingHorizontal: 12 },

   appButtonText:
      { color: "#f7b700", fontSize: 22, textAlign: "center" },

   service:
      { marginLeft: 31, borderRadius: 5, width: '78%', height: '40px', borderRadius: 2, paddingLeft: 20 },

   subTitleConfirm:
      { color: '#752667', fontWeight: 'bold', marginTop: 30, marginLeft: 20, fontSize: 22 },
   
   moneyConfirm:
      { color: '#752667', fontWeight: 'bold', marginTop: 30, marginLeft: 20, fontSize: 40 },
   
   confirmData:
      { alignItems: "center" }
})

export default styles