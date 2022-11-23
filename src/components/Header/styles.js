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
	padding: "0 2rem",
	backgroundColor: "white",

	".headerContainer": {
		display: "flex",
		width: "100%",
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
			},
		},
	},

	"& + .space": {
		height: 80,
		width: "100%",
		backgroundColor: "red",
	},
})
