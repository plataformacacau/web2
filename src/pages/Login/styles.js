import { styled } from "@stitches/react"

export const StyledLogin = styled("main", {
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

			input: {
				width: "100%",
				height: "max-content",
				padding: "10px 15px",
				borderRadius: 5,
				border: "1px solid #000",
				outline: "none",
				background: "none",
				color: "#000",
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
			},
		},

		a: {
			color: "var(--secondary-color)",
			fontWeight: "bold",
		},
	},
})
