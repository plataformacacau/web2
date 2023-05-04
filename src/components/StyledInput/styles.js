import { styled } from "@stitches/react"

export const StyledInput = styled("label", {
	width: "calc(100% - 2em)",
	display: "flex",
	alignItems: "center",
    gap: 10,
	background: "#e3e3e3",
	padding: "0.5em 1em",
	borderRadius: 8,
    fontSize: "1.2em",
	".input": {
        width: "100%",
        fontSize: "1em",
		background: "none",
		border: "none",
		outline: "none",
        color: "var(--text-color)",
	},
})
