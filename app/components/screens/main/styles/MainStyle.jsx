import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:
    { flex: 1, width: "100%", height: "100%", alignItems: "center" },

  img:
    { alignSelf: "center", width: 100, height: 100, shadowColor: "#000", shadowOffset: { width: 0, height: 6 }, shadowOpacity: 2, shadowRadius: 4.65 },

  mainTitle:
    { fontSize: 25, marginBottom: 15, color: "#fff", textAlign: "left" },
  
  row:
    { flexDirection: "row", justifyContent: "center", alignItems: "center" }, 
  
  money:
    { color: "#000", marginHorizontal: 25, textAlign: "center", fontSize: 30, marginTop: 5 },

  generalView:
    { backgroundColor: "white", width: "100%", shadowColor: "#000", borderRadius: 8, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 1.30, shadowRadius: 4.65, elevation: 8 },

  top:
    { justifyContent: "flex-start", marginTop: 40 },

  separator:
    { marginVertical: 30 },
  
  margin:
    { margin: 20 },

  income:
    { textAlign: "center", justifyContent: "center", margin: 5, color: "green", fontWeight: "bold" },
  
  outcome:
    { textAlign: "center", justifyContent: "center", margin: 5, color: "red", fontWeight: "bold" },
  
  small:
    { fontSize: 9 },
  
  bigText:
    { fontSize: 30 }

});

export default styles