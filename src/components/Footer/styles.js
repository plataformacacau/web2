import { keyframes } from "@stitches/react"
import { styled } from "../../utils/globalStyle"

const Animation = keyframes({
	"0%": { backgroundPositionX: "-100%" },
	"100%": { backgroundPositionX: "100%" },
})

export const StyledFooter = styled("footer", {
	marginTop: "auto",
	background: "var(--secondary-color-hover)",
	color: "white",
	padding: "2em 0",

	p: {
		textAlign: "justify",
	},

	".FooterContent": {
		display: "flex",
		justifyContent: "center",
		alignItems: "flex-end",
		gap: "2em",
		flexWrap: "wrap",

		".logo": {
			height: "50px",
			width: "auto",
		},

		".FooterSection": {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			flex: 1,
			gap: "1em",
			width: "max-content",

			ul: {
				listStyle: "none",
			},

			".realizacao": {
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				gap: 16,

				"@bp2": {
					flexDirection: "column",
					alignItems: "center",
				},
			},

			"&.info": {
				maxWidth: "350px",
			},

			"&.sobre": {
				a: {
					color: "white",

					"&:hover": {
						color: "var(--primary-color)",
						fontWeight: "bold",
					},
				},
			},
		},

		"@bp2": {
			flexDirection: "column",
			alignItems: "center",
		},
	},

	hr: {
		margin: "2em 0",
	},

	".copy": {
		textAlign: "center",
		p: {
			textAlign: "center",
		},
		a: {
			textDecoration: "none",
			position: "relative",
			zIndex: 1,
			display: "inline-block",
			width: "fit-content",
			color: "#5aeb73",
			transition: "all 300ms ease-out",

			"&:after": {
				content: "",
				position: "absolute",
				zIndex: -1,
				left: 0,
				bottom: "-1px",
				width: "100%",
				height: "1px",
				background: "linear-gradient(90deg, #5aeb73,#0000, #5aeb73)",
				backgroundSize: "200% 100%",
				animation: `${Animation} 1s ease-in-out infinite reverse`,
			},

			"&:before": {
				content: "",
				position: "absolute",
				zIndex: -1,
				left: 0,
				bottom: "-1px",
				width: "100%",
				height: "1px",
				backgroundColor: "#5aeb73",
				opacity: 0,
				transition: "all 300ms ease-out",
			},

			"&:hover": {
				color: "white",
				fontWeight: "bold",
				padding: "0 5px",

				"&:after": {
					animationPlayState: "paused",
				},
				"&:before": {
					bottom: "0",
					opacity: 1,
					height: "100%",
				},
			},
		},
	},
})
