import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  img:
    { width: 50, height: 50, marginLeft: -20 },  
  
  row:
    { flexDirection: "row", justifyContent: "space-evenly" },
  
  amount:
    { fontWeight: "bold", fontSize: 25, marginTop: 5 },
  
  withoutTrans:
    { fontWeight: "bold", fontSize: 45, marginTop: 80, color:'white', marginLeft: 15 },

  container:
    { flex: 1, width: "100%", height: "100%" },
  
  separator:
    { marginVertical: 30 },
  
});
  
export default styles