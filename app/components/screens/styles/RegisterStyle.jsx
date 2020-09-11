import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
       flex:1,
        backgroundColor:"#02C39A"
    },
    inputR:{
      width:"94%",
      marginLeft:"5px",
      padding:"10px",
      height:"155%",
      borderRadius:"15px",
      backgroundColor:"white",
      marginBottom:"10px"      
    },
    inputDoc:{
      width:"80%",
      height:"300%",
      marginLeft:"15px",
      padding:"10px",
      height:"155%",
      borderRadius:"15px",
      backgroundColor:"white",
      marginBottom:"10px"  
    },
    docContainer:{
      width:'94%',
      height: 'auto',
      flex:1,
      flexDirection: 'row',
      marginBottom:"65px"
    },
    doc:{
      flex:1,
      flexDirection:'column'
    },
    label:{
       marginLeft:"15px",
       color:"#f0f3bd",
       fontSize:"25px"
    },
    btn:{
       marginTop:"15px"
    },
    error:{
      marginLeft:"15px",
      color:"red",
      fontSize:"25px"  
    }
})

export default styles