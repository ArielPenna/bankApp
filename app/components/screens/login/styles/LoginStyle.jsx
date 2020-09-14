import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {     
      flex:1,   
      width: "100%",
      height: "100%",
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
      fontWeight: '8',
      textAlign:"center",
    },
    inputR:{
        width:"94%",
        marginLeft:"5px",
        padding:"10px",
        height:"auto",
        borderRadius:"7px",
        backgroundColor:"white",
        marginBottom:"10px",
        
    },
    label:{
        marginLeft:"15px",
        color:"#f0f3bd",
        fontSize:"25px"
    },

    appButtonContainer: {
      width: '90%',
      marginLeft: '10px',
      marginBottom: '20px',
      borderColor: 'black',
      borderStyle: "solid",
      borderWidth: '2px',
      marginTop: '20px',
      backgroundColor: 'purple',
      elevation: 8,
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 12
    },

    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },

    error:{
        marginLeft:"15px",
        color:"red",
        fontSize:"25px"  
    }
   
  });

export default styles