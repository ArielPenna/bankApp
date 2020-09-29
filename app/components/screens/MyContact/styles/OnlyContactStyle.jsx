import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

   container:
      { flex: 1, alignContent: "center", justifyContent: "center", alignItems: "center" },

   subTitle:
      { color: 'white', fontSize: 20, marginBottom: 30, marginTop: 10, marginLeft: 50 },

   name:
      { color: "white", fontSize: 35, display: "flex", justifyContent: "center", marginBottom: 25 },

   containerDate:
      { backgroundColor: "white", width: 350, borderRadius: 2, marginBottom: 30, padding: 5 },

   titulo:
      { fontSize: 20, marginVertical: 5, fontFamily: "monospace", fontWeight: "bold", marginLeft: 15, padding: 5 },
   
   btn:
      { backgroundColor: "#f7b700", justifyContent: "space-around", alignItems: "center", borderRadius: 2, height: 35, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8 },
   
   appButtonText:
      { color: "#752667", fontSize: 20, textAlign: "center", justifyContent: "space-around", alignItems: "center", fontWeight: "bold" },
   
   ico:
      { alignSelf: "center", width: 50, height: 50 },
   
   touch:
      { alignItems: "center", flexDirection: "row", backgroundColor: "#f7b700", padding: 10, margin: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8 }, 
   
   small:
      { fontSize: 15, fontWeight: "bold" },

   button:
      { backgroundColor: "#f7b700", justifyContent: "space-around", alignItems: "center", borderRadius: 2, height: 35 },
   
   buttonText:
      { color: "#752667", justifyContent: "space-around", alignItems: "center", fontWeight: "bold" },
   
   separator:
      { marginVertical: 10 },
})

export default styles