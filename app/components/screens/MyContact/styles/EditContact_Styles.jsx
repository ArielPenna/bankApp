import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container:
		{ flex: 1, alignContent: "center", justifyContent: "center", alignItems: "center" },

	title:
		{ textAlign: "center", fontSize: 35, color: "white", padding: 5, marginBottom: 10 },
	
	input:
		{ width: 250, height: 30, padding: 2, margin: 5, marginLeft: 15, borderRadius: 2, backgroundColor: "white", fontSize: 18 },

	btn:
		{ backgroundColor: "#f7b700", justifyContent: "space-around", alignItems: "center", borderRadius: 2, height: 35, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8 },
  
	appButtonText:
		{ color: "#752667", textAlign: "center", justifyContent: "space-around", alignItems: "center", fontWeight: "bold" },

})

export default styles