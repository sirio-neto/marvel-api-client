import { StyleSheet } from "react-native";
import commonStyle from "../../../styles/common.style";

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		padding: 16,
		...commonStyle.backgroundPrimary,
	},
	buttonsContainer: {
		flex: 1,
		justifyContent: 'space-around',
		width: 320,
		padding: 32,
		borderRadius: 8,
		...commonStyle.backgroundTranslucent
	}
});