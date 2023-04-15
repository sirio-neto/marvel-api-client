import { StyleSheet } from 'react-native';
import commonStyles from '../../../styles/common.style';

export default StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		padding: 8,
		marginHorizontal: "auto",
	  ...commonStyles.backgroundPrimary
	},
	contentTitle: {
		...commonStyles.titleLight
	},
	contentText: {
		...commonStyles.fontLight
	},
	contentSession: {
		margin: 8
	},
	imageSession: {
		overflow: 'hidden',
		borderRadius: 8,
		width: 320,
		height: 320
	},
	image: {
		width: '100%',
		height: '100%',
	},
	characterLists: {
		marginTop: 8
	},
	eventsLists: {
		marginTop: 8
	},
	switchToggle: {
		flex: 1,
		alignItems: 'center',
		margin: 8
	}
});