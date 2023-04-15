import { ActivityIndicator, View, Text } from 'react-native';
import theme from '../../../styles/theme.style';
import Overlay from '../Overlay';
import styles from './styles';

export default function Loader({message, size, color}) {
	const defaultLoaderConfig = {
		size: 'small',
		color: theme.FONT_COLOR_LIGHT,
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{ message || 'Por favor aguarde...'}</Text>
			<ActivityIndicator
				size={size || defaultLoaderConfig.size}
				color={color || defaultLoaderConfig.color}
			/>
			<Overlay />
		</View>
	);
}