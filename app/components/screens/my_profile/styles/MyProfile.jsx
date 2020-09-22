import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  }, 
  ico: {
    alignSelf: "center",
    width: 50,
    height: 50,
  },
  mainTitle: {
    fontSize: 30,
    color: "#fff",
    textAlign: "left",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  generalView: {
    backgroundColor: "white",
    width: "100%",
  },
  top: {
    justifyContent: "flex-start",
    marginTop: 40,
  },
  separator: {
    marginVertical: 15,
  },
  margin: {
    margin: 20,
  },
  centerText: {
    textAlign: "center",
    justifyContent: "center",
    margin: 5,
  },
  touch: {
    alignItems: "center",
    backgroundColor: "#f7b700",
    padding: 10,    
    margin: 10, 
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,   
  },
  small: {
    fontSize: 9,
  },
  bigText: {
    fontSize: 30,
  },
  misdatos: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  misproductosrectangulo: {
    alignItems: "center",
    backgroundColor: "#f7b700",
    width: 300,
    padding: 20,    
    margin: 10, 
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,   
  },
  imgmiscuentas: {
    alignSelf: "center",
    width: 50,
    height: 50,
    
  },
  textmisdatos: {
    
    fontSize: 14
  },
  inputR:{
    width:"94%",
    marginLeft:5,
    padding:10,
    height:"auto",
    borderRadius:2,
    backgroundColor:"white",
    marginBottom:10,
    
},
label:{
    marginLeft:15,
    color:"#f0f3bd",
    fontSize:25
},
adressContainer:{
  flex:1,
  flexDirection: 'column',
  marginBottom: -30
},
streetPrincipal:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginLeft:20,
  marginBottom:10
},
inputStreet:{
  width: '60%',
  height: '40px',
  backgroundColor: 'white',
  borderRadius: 2
},
inputSubStreet:{
  width:'30%',
  height: 40,
  backgroundColor:'white',
  borderRadius:2,
  marginRight:20,
  paddingLeft: 10
},
appButtonContainer: {
  width: '90%',
  marginLeft:20,
  marginBottom:10,
  marginTop:20,
  elevation: 8,
  backgroundColor: "#f7b700",
  borderRadius: 2,
  paddingVertical: 10,
  paddingHorizontal: 12
},
appButtonContainerFalse: {
  width: '90%',
  marginLeft:20,
  marginBottom:10,
  marginTop:20,
  elevation: 8,
  backgroundColor: "#752667",       
  borderRadius: 2,
  paddingVertical: 10,
  paddingHorizontal: 12
},
appButtonText: {
  fontSize: 18,
  color: "#752667",
  fontWeight: "bold",
  alignSelf: "center",
  textTransform: "uppercase"
},
appButtonTextFalse: {
  fontSize: 18,
  color: "#fff",
  fontWeight: "bold",
  alignSelf: "center",
  textTransform: "uppercase"
},
subLabel:{
  color:"#f0f3bd",
  fontSize:15,
  marginLeft:20
}
});

export default styles;
