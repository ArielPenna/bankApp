import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {     
    flex:1,   
    width: "100%",
    height: "100%",
    alignContent:"center",    
    justifyContent: "center",
    alignItems: "center",
    
  },
  img:{    
    alignSelf:"center",
    width:70,
    height:70,    
  },
  mainTitle:{
    fontSize: 12,
    color:"white",    
    textAlign:"left",
  },
  row:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
  }, 
  money:{
    color:"white",
    marginHorizontal:25,
    fontSize:30,
  },
  generalView:{
    backgroundColor:"white",
  },
});

export default styles