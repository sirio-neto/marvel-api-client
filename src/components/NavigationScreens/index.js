import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../pages/Home";
import Favorites from "../../pages/Favorites";
import CharacterDetails from "../../pages/CharacterDetails";
import Characters from '../../pages/Characters';
import commonStyles from '../../../styles/common.style';

const Stack = createStackNavigator();
const stackScreenCommon = {
	headerTintColor: commonStyles.titleLight.color,
	headerStyle: {
		...commonStyles.backgroundSecondary
	}
};

export default function NavigationScreens() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="home" component={Home} options={{
				title: 'Home',
				...stackScreenCommon
			}} />
			<Stack.Screen name="favorites" component={Favorites} options={{
				title: 'Favoritos',
				...stackScreenCommon
			}} />
			<Stack.Screen name="characters" component={Characters} options={{
				title: 'Personagens',
				...stackScreenCommon
			}} />
			<Stack.Screen name="characterDetails" component={CharacterDetails} options={{
				title: 'Detalhes',
				...stackScreenCommon
			}} />
		</Stack.Navigator>
	);
}