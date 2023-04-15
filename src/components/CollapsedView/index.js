import { useState } from 'react';
import { Text, View } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';

import styles from './styles';

export default function CollapsedView({header, children, onExpand, expanded}) {
	const [isExpanded, setIsExpanded] = useState(expanded || false);

	if (isExpanded) {
		onExpand();
	}

	return (
		<View>
			<Collapse
				isExpanded={isExpanded}
				onToggle={(isExp) => setIsExpanded(isExp)}
			>
				<CollapseHeader>
					<View>
						<Text style={styles.header}>{header}</Text>
					</View>
				</CollapseHeader>
				<CollapseBody style={styles.body}>
					{children}
				</CollapseBody>
			</Collapse>
		</View>
	);
}