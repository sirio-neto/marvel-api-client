import { View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import theme from '../../../styles/theme.style';
import styles from "./styles";

export default function SearchBar({placeholder, onChangeText, value, onSearch}) {
	return(
		<View style={styles.container}>
			<TextInput
				style={styles.searchInput}
				placeholder={placeholder}
				onChangeText={onChangeText}
				returnKeyType={'search'}
				value={value || ''}
				onSubmitEditing={() => {onSearch()}}
			/>

			<TouchableOpacity
				title='Pesquisar'
				onPress={() => {onSearch()}}
				style={styles.searchButton}
			>
				<Icon name='search' color={theme.FONT_COLOR_LIGHT}/>
			</TouchableOpacity>
		</View>
	);
}