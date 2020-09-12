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
      height:"40px",
      borderRadius:"5px",
      backgroundColor:"white",
      marginBottom:"10px"      
   },
   inputDoc:{
      width:"66%",
      height:'40px',
      paddingVertical: '10px',
      padding:"10px",
      borderRadius:"5px",
      backgroundColor:"white",
      marginLeft:'15px' 
   },
   inputDocNum:{
      width:"120%",
      height: '40px',
      paddingVertical:"20px",
      padding:"10px",
      borderRadius:"5px",     
      backgroundColor:"white"    
   },
   docContainer:{
      width:'94%',
      flex:1,
      flexDirection: 'row',
      marginBottom:"10px"
   },
   doc:{
      flex:1,
      flexDirection:'column'
   },
   docN:{
      marginRight:'25px'
   },
   label:{
      marginLeft:"20px",
      color:"#f0f3bd",
      fontSize:"25px"
   },
   btn:{
      marginTop:"50px",
      width:'100%',
      height: '60px',
      backgroundColor: "#DDDDDD"
   },
   error:{
      marginLeft:"20px",
      color:"red",
      fontSize:"25px"  
   },
   birth:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: '10px'
   },
   date:{
      width:'25%',
      height: '40px',
      paddingVertical: '10px',
      borderRadius: '5px'
   }
})

export default styles