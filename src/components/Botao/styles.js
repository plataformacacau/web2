import { styled } from "@stitches/react"

export const StyledBotao = styled("a", {
	backgroundColor: "var(--primary-color)",
	color: "white",
	padding: "1rem 2rem",
	borderRadius: 8,
	border: "none",
	cursor: "pointer",
	fontSize: "1rem",
	transition: "all 300ms ease-out",
	fontWeight: "bold",

	"&:hover": {
		backgroundColor: "var(--primary-color-hover)",
	},

	"&.outline": {
		backgroundColor: "transparent",
		border: "1px solid white",
		color: "white",

		"&:hover": {
			backgroundColor: "white",
			color: "var(--text-color)",
		},
	},
})
