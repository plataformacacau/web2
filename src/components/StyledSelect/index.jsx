import { Icon } from "@iconify/react"
import React from "react"
import { StyledSelect } from "./styles"

export default function CustomSelect(props) {
	return (
		<StyledSelect htmlFor={props.id}>
			<Icon icon={props.icon} width={24} />
			<select
				name={props.name}
				id={props.id}
				className="select"
				onChange={props.onChange}
				required={props.required}
				value={props.value}
			>
				{props.options.map((option, index) => (
					<option key={index} value={option}>
						{option}
					</option>
				))}
			</select>
		</StyledSelect>
	)
}