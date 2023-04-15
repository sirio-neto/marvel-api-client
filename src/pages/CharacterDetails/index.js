import { Text, View, Image, Switch } from 'react-native';
import { useState, useEffect } from 'react';
import { GridContainer, Row, Col } from '../../components/GridLayout';
import { useReadItem, useSaveItem, useRemoveItem } from '../../hooks/useAsyncStorage';

import styles from './styles';
import Loader from '../../components/Loader';
import CardList from '../../components/CardList';
import CollapsedView from '../../components/CollapsedView';
import * as CharacterService from '../../services/CharacterService';

export default function CharacterDetails({ route, navigation }) {
	const { id } = route.params;

	const [favorite, setFavorite] = useState(false);

	const [state, setState] = useState({
		data: [],
		error: false,
		isLoading: true
	});

	const [comics, setComics] = useState({
		data: null,
		error: false,
		isLoading: true
	});

	const [events, setEvents] = useState({
		data: null,
		error: false,
		isLoading: true
	});

	useEffect(() => {
		if (!(id > 0)) {
			setState({
				data: [],
				error: `Identificador informado inválido`,
				isLoading: false
			});

			return;
		}

		getCharacter();
		getIsFavorite();
	}, []);

	const getIsFavorite = () => {
		useReadItem(`favoriteDetails:${id}`)
		.then((item) => {
			const parsedItem = JSON.parse(item);
			const isFavorite = parsedItem ? true : false;
			setFavorite(isFavorite);
		});
	}

	const toggleFavorite = () => {
		const toggleFavorite = !Boolean(favorite);

		if (toggleFavorite) {
			useSaveItem(`favoriteDetails:${id}`, {
				id: id,
				name: state.data.name,
				thumbnail: {
					path: state.data.thumbnail.path,
					extension: state.data.thumbnail.extension
				}
			});
		} else {
			useRemoveItem(`favoriteDetails:${id}`);
		}

		setFavorite(toggleFavorite);
	}

	const getCharacter = () => {
		CharacterService.getById(id)
		.then(response => {
			setState({
				data: response.data.results[0],
				error: false,
				isLoading: false
			});
		})
		.catch(error => {
			setState({
				data: [],
				error: `Ocorreu um erro durante a consulta: ${error}`,
				isLoading: false
			});
		});
	}

	const getCharacterComics = () => {
		if (!comics.data) {
			CharacterService.getListById(id, 'comics')
			.then(response => {
				setComics({
					data: response.data.results,
					error: false,
					isLoading: false
				});
			})
			.catch(error => {
				setState({
					data: [],
					error: `Ocorreu um erro durante a consulta: ${error}`,
					isLoading: false
				});
			});
		}
	}

	const getCharacterEvents = () => {
		if (!events.data) {
			CharacterService.getListById(id, 'events')
			.then(response => {
				setEvents({
					data: response.data.results,
					error: false,
					isLoading: false
				});
			})
			.catch(error => {
				setEvents({
					data: [],
					error: `Ocorreu um erro durante a consulta: ${error}`,
					isLoading: false
				});
			});
		}
	}

	const parseCharacterComics = (data) => {
		return data.map(element => {
			return {
				id: element.id,
				name: element.title,
				thumbnail: {
					path: element.thumbnail.path,
					extension: element.thumbnail.extension
				}
			}
		});
	}

	const EmptyDataContent = (data) =>  (
			<View style={styles.container}>
				{data.error ?
				<Text>{data.error}</Text> :
				<Loader message="Obtendo detalhes, por favor aguarde..."/>}
			</View>
	);

	const ComicsContent = () => {
		if (comics.isLoading || comics.error) {
			return <EmptyDataContent />;
		}

		return <CardList numCols={3} data={parseCharacterComics(comics.data || [])}/>;
	}

	const EventsContent = () => {
		if (events.isLoading || events.error) {
			return <EmptyDataContent />;
		}

		return <CardList numCols={3} data={parseCharacterComics(events.data || [])}/>;
	}

	return (
		(state.isLoading || state.error) ?

		<View style={styles.container}>
			<EmptyDataContent />
		</View> :

		<GridContainer style={styles.container}>
			<Row>
				<Col numCols={4} style={styles.imageSession}>
					<Image
						style={styles.image}
						source={{uri: state.data.thumbnail.path + '.' + state.data.thumbnail.extension}}
					/>
				</Col>
				<Col numCols={8}>
					<Row style={styles.contentSession}>
						<Col>
							<Text style={styles.contentTitle}>Nome do(a) Personagem:</Text>
							<Text style={styles.contentText}>{state.data.name}</Text>
						</Col>
					</Row>
					<Row style={styles.contentSession}>
						<Col>
							<Text style={styles.contentTitle}>Descrição:</Text>
							<Text style={styles.contentText}>{state.data.description || 'Descrição não disponível'}</Text>
						</Col>
					</Row>
					<Row style={styles.switchToggle}>
						<Switch
							trackColor={{ false: "#767577", true: "#81b0ff" }}
							thumbColor={favorite ? "#f5dd4b" : "#f4f3f4"}
							onValueChange={toggleFavorite}
							value={favorite}
						/>
						<Text style={styles.contentTitle}>{favorite ? 'Desfavoritar' : 'Favoritar'}</Text>
					</Row>
				</Col>
			</Row>
			<Row style={styles.characterLists}>
				<Col>
					<CollapsedView
						header='Histórias em Quadrinhos'
						expanded={!comics.data ? false : true}
						onExpand={getCharacterComics}
					>
						<ComicsContent />
					</CollapsedView>
				</Col>
			</Row>
			<Row style={styles.eventsLists}>
				<Col>
					<CollapsedView
						header='Eventos que Aparece'
						expanded={!events.data ? false : true}
						onExpand={getCharacterEvents}
					>
						<EventsContent />
					</CollapsedView>
				</Col>
			</Row>
		</GridContainer>
	);
}