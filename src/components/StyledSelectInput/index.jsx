import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { StyledSelect } from "./styles";

export default function CustomSelectInput(props) {
	const [searchText, setSearchText] = useState("");

	const filteredOptions = props.options.filter((option) =>
		option.toLowerCase().includes(searchText.toLowerCase())
	);

	return (
		<StyledSelect htmlFor={props.id}>
			<Icon icon={props.icon} width={24} />
			<div className="select-container">
				<input
					type="text"
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
					placeholder="Pesquisar"
				/>
				<select
					name={props.name}
					id={props.id}
					className="select"
					onChange={props.onChange}
					required={props.required}
					value={props.value}
				>
					{filteredOptions.map((option, index) => (
						<option key={index} value={option}>
							{option}
						</option>
					))}
				</select>
			</div>
		</StyledSelect>
	);
}
