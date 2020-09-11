import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {     
      flex:1,   
      alignContent:"center",    
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:"#79d8aa",
    },
    img:{    
      alignSelf:"center",
      width:200,
      height:200,
      marginTop: 50,
      marginBottom:80,
    },
    mainTitle:{
      fontSize: 24,
      fontWeight: "8",
      textAlign:"center",
    },
    inputR:{
        width:"94%",
        marginLeft:"5px",
        padding:"10px",
        height:"auto",
        borderRadius:"15px",
        backgroundColor:"white",
        marginBottom:"10px",
        
    },
    label:{
        marginLeft:"15px",
        color:"#f0f3bd",
        fontSize:"25px"
    },

    btn:{
        marginTop:"15px",

    },
    error:{
        marginLeft:"15px",
        color:"red",
        fontSize:"25px"  
    }
   
  });

export default styles