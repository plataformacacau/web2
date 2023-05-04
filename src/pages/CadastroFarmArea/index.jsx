import React, { useState } from "react"
import Layout from "../../components/Layout"
import { StyledCadastro } from "./styles"
import Leaves from "../../assets/leaves.png"
import CustomInput from "../../components/StyledInput"

export default function CadastroFarmArea() {
	const [logged_user, setLoggedUser] = useState(JSON.parse(localStorage.getItem('user')))
	if (logged_user === null) window.location.replace('/login')

	const farm_id = localStorage.getItem('farm_id')
	let area_list = JSON.parse(localStorage.getItem('areas'))
	let farm_areas = area_list.filter((el) => el.user_id == logged_user.id && el.farm_id == farm_id)[0]
	console.log(area_list)

	const [cadastroForm, setCadastroForm] = useState({
		areas_homogenias: "",
		areas_operacionais: "",
		ponto_amostral: "",
	})

	const [errors, setErrors] = useState({
		areas_homogenias: "",
		areas_operacionais: "",
		ponto_amostral: "",
	})
	const [formIsValid, setFormIsValid] = useState(true)

	function handleChange(e) {
		setCadastroForm({ ...cadastroForm, [e.target.name]: e.target.value })
	}

	function handleSubmit(e) {
		e.preventDefault()
		setErrors({
			areas_homogenias: "",
			areas_operacionais: "",
			ponto_amostral: "",
		})

		if (
			!errors.areas_homogenias &&
			!errors.areas_operacionais &&
			!errors.ponto_amostral
		) {
			if (!farm_areas) {
				farm_areas = { user_id: logged_user.id, farm_id: farm_id, content: [], }
				area_list.push(farm_areas)
			}

			farm_areas.content.push({
				id: farm_areas.content.length,
				areas_homogenias: cadastroForm.areas_homogenias,
				areas_operacionais: cadastroForm.areas_operacionais,
				ponto_amostral: cadastroForm.ponto_amostral,
			});

			setCadastroForm({
				areas_homogenias: "",
				areas_operacionais: "",
				ponto_amostral: "",
			});

			area_list = area_list.filter((el) => el.farm_id != farm_id)
			area_list.push(farm_areas)
			localStorage.setItem('areas', JSON.stringify(area_list));
			// alert("Formulário enviado com sucesso!");
		}
	}

	return (
		<Layout header="Início">
			<StyledCadastro>
				<div className="BG">
					<img src={Leaves} alt="background" />
				</div>
				<div className="content">
					<a href="/cadastro/farm">Voltar</a>
					<h1>Cadastre as áreas da sua fazenda</h1>
					<form action="" onSubmit={handleSubmit}>
						<div className="inputGroup">
							<CustomInput
								icon="material-symbols:map-outline"
								name="areas_homogenias"
								type="text"
								id="areas_homogenias"
								placeholder="Áreas Homegênias"
								value={cadastroForm.areas_homogenias}
								onChange={handleChange}
								required
							/>
							{errors.areas_homogenias && <p className="error">{errors.areas_homogenias}</p>}
						</div>

						<div className="inputGroup">
							<CustomInput
								icon="material-symbols:map-outline"
								name="areas_operacionais"
								type="text"
								id="areas_operacionais"
								placeholder="Área Operacional"
								value={cadastroForm.areas_operacionais}
								onChange={handleChange}
								required
							/>
							{errors.areas_operacionais && <p className="error">{errors.areas_operacionais}</p>}
						</div>

						<div className="inputGroup">
							<CustomInput
								icon="material-symbols:location-on-outline"
								name="ponto_amostral"
								type="text"
								id="ponto_amostral"
								placeholder="Ponto_Amostral"
								value={cadastroForm.ponto_amostral}
								onChange={handleChange}
								required
							/>
							{errors.ponto_amostral && <p className="error">{errors.ponto_amostral}</p>}
						</div>

						<button type="submit" disabled={!formIsValid}>
							Cadastrar
						</button>
					</form>
					<p>Lista de Áreas:</p>
					<table>
						<thead>
							<tr>
								<th>Áreas Homogênias</th>
								<th>Áreas Operacionais</th>
								<th>Ponto Amostral</th>
							</tr>
						</thead>
						<tbody>
							{farm_areas && farm_areas.content.length ?
								farm_areas.content.map((item, index) => (
									<tr key={item.id} className={index % 2 ? "td_white" : "td_gray"}>
										<td>{item.areas_homogenias}</td>
										<td>{item.areas_operacionais}</td>
										<td>{item.ponto_amostral}</td>
									</tr>
								))
								:
								<tr><td colSpan="3" className="td_gray">Não há fazendas áreas até o momento!</td></tr>
							}
						</tbody>
					</table>
				</div>
			</StyledCadastro>
		</Layout>
	)
}
