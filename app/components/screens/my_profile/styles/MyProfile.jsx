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
});

export default styles;
