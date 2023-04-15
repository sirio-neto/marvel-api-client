import { StyleSheet } from 'react-native';
import commonStyle from '../../../styles/common.style';

export default StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'space-between',
	  ...commonStyle.backgroundPrimary
	},
	title: {
		fontStyle: 'italic',
		...commonStyle.titleLight
	},
	image: {
		height: 400
	}
});