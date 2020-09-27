import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:
        { flex: 1, width: "100%", height: "100%", alignContent: "center", justifyContent: "center", alignItems: "center" },

    container2:
        { backgroundColor: "#f7b700", justifyContent: "center", width: 340, height: 400, borderRadius: 2, shadowOpacity: 0.57, shadowRadius: 15.19, elevation: 8 },

    inputs:
    { width: 296, height: 55, marginLeft: 17, marginTop: 25, borderRadius: 2, backgroundColor: "white", fontSize: 20, textAlign: 'center' },

    appButtonContainer:
        { width: "90%", height: 54, marginLeft: 20, marginBottom: 10, marginTop: 35, elevation: 8, backgroundColor: "#752667", borderRadius: 2, paddingVertical: 10, paddingHorizontal: 12, shadowOpacity: 0.57, shadowRadius: 8, elevation: 8 },
            
    appButtonContainerFalse:
        { width: "90%", marginLeft: 20, height: 54, marginBottom: 10, marginTop: 35, elevation: 8, backgroundColor: "#f7b700", borderRadius: 2, paddingVertical: 10, paddingHorizontal: 12, shadowOpacity: 0.57, shadowRadius: 8, elevation: 8 },
            
    appButtonText:
        { color: "#f7b700", fontSize: 22, textAlign: "center", fontWeight: "bold" },
    
    appButtonTextFalse:
        { color: "#752667", fontSize: 22, textAlign: "center", fontWeight: "bold" },
            
    subTitleConfirm:
        { color: '#752667', fontWeight: 'bold', marginTop: 30, marginLeft: 20, fontSize: 22 },
    
    moneyConfirm:
        { color: '#752667', fontWeight: 'bold', marginTop: 30, marginLeft: 20, fontSize: 40 },
    
    confirmData:
        { alignItems: "center" }

    
})