import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
   container:
      { flex: 1 },

   title:
      { textAlign: "center", fontSize: 35, color: "#fff", padding: 5, marginBottom: 10 },

   searchContainer:
      { flexDirection: 'row', backgroundColor: "#fff", borderRadius: 2, width: 327, marginLeft: 21 },
   
   ico:
      { backgroundColor: "#f7b700" },

   inputStyle:
      { flex: 1, marginLeft: 10, fontSize: 25, color: "black" },
   
   btn:
      { width: '90%', marginTop: 15, marginLeft: 18, marginBottom: 10, backgroundColor: "#f7b700", borderRadius: 2, paddingVertical: 10, paddingHorizontal: 12 },

   appButtonText:
      { fontSize: 16, color: "#752667", textAlign: "center", fontWeight: "bold" },

   cardTitle:
      { fontSize: 25 },

   cardText:
      { fontSize: 20, textAlign: "center", color:  "#fff" },

})

export default styles