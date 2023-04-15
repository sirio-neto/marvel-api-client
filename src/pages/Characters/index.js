import { Text, View } from 'react-native';
import { useState, useEffect } from 'react';

import styles from './styles';
import Loader from '../../components/Loader';
import CardList from '../../components/CardList';
import * as CharacterService from '../../services/CharacterService';
import SearchBar from '../../components/SearchBar';

export default function Characters({ navigation }) {
	const [state, setState] = useState({
		data: [],
		error: false,
		isLoading: true
	});

	useEffect(() => {
		getListing();
	}, []);

	const updateList = (search) => {
		setState({
			data: [],
			error: false,
			isLoading: true
		});

		getListing(search);
	}

	const getListing = (search) => {
		CharacterService.getListing(search)
		.then((response) => {
			const data = response.data && response.data.data ? response.data.data.results : [];

			setState({
				data: data,
				error: false,
				isLoading: false
			});
		})
		.catch(error => {
			setState({
				data: [],
				error: `Ocorreu um erro durante a consulta: ${JSON.stringify(error)}`,
				isLoading: false
			});
		})
	}

	const navigateToDetails = (characterId) => {
		navigation.navigate('characterDetails', {
			id: characterId
		});
	}

	const Content = () => {
		const [search, setSearch] = useState('');

		if (state.isLoading) {
			return (
				<View>
					<Loader message="Obtendo personagens, por favor aguarde..."/>
				</View>
			);
		}

		if (state.error) {
			return (
				<View>
					<Text>{state.error}</Text>
				</View>
			);
		}

		return (
			<View>
				<SearchBar
					placeholder='Busque um Personagem'
					onChangeText={setSearch}
					value={search}
					onSearch={() => {updateList(search)}}
				/>
				<CardList data={state.data || []} onCardClick={navigateToDetails}/>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<Content />
		</View>
	);
}