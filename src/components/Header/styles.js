import { styled } from "@stitches/react"

export const StyledHeader = styled("header", {
	position: "fixed",
	top: 0,
	left: 0,
	width: "100%",
	height: 80,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: "white",
	zIndex: 1000,
	boxShadow: "0 10px 10px rgba(0, 0, 0, 0.5)",

	".headerContainer": {
		display: "flex",
		width: "90%",
		justifyContent: "space-between",
		alignItems: "center",

		".logoContainer": {
			display: "flex",
			img: {
				height: 40,
			},
		},

		nav: {
			display: "flex",
			gap: 40,

			a: {
				color: "var(--text-color)",
				textDecoration: "none",
				padding: "1rem",
				"&.active": {
					fontWeight: "bold",
					borderBottom: "4px solid var(--primary-color)",
				}
			},
		},
	},

	"& + .space": {
		height: 80,
		width: "100%",
		backgroundColor: "red",
	},
})
