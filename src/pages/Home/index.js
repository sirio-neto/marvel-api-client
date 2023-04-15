import { View, Button } from "react-native";
import styles from "./styles";
import theme from "../../../styles/theme.style";

export default function Home({navigation}) {
	return (
		<View style={styles.container}>
			<View style={styles.buttonsContainer}>
				<Button
					title={'Pesquisar Personagens'}
					onPress={() => {navigation.navigate('characters')}}
					color={theme.BACKGROUND_COLOR_TERCIARY}
				/>
				<Button
					title={'Personagens Favoritos'}
					onPress={() => {navigation.navigate('favorites')}}
					color={theme.BACKGROUND_COLOR_TERCIARY}
			/>
			</View>
		</View>
	);
}