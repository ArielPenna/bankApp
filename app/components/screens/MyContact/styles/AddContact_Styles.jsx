import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	background:
		{ flex: 1, alignContent: "center", justifyContent: "center", alignItems: "center" },

	// container:
	//     { backgroundColor: "#ECE8AF", width: 340, height: 430, borderRadius: 15, shadowOpacity: 0.57, shadowRadius: 15.19, elevation: 23 },

	title:
		{ textAlign: "center", fontSize: 35, color: "white", padding: 5, marginBottom: 10 },

	label:
		{ fontSize: 18, color: "#f0f3bd" },
	
	separator:
		{ marginVertical: 15 }, 

	inputs:
		{ width: 250, height: 30, padding: 2, margin: 5, marginLeft: 15, borderRadius: 2, backgroundColor: "white", fontSize: 18 },
  

	btn:
		{ backgroundColor: "#f7b700", justifyContent: "space-around", alignItems: "center", borderRadius: 2, height: 35, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8 },
  

	appButtonText:
		{ color: "#752667", textAlign: "center", justifyContent: "space-around", alignItems: "center", fontWeight: "bold" },
})
