import { styled } from "@stitches/react"
import BackgroundImage from "../../assets/leaves_dark.png"

export const StyledLogin = styled("main", {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	minHeight: 'calc(100vh - 60px)',
	backgroundImage: `url(${BackgroundImage})`,
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',

	/*
	'& .BG': {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100%',
		width: '100%',
		zIndex: -1,

		'& img': {
			height: '100%',
			width: '100%',
			objectFit: 'cover',
		},
	},
	*/

	'& .content': {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '2rem',
		background: '#FFFFFF',
		boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.08)',
		borderRadius: '8px',
		maxWidth: '600px',
		width: '80%',

		'& h1': {
			fontSize: '1.5rem',
			fontWeight: 'bold',
			margin: 0,
			marginBottom: '2rem',
			textAlign: 'center',
			color: 'var(--primary-color)',
		},

		'& form': {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			width: '100%',

			'& .inputGroup': {
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
				margin: '0.5rem 0',

				'& .error': {
					fontSize: '0.75rem',
					color: '#D32F2F',
					marginTop: '0.25rem',
					textAlign: 'right',
				},
			},

			'& span': {
				fontSize: '0.875rem',
				textAlign: 'center',
				color: '#5F6368',
				paddingRight: '5px',
				marginTop: '10px',
				gap: '15px',
			},

			'& a': {
				textDecoration: 'none',
				color: 'var(--primary-color)',
				fontWeight: 'bold',
			},

			'& label': {
				display: 'flex',
				alignItems: 'center',
				fontSize: '0.875rem',
				marginTop: '1rem',
				color: '#5F6368',

				'& a': {
					textDecoration: 'none',
					color: 'var(--primary-color)',
					fontWeight: 'bold',
				},
			},

			'& button': {
				marginTop: '1rem',
				background: 'var(--primary-color)',
				color: '#FFFFFF',
				fontSize: '1rem',
				fontWeight: 'bold',
				padding: '0.75rem 1rem',
				border: 'none',
				borderRadius: '4px',
				cursor: 'pointer',

				'&:disabled': {
					background: '#E0E0E0',
					color: '#9E9E9E',
					cursor: 'default',
				},
			},
		},
	},
})
