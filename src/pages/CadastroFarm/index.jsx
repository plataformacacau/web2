import React, { useEffect, useState } from "react"
import Layout from "../../components/Layout"
import { StyledCadastro } from "./styles"
import Leaves from "../../assets/leaves.png"
import CustomInput from "../../components/StyledInput"
import CustomSelect from "../../components/StyledSelect"

export default function CadastroFarm() {
	const [logged_user, setLoggedUser] = useState(JSON.parse(localStorage.getItem('user')))
	if (logged_user === null) window.location.replace('/login')

	let farm_list = JSON.parse(localStorage.getItem('farms'))
	let user_farms = farm_list.find((el) => el.user_id == logged_user.id)

	const [cadastroForm, setCadastroForm] = useState({
		name: "",
		estado: "Bahia",
		municipio: "",
		referencia: "",
		latitude: "",
		length: "",
	})

	const estados = [
		"Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins",];

	const [errors, setErrors] = useState({
		name: "",
		estado: "",
		municipio: "",
		referencia: "",
		latitude: "",
		length: "",
	})


	const qtd_data = JSON.parse(localStorage.getItem('qtd_farms_data'))
	const [qtd_farms, setQtdFarms] = useState(qtd_data[0])
	const [qtd_setted_farms, setQtdSettedFarms] = useState(qtd_data[1])

	const [formIsValid, setFormIsValid] = useState(false)
	const [addFarm, setAddFarm] = useState(qtd_farms > 0 ? true : false)

	const [registration_notice, setRegistrationNotice] = useState("");

	function handleChange(e) {
		setCadastroForm({ ...cadastroForm, [e.target.name]: e.target.value })
		enableSave()
	}

	useEffect(() => enableSave())

	function setTotalQtdFarms(e) {
		setQtdFarms(e.target.value)
	}

	useEffect(() => {
		localStorage.setItem('qtd_farms_data', JSON.stringify([qtd_farms, qtd_setted_farms]))
	}, [qtd_farms])

	function enableSave() {
		const form_sit = Object.entries(cadastroForm)
			.filter(([key]) => key !== 'referencia')
			.map(([key, value]) => value.length > 0)
			.every((isValid) => isValid)
		setFormIsValid(form_sit)
	}

	function handleSubmit(e) {
		e.preventDefault()

		if (!addFarm) {
			setAddFarm(true)
			return;
		}

		setErrors({
			name: "",
			estado: "",
			municipio: "",
			referencia: "",
			latitude: "",
			length: "",
		})

		//verificar erros de input

		if (!user_farms) {
			user_farms = { user_id: logged_user.id, content: [], }
			farm_list.push(user_farms)
		}

		user_farms.content.push({
			id: user_farms.content.length,
			name: cadastroForm.name,
			estado: "",
			municipio: "",
			referencia: "",
			address: cadastroForm.address,
			latitude: cadastroForm.latitude,
			logitude: cadastroForm.length,
		});

		setCadastroForm({
			name: "",
			estado: cadastroForm.estado,
			municipio: cadastroForm.municipio,
			referencia: "",
			latitude: "",
			length: "",
		});

		farm_list = farm_list.filter((el) => el.user_id != logged_user.id)
		farm_list.push(user_farms)
		localStorage.setItem('farms', JSON.stringify(farm_list))
		setQtdSettedFarms(qtd_setted_farms + 1)
		// setStorageQtdData()
		setRegistrationNotice("Fazenda cadastrada com sucesso")
		// setTimeout(function () { setRegistrationNotice("") }, 3000)
		// alert("Fazenda cadastrada com sucesso!")

	}

	function loadFarm(e) {
		let form_id = e.target.value
		localStorage.setItem('farm_id', form_id)
		window.location.href = '/cadastro/area/'
	}

	function savedAdvice() {
		console.log(qtd_setted_farms + "  " + qtd_farms)
		if (qtd_farms - qtd_setted_farms == -1) window.location.replace('/logged-user')
		else setRegistrationNotice("")
	}

	return (
		<Layout header="Início">
			<StyledCadastro>
				<div className="container">
					{registration_notice.length ?
						<span className="savedAdivice">
							<h1>Fazenda Salva com Sucesso!</h1>
							<button onClick={savedAdvice}>Próximo</button>
						</span>
						:
						<div className="content">
							{!addFarm ?
								<h1>Cadastre suas Fazendas</h1>
								:
								<h1>Cadastre a Fazenda #{qtd_setted_farms}</h1>
							}
							<p className="savedFarm">{registration_notice}</p>
							<form action="" onSubmit={handleSubmit}>
								{!addFarm ?
									<div id="qtd_farms_input" className="inputGroup">
										<label htmlFor="qtd_farms">Quantas fazendas você deseja cadastrar?</label>
										<CustomInput
											icon="material-symbols:123"
											name="qtd_farms"
											type="number"
											step="1"
											min="1"
											id="qtd_farms"
											placeholder="Quantidade de Fazendas"
											value={qtd_farms}
											onChange={setTotalQtdFarms}
											required
										/>
										{qtd_farms < 0 && <p className="error">A quantidade deve ser maior que 0</p>}
									</div>
									:
									<div id="others-inputs">
										<p className="leftFarmsAlert"> Falta(m) cadastrar {qtd_farms - qtd_setted_farms + 1} fazenda(s) </p>
										<div className="inputGroup">
											<CustomInput
												icon="material-symbols:person-pin-circle-outline"
												name="name"
												type="text"
												id="name"
												placeholder="Nome da Fazenda"
												value={cadastroForm.name}
												onChange={handleChange}
												required
											/>
											{errors.name && <p className="error">{errors.name}</p>}
										</div>

										<div className="inputGroup">
											<div className="gps">
												<CustomInput
													icon="material-symbols:near-me-outline"
													name="latitude"
													type="number"
													step="1"
													id="latitude"
													placeholder="Latitude"
													value={cadastroForm.latitude}
													onChange={handleChange}
													required
												/>
												{errors.latitude && <p className="error">{errors.latitude}</p>}

												<CustomInput
													icon="material-symbols:near-me-outline"
													name="length"
													type="number"
													step="1"
													id="length"
													placeholder="Longitude"
													value={cadastroForm.length}
													onChange={handleChange}
													required
												/>
												{errors.length && <p className="error">{errors.length}</p>}
											</div>
										</div>

										<label htmlFor="estado">Campos de endereço</label>
										<div className="inputGroup">
											<CustomSelect
												icon="material-symbols:location-on-outline"
												name="estado"
												id="estado"
												value={cadastroForm.estado}
												onChange={handleChange}
												required
												options={estados}
												placeholder="Selecione o estado"
											/>
											{errors.estado && <p className="error">{errors.estado}</p>}
										</div>
										<div className="inputGroup">
											<CustomInput
												icon="material-symbols:location-on-outline"
												name="municipio"
												type="text"
												id="municipio"
												placeholder="Município"
												value={cadastroForm.municipio}
												onChange={handleChange}
												required
											/>
											{errors.municipio && <p className="error">{errors.municipio}</p>}
										</div>
										<div className="inputGroup">
											<CustomInput
												icon="material-symbols:location-on-outline"
												name="referencia"
												type="text"
												id="referencia"
												placeholder="Ponto de referência"
												value={cadastroForm.referencia}
												onChange={handleChange}
											/>
											{errors.referencia && <p className="error">{errors.referencia}</p>}
										</div>

									</div>
								}
								{!addFarm ?
									<span>
										<button className="skipButton" type="button" onClick={() => { window.location.href = "/logged-user" }}>
											Pular etapa
										</button>

										<button type="submit" disabled={qtd_farms < 1}>
											Próximo
										</button>
									</span>
									:
									<button type="submit" disabled={!formIsValid}>
										Cadastrar Fazenda
									</button>
								}
							</form>
						</div>
					}
				</div>
			</StyledCadastro >
		</Layout >
	)
}
