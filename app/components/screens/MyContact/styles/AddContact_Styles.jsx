import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    background:{
        flex: 1,
        alignContent:"center",    
        justifyContent: "center",
        alignItems: "center",    
    },

    container:{
        backgroundColor:"#ECE8AF",
        width:340,
        height:430,
        borderRadius:15,
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        elevation: 23,
    },

    title:{
        textAlign: "center",
        fontSize:35,
        color:"black",
        padding:5,
        marginBottom:10
    },

    label:{
        textAlign: "center",
        fontSize:25,
        color:"black",
        padding:5,
        marginBottom:10
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

    btn:{
        width: '90%',
        marginTop:15,
        marginLeft: 18,
        marginBottom: 10,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },

    appButtonText:{
        fontSize:20,
        color:"#fff",
        textAlign:'center'
    },
})
