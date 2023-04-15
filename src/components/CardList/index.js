import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function CardList({data, numCols, onCardClick}) {
	const Item = ({data}) => (
		<View style={styles.itemContainer}>
			<TouchableOpacity onPress={() => {onCardClick ? onCardClick(data.id) : false}}>
				<Image
					style={styles.image}
					source={{uri: data.thumbnail.path + '.' + data.thumbnail.extension}}
				/>

				<View style={styles.itemContent}>
					<Text style={styles.title}>{data.name}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);

	const renderItem = ({item}) => {
		return <Item data={item} />;
	}

	const EmptyState = () => (
		<View>
			<Text style={styles.emptyStateMessage}>Nenhum resultado encontrado</Text>
		</View>
	);

	return (
		data.length ?

		<FlatList
			numColumns={2}
			data={data || []}
			renderItem={renderItem}
			keyExtractor={(item) => item.id.toString()}
		/>

		:

		<EmptyState />
	);
}