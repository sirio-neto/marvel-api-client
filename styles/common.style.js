import theme from './theme.style';

const commonStyles = {
	titlePrimary:  {
		color: theme.FONT_COLOR_PRIMARY,
		fontSize: theme.FONT_SIZE_LARGE
	},
	titleSecondary:  {
		color: theme.FONT_COLOR_SECONDARY,
		fontSize: theme.FONT_SIZE_LARGE
	},
	titleLight:  {
		color: theme.FONT_COLOR_LIGHT,
		fontSize: theme.FONT_SIZE_LARGE
	},
	fontPrimary:{
		color: theme.FONT_COLOR_PRIMARY,
		fontSize: theme.FONT_SIZE_MEDIUM
	},
	fontSecondary:{
		color: theme.FONT_COLOR_SECONDARY,
		fontSize: theme.FONT_SIZE_MEDIUM
	},
	fontLight:{
		color: theme.FONT_COLOR_LIGHT,
		fontSize: theme.FONT_SIZE_MEDIUM
	},
	backgroundPrimary:{
		backgroundColor: theme.BACKGROUND_COLOR_PRIMARY,
	},
	backgroundSecondary:{
		backgroundColor: theme.BACKGROUND_COLOR_SECONDARY,
	},
	backgroundTranslucent:{
		backgroundColor: 'rgba(52, 52, 52, 0.8)'
	},
	btn: {
		padding: 10,
		borderWidth: 1,
	},
	btnPrimary: {
		padding: 10,
		borderWidth: 1,
		color: theme.FONT_COLOR_PRIMARY,
		backgroundColor: theme.BACKGROUND_COLOR_PRIMARY
	},
	btnSecondary: {
		padding: 10,
		borderWidth: 1,
		color: theme.FONT_COLOR_SECONDARY,
		backgroundColor: theme.BACKGROUND_COLOR_SECONDARY
	}
};

export default commonStyles;