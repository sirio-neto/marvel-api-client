import { StyleSheet } from 'react-native';
import commonStyles from '../../../styles/common.style';

export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 32
	},
	title: {
		...commonStyles.fontLight,
		marginRight: 8,
	}
});
