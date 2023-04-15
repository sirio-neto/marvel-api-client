import { StyleSheet } from 'react-native';
import commonStyles from '../../../styles/common.style';

export default StyleSheet.create({
	header: {
		...commonStyles.btnSecondary,
		opacity: 0.5,
		textAlign: 'center'
	},
	body: {
		...commonStyles.backgroundSecondary,
		borderWidth: 1,
		borderTopWidth: 0
	}
});