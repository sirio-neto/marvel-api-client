import { StyleSheet } from "react-native";
import theme from '../../../styles/theme.style';

export default StyleSheet.create({
	container: {
		flex: 4,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderWidth: 2,
		borderTopWidth: 1,
		borderColor: theme.FONT_COLOR_LIGHT,
		overflow: 'hidden',
		maxHeight: 48,
		minHeight: 48
	},
	searchInput: {
		flex: 3,
		height: '100%',
		padding: 8
	},
	searchButton: {
		flex: 1,
		backgroundColor: theme.BACKGROUND_COLOR_SECONDARY,
		alignItems: 'center',
		padding: 16,
		height: '100%',
	}
});