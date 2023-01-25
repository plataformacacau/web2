import { styled } from "@stitches/react"

export const StyledCadastro = styled("main", {
	position: "relative",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	gap: 30,
	width: "100%",
	height: "100vh",

	".BG": {
		flex: 1,
		width: "50%",
		height: "100%",
		zIndex: -1,

		img: {
			width: "100%",
			height: "100%",
			objectFit: "cover",
			objectPosition: "left",
		},
	},

	".content": {
		flex: 1,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		gap: 30,

		form: {
			width: "90%",
			maxWidth: 500,
			display: "flex",
			flexDirection: "column",
			gap: 20,

			".flex": {
				width: "100%",
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				gap: 20,
			},

			button: {
				width: "100%",
				height: "max-content",
				padding: "10px 15px",
				fontWeight: "bold",
				fontSize: "1.2em",
				borderRadius: 5,
				border: "none",
				outline: "none",
				background: "var(--primary-color)",
				cursor: "pointer",
				"%:disabled": {
					opacity: 0.5,
					cursor: "not-allowed",
				},
			},

			label: {
				display: "flex",
				flexDirection: "row",
				gap: 10,
			},

			".inputGroup": {
				display: "flex",
				flexDirection: "column",
				gap: 5,
			},

			".error": {
				color: "red",
				background: "rgba(255, 0, 0, 0.1)",
				padding: "5px 15px",
				borderRadius: 5,
				fontWeight: "500",
				fontSize: "0.9em",
			},
		},

		a: {
			color: "var(--secondary-color)",
			fontWeight: "bold",
		},
	},
})
