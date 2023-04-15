import styles from './styles';
import { View } from 'react-native';

export const GridContainer = ({numCols, children, style}) => (
	<View style={[{flex: numCols || 12} , style]}>{children}</View>
);

export const Row = ({children, style}) => (
	<View style={[styles.row, style]}>{children}</View>
);

export const Col = ({numCols, children, style}) => (
	<View style={[{flex: numCols || 12} , style]}>{children}</View>
);