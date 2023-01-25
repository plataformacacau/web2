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
		maxWidth: "40%",
		height: "100%",
		zIndex: -1,

		img: {
			width: "100%",
			height: "100%",
			objectFit: "cover",
		},

		"@media (max-width: 768px)": {
			maxWidth: 30,
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

				"&:disabled": {
					opacity: 0.5,
					cursor: "not-allowed",
				},
			},
		},

		a: {
			color: "var(--secondary-color)",
			fontWeight: "bold",
		},
	},
})
