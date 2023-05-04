import { createStitches } from "@stitches/react"

export const { styled, css } = createStitches({
	media: {
		bp1: "(max-width: 640px)",
		bp2: "(max-width: 800px)",
		bp3: "(max-width: 1024px)",
	},
})
