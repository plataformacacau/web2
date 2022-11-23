import React from "react"
import { StyledBotao } from "./styles"

export default function Botao(props) {
	return (
		<StyledBotao className={props.outline && "outline"}>
			{props.children}
		</StyledBotao>
	)
}
