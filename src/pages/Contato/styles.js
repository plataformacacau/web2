import { styled } from "@stitches/react"

export const StyledContato = styled("div", {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	textAlign: "center",
	margin: "50px 0",
	gap: 20,

	".contatoWrapper": {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexWrap: "wrap",

		".info": {
			display: "flex",
			flexDirection: "column",
			alignItems: "start",
			textAlign: "start",
			gap: 10,

			".contatos": {
				display: "flex",
				flexDirection: "column",
				alignItems: "start",
				textAlign: "start",
				gap: 10,
				margin: "50px 0",

				".contato": {
					display: "flex",
					alignItems: "center",
					gap: 10,
					color: "#000",
					textDecoration: "none",

					".icon": {
						fontSize: "1.5em",
						width: 50,
						height: 50,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: "50%",
						backgroundColor: "var(--secondary-color)",
						color: "#fff",
					},
				},
			},
		},

		".form": {
			form: {
				display: "flex",
				flexDirection: "column",
				alignItems: "start",
				textAlign: "start",
				gap: 10,

				".nome": {
					display: "flex",
					gap: 5,
				},

				"input, textarea": {
					width: "100%",
					background: "none",
					border: "1px solid #232323",
					borderRadius: 5,
					padding: "5px 10px",
					color: "#000",
				},
			},
		},
	},
})
