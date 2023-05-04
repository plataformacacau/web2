import { styled } from "@stitches/react"

export const StyledMain = styled("main", {
    position: "relative",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	gap: 30,
	height: "100vh",
	color: "white",

	p: {
		maxWidth: "800px",
		textAlign: "center",
	},

    ".botoes":{
        display: "flex",
        gap: 20,
    },

	".BG": {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		zIndex: -1,

        img:{
            width: "100%",
            height: "100%",
            objectFit: "cover",
        }
	},
})
