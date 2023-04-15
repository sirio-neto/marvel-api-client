import { StyleSheet } from 'react-native';
import commonStyle from '../../../styles/common.style';
import theme from '../../../styles/theme.style';

export default StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'space-between',
	  ...commonStyle.backgroundPrimary
	},
	itemContainer: {
		flexGrow: 1,
		width: '40%',
		borderWidth: 0.5,
		borderColor: theme.FONT_COLOR_PRIMARY,
		borderRadius: 8,
		overflow: 'hidden',
		margin: 8,
	},
	itemContent: {
		position: 'absolute',
		padding: 8,
		bottom: 0,
		width: '100%',
		textAlign: 'center',
		...commonStyle.backgroundTranslucent,
	},
	title: {
		fontStyle: 'italic',
		...commonStyle.titleLight
	},
	image: {
		height: 400
	},
	emptyStateMessage: {
		textAlign: 'center',
		marginVertical: 48,
		...commonStyle.titleLight
	}
});