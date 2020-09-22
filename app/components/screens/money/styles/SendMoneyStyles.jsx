import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {     
        flex:1,   
        width: "100%",
        height: "100%",
        alignContent:"center",    
        justifyContent: "center",
        alignItems: "center",    
    },

    containerInputs:{
        backgroundColor:"#ECE8AF",
        width:340,
        height:550,
        borderRadius:15,
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        elevation: 23,
    },

    mainTitle:{
        color: 'white',
        fontSize: 40,
        marginBottom: 30
    },

    subTitle:{
        color: 'black',
        marginTop:35,
        marginLeft:20,
        fontSize:30,
        marginBottom:30
    },
    
    iconContainer:{
        width: '100%',
        height: 100,
        alignContent: 'center'
    },

    icon:{
        backgroundColor: 'black'
    },

    inputs:{
        width:296,
        height:55,
        marginLeft: 17,
        borderRadius: 15,
        marginBottom: 30,
        backgroundColor:"#8F958B",
        fontSize: 20,
        textAlign: 'center',
    },

    appButtonContainer: {
        width: "87%",
        height: 54,
        marginLeft: 20,
        marginBottom: 10,
        marginTop: 35,
        elevation: 8,
        backgroundColor: "#f7b700",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 12,
        shadowOpacity: 0.57,
        shadowRadius: 8,
        elevation: 23,
    },

    appButtonContainerFalse: {
        width: "87%",
        marginLeft: 20,
        height: 54,
        marginBottom: '10px',
        marginTop: 35,
        elevation: 8,
        backgroundColor: "#752667",       
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 12,
        shadowOpacity: 0.57,
        shadowRadius: 8,
        elevation: 23,
    },

    appButtonText: {
        fontSize: 18,
        marginTop:5,
        color: "#752667",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },

    appButtonTextFalse: {
        fontSize: 18,
        color: "#fff",
        marginTop:5,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    containerConfirm:{
        backgroundColor:"#ECE8AF",
        width:340,
        height:436,
        borderRadius:15,
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        elevation: 23,
    },

    subTitleConfirm:{
        color: 'black',
        fontWeight:'bold',
        marginTop:30,
        marginLeft:20,
        fontSize:30,
    }
})