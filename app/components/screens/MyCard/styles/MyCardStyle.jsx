import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {     
    flex:1,   
    width: "100%",
    height: "100%",
    alignContent:"center",    
    justifyContent: "center",
    alignItems: "center"    
  },
  mainView: {     
    flex:1,   
    width: "100%",
    height: "100%",
    alignContent: "flex-start",
    marginTop:5,
    justifyContent: "center",
    alignItems: "center"    
  },
  img:{    
    alignSelf:"center",
    width:300,
    height:188,
    marginTop: 50,
    marginBottom:80,
  },
  mainTitle:{
    fontSize: 24,
    color:"#fff",
    fontWeight:"bold",
    textAlign:"center",
  }, 
  cardNumber: {    
    fontSize: 18,         
    // color:"white",
    zIndex:1,
  },
  dataView: {
    position:"absolute",
    flex:1,
    marginTop: 150,
    marginBottom:0,
    justifyContent:"flex-start",
    alignItems: "center",     
        
    zIndex:1,
  },
  separator: {
    marginVertical: 30,   
  },
  ico:{    
    alignSelf:"center",
    width:50,
    height:50    
  },  
  touch: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#f7b700",
    padding: 10,    
    margin: 10, 
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,   
  }, 

});

export default styles