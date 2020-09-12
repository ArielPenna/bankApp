import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
      flex:1,
      width:"100%",
      heigth:"100%",
      justifyContent:"center",
      alignContent:"center",
   },
   inputR:{
      width:"90%",
      marginLeft:"20px",
      marginRight:"15px",
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
      marginBottom:"65px",      
   },
   doc:{
      flex:1,
      flexDirection:'column'
   },
   label:{
      marginLeft:"20px",
      color:"#f0f3bd",
      fontSize:"25px"
   },
   btn:{
      marginTop:"15px",
      width:'100%',
      height: '60px',
      backgroundColor: "#DDDDDD"
   },
   error:{
      marginLeft:"20px",
      color:"red",
      fontSize:"25px"  
   }
})

export default styles