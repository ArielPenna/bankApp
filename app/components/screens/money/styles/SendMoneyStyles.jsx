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
        backgroundColor:"white",
        width:340,
        height:550,
        borderRadius:15
    },

    mainTitle:{
        color: 'white',
        fontSize: 40,
        marginBottom: 30
    },

    subTitle:{
        color: 'white',
        fontSize: 30,
        marginBottom: 30
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
        width:'100%',
        height: 40,
        backgroundColor: 'white',
        marginBottom: 30,
        fontSize: 20,
        textAlign: 'center'
    },

    appButtonContainer: {
        width: '100%',
        marginBottom: '10px',
        marginTop: '20px',
        elevation: 8,
        backgroundColor: "#f7b700",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 12
    },

    appButtonContainerFalse: {
        width: '100%',
        marginBottom: '10px',
        marginTop: '20px',
        elevation: 8,
        backgroundColor: "#752667",       
        borderRadius: 5,
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
    }
})