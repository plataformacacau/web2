import { keyframes } from "@stitches/react"
import { styled } from "../../utils/globalStyle"

const GrowUp = keyframes({
	"0%": { transform: "var(--transform) scale(1)" },
	"50%": { transform: "var(--transform) scale(1.2)" },
	"100%": { transform: "var(--transform) scale(1)" },
})

export const StyledSobre = styled("div", {
	main: {
		height: "70vh",
		display: "flex",
		alignItems: "center",
		color: "white",

		".info": {
			maxWidth: "500px",
			display: "flex",
			flexDirection: "column",
			alignItems: "start",
			justifyContent: "center",
			gap: "1rem",

			h1: {
				lineHeight: "1.2em",
				strong: {
					position: "relative",
					display: "inline-block",
					zIndex: 1,
					"&:after": {
						content: '""',
						position: "absolute",
						zIndex: "-1",
						display: "block",
						bottom: "-5px",
						width: "105%",
						height: "0.5em",
						transform: "translateX(-2.5%)",
						background: "var(--secondary-color)",
					},
				},
			},
		},

		".mainImage": {
			position: "absolute",
			top: 80,
			left: 0,
			right: 0,
			height: "70vh",
			zIndex: -1,

			img: {
				width: "100%",
				height: "100%",
				objectFit: "cover",
				objectPosition: "bottom",
			},
		},
	},

	section: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 100,

		h1: {
			marginBottom: "2rem",
			strong: {
				color: "var(--primary-color)",
			},
		},

		".contentSobre": {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			gap: "2rem",

			".text": {
				display: "flex",
				flexDirection: "column",
				gap: "1rem",
			},

			".image": {
				position: "relative",
				filter: "drop-shadow(0 10px 15px #0004)",

				"&:before": {
					"--delay": "-0.5s",
					content: '""',
					position: "absolute",
					top: 0,
					left: 0,
					"--transform": "translate(-50%, -50%)",
					width: 200,
					height: 200,
					borderRadius: "50%",
					border: "15px solid var(--secondary-color)",
					opacity: 0.5,
					transition: "all 0.3s ease",
					animation: `${GrowUp} 3s var(--delay) ease-in-out infinite`,
				},

				"&:after": {
					"--delay": "0s",
					content: '""',
					position: "absolute",
					top: 0,
					left: 0,
					"--transform": "translate(-50%, -50%)",
					width: 100,
					height: 100,
					borderRadius: "50%",
					border: "15px solid var(--secondary-color)",
					opacity: 0.5,
					transition: "all 0.3s ease",
					animation: `${GrowUp} 3s var(--delay) ease-in-out infinite`,
				},
			},

			"@bp3": {
				flexDirection: "column",
			},
		},

		".listaFuncionalidades": {
			display: "flex",
			flexWrap: "wrap",
			gap: "1rem",
			justifyContent: "center",

			".funcionalidade": {
				display: "flex",
				flexDirection: "column",
				alignItems: "start",
				justifyContent: "start",
				gap: "1rem",

				".icon": {
					width: 80,
					height: 80,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					borderRadius: "50%",
					background: "var(--secondary-color)",
					color: "white",
					fontSize: "2rem",
				},

				".text": {
					width: "100%",
					maxWidth: 350,
					display: "flex",
					flexDirection: "column",
					gap: "1rem",

					".division": {
						width: "60%",
						height: 3,
						background: "var(--secondary-color)",
					},

					p: {
						opacity: 0.7,
					},
				},
			},
		},

		".aplicativo": {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",

			".text": {
				width: "60%",
				display: "flex",
				flexDirection: "column",
				gap: "1rem",

				h1: {
					marginBottom: 0,
				},

				strong: {
					color: "var(--primary-color)",
				},
			},

			".image": {
				height: 450,
				position: "relative",

				img: {
					width: "100%",
					height: "100%",
					objectFit: "cover",
				},

				".circle": {
					"--delay": "calc(-0.5s * var(--index))",
					"--width": "calc(150px * var(--index))",
					position: "absolute",
					top: "50%",
					left: "50%",
					zIndex: -1,
					"--transform": "translate(-50%, -50%)",
					width: "var(--width)",
					height: "var(--width)",
					borderRadius: "50%",
					background: "var(--secondary-color)",
					opacity: 0.2,
					transition: "all 0.3s ease",
					animation: `${GrowUp} 3s var(--delay) ease-in-out infinite`,
				},
			},
		},

		".integracao": {
			display: "flex",
			flexDirection: "column",
			width: "100%",
			alignItems: "center",
			gap: "1rem",

			".integracaoIcons": {
				position: "relative",
				zIndex: 1,
				width: "75%",
				display: "flex",
				justifyContent: "space-between",

				".integracaoIcon": {
					width: 90,
					height: 90,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					borderRadius: "50%",
					background: "#e5e5e5",
					color: "var(--secondary-color)",
					border: "4px solid var(--secondary-color)",
					fontSize: "2.5rem",
					boxShadow: "0 0 20px rgba(76,109,51,0.4)",
				},

				"&:after": {
					content: '""',
					position: "absolute",
					width: "calc(100% - 100px)",
					height: "30%",
					background:
						"linear-gradient(90deg, var(--secondary-color), var(--secondary-color-light))",
					zIndex: -1,
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
				},
			},

			".integracaoTexts": {
				width: "100%",
				display: "flex",
				justifyContent: "space-evenly",
				alignItems: "start",

				".integracaoText": {
					width: "30%",
					display: "flex",
					flexDirection: "column",
					gap: "1rem",
					alignItems: "center",
					justifyContent: "center",

					p: {
						textAlign: "justify",
					},
				},
			},

			"@bp2": {
				flexDirection: "row",
				alignItems: "stretch",

				".integracaoIcons": {
					flexDirection: "column",
					width: "unset",
					// height: "100%",
					flexGrow: 1,

					"&:after": {
						content: '""',
						width: "30%",
						height: "calc(100% - 100px)",
						background:
							"linear-gradient(90deg, var(--secondary-color), var(--secondary-color-light))",
						zIndex: -1,
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
					},
				},

				".integracaoTexts": {
					flexDirection: "column",
					gap: "2rem",

					".integracaoText": {
						width: "100%",
						gap: "0.1rem",
						alignItems: "start",
					},
				},
			},
		},
	},
})
