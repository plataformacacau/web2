import { styled } from "@stitches/react"

export const StyledEquipe = styled("div", {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	textAlign: "center",
	margin: "50px 0",
	gap: 20,

	".Equipe,.EquipeDev": {
		display: "flex",
		alignItems: "stretch",
		justifyContent: "center",
		flexWrap: "wrap",
		gap: 20,
	},

	".membro": {
		position: "relative",
		width: 250,
		display: "flex",
		flexDirection: "column",
		alignItems: "start",
		backgroundColor: "white",
		borderRadius: 10,
		padding: 20,
		gap: 10,
		boxShadow: "0px 10px 10px rgba(0,0,0,0.1)",

		".foto": {
			width: 200,
			height: 200,
			borderRadius: 10,
			overflow: "hidden",

			img: {
				width: "100%",
				height: "100%",
				objectFit: "cover",
			},
		},

		".cargo": {
			fontSize: "1em",
			fontWeight: "400",
			opacity: 0.8,
		},

		".nome": {
			fontSize: "1.2em",
		},

		".descricao": {
			textAlign: "justify",
			fontSize: "0.9em",
			opacity: 0.8,
		},

		".links": {
			display: "flex",
			gap: 10,

			a: {
				textDecoration: "none",
				color: "var(--secondary-color)",
				fontSize: "1.2em",
				transition: "all 0.2s ease-out",

				"&:hover": {
					color: "var(--primary-color)",
				},
			},
		},
	},

	".Equipe .membro:before,.EquipeDev .membro:before": {
		content: "",
		width: "200vw",
		height: 50,
		position: "absolute",
		zIndex: -1,
		backgroundColor: "var(--primary-color)",
		top: "50%",
		left: "-50vw",
		transform: "translateY(-50%)",
	},
	".EquipeDev .membro:before": {
		backgroundColor: "var(--secondary-color)",
	},
})
