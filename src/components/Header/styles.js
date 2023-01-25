import { styled } from "@stitches/react"

export const StyledHeader = styled("header", {
	position: "fixed",
	top: 0,
	left: 0,
	width: "100%",
	minHeight: 60,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: "white",
	zIndex: 1000,
	boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",

	".headerContainer": {
		position: "relative",
		display: "flex",
		width: "90%",
		justifyContent: "space-between",
		alignItems: "center",
		overflowX: "auto",
		"&.mobileHeader": {
			overflowX: "unset",
		},

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
				},
			},
		},

		".hamburgerMenu": {
			position: "relative",
			width: 30,
			height: 20,
			cursor: "pointer",
			span: {
				position: "absolute",
				width: "100%",
				height: 4,
				top: 0,
				background: "var(--text-color)",
				borderRadius: 25,
				transition: "all 0.3s ease",
				"&:nth-child(1)": {
					top: 0,
				},
				"&:nth-child(2)": {
					top: "50%",
					transform: "translateY(-50%)",
				},
				"&:nth-child(3)": {
					bottom: 0,
					top: "unset",
				},
			},

			"&.show": {
				span: {
					"&:nth-child(1)": {
						top: "50%",
						transform: "translateY(-50%) rotate(-45deg)",
					},
					"&:nth-child(2)": {
						opacity: 0,
						transform: "translateX(100%) scale(0.1)",
					},
					"&:nth-child(3)": {
						bottom: "50%",
						transform: "translateY(50%) rotate(45deg)",
					},
				},
			},
		},
		".mobileNav": {
			position: "absolute",
			top: 60,
			right: -200,
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			gap: 40,

			width: "max-content",
			height: "max-content",
			backgroundColor: "white",
			zIndex: 1000,

			borderRadius: 10,
			padding: "1rem",
			boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
			transition: "all 0.3s ease",

			"&.show": {
				right: 0,
			},

			nav: {
				flexDirection: "column",
				alignItems: "center",
			},
		},
	},

	"& + .space": {
		height: 60,
		width: "100%",
		// backgroundColor: "red",
	},
})
