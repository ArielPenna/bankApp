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
    color:"white",
    fontWeight: '8',
    textAlign:"center",
  } 
});

export default styles