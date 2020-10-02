import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: 
    {display:'flex', justifyContent: 'space-around',flexDirection:'row',
    width:'90%', height: 'auto', marginTop: 20, marginBottom: 10, marginRight: 15,
    position: 'relative', bottom: 0, alignSelf: 'flex-end'},

    buttons: 
    {backgroundColor:"#f7b766", width: 40, height: 40, textAlign: 'center', 
    borderRadius: 5},

    buttonsActive: 
    {backgroundColor:"#f7b700", width: 40, height: 40, textAlign: 'center', 
    borderRadius: 5}
})