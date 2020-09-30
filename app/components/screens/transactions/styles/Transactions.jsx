import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  img:
    { width: 50, height: 50 },  
  
  row:
    { flexDirection: "row", justifyContent: "space-evenly" },
  
  amount:
    { fontWeight: "bold", fontSize: 25, marginTop: 5 },
  
  container:
    { flex: 1, width: "100%", height: "100%" },
  
  separator:
    { marginVertical: 30 },
  
});
  
export default styles