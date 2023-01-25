import { Icon } from "@iconify/react"
import React from "react"
import { StyledInput } from "./styles"

export default function CustomInput(props) {
	return (
		<StyledInput htmlFor={props.id}>
			<Icon icon={props.icon} width={24} />
			<input
				type={props.type}
				name={props.name}
				id={props.id}
				placeholder={props.placeholder}
				className="input"
				value={props.value}
				onChange={props.onChange}
				required={props.required}
			/>
		</StyledInput>
	)
}
