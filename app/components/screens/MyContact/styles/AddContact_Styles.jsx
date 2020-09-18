import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    background:{
        flex: 1,
        alignContent:"center",    
        justifyContent: "center",
        alignItems: "center",    
    },

    container:{
        margin:0
    },

    title:{
        textAlign: "center",
        fontSize:35,
        color:"#fff",
        padding:5,
        marginBottom:10
    },

    label:{
        textAlign: "center",
        fontSize:25,
        color:"#fff",
        padding:5,
        marginBottom:10
    },

    inputs:{
        backgroundColor: 'white',
        height: 40,
        textAlign: 'center'
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
