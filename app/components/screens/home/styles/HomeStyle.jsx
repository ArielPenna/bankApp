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
  }, 
  button: {    
    backgroundColor: "#f7b700",
    textAlign: "center",
    justifyContent:"space-around",
    alignItems:"center",    
    borderRadius: 2,
    height: 35, 
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonText: {
    color: "#752667",    
    textAlign: "center",
    justifyContent:"space-around",
    alignItems:"center",
    fontWeight: "bold",      
  }
});

export default styles