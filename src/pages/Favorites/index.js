import { Text, View, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { useGetAllItems, useRemoveAllItems } from '../../hooks/useAsyncStorage';

import styles from './styles';
import Loader from '../../components/Loader';
import CardList from '../../components/CardList';

export default function Favorites({ navigation }) {
	const [state, setState] = useState({
		data: [],
		error: false,
		isLoading: true
	});

	useEffect(() => {
		getListing();
	}, []);

	const getListing = () => {
		useGetAllItems('favoriteDetails')
			.then((items) => {
				const data = parseItemsToList(items);

				setState({
					data: data,
					error: false,
					isLoading: false
				});
			});
	}

	const parseItemsToList = (items) => {
		if (items.length) {
			return items.map((item) => {
				return JSON.parse(item[1]);
			});
		}

		return [];
	}

	const removeAll = () => {
		useRemoveAllItems();

		setState({
			data: [],
			error: false,
			isLoading: false
		});
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
					<Loader message="Obtendo favoritos, por favor aguarde..."/>
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
				<CardList data={state.data || []} onCardClick={navigateToDetails}/>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<Content />
			<Button
				color={'red'}
				title={'Excluir Favoritos'}
				onPress={removeAll}
			/>
		</View>
	);
}