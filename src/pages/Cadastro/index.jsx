import React, { useState } from "react"
import Layout from "../../components/Layout"
import { StyledCadastro } from "./styles"
import Leaves from "../../assets/leaves.png"
import CustomInput from "../../components/StyledInput"
import { checkCPF, organizeCPF } from "../../hooks/cpfHandler"
import { checkPhoneNumber, organizePhoneNumber } from "../../hooks/phoneHandler"

export default function Cadastro() {
	const [CadastroForm, setCadastroForm] = useState({
		fullName: "",
		email: "",
		phone: "",
		cpf: "",
		password: "",
		password2: "",
		terms: false,
	})

	const [errors, setErrors] = useState({
		fullName: "",
		email: "",
		phone: "",
		cpf: "",
		password: "",
		password2: "",
		terms: "",
	})

	const [formIsValid, setFormIsValid] = useState(true)

	function handleChange(e) {
		// if (
		// 	CadastroForm.fullName &&
		// 	CadastroForm.email &&
		// 	CadastroForm.phone &&
		// 	CadastroForm.cpf &&
		// 	CadastroForm.password
		// ) {
		// 	setFormIsValid(true)
		// } else {
		// 	setFormIsValid(false)
		// }

		if (e.target.name === "phone") {
			let phone = organizePhoneNumber(e.target.value)
			setCadastroForm({ ...CadastroForm, phone })
		} else if (e.target.name === "cpf") {
			let cpf = organizeCPF(e.target.value)
			setCadastroForm({ ...CadastroForm, cpf })
		} else {
			setCadastroForm({ ...CadastroForm, [e.target.name]: e.target.value })
		}
	}

	function handleSubmit(e) {
		e.preventDefault()
		setErrors({
			fullName: "",
			email: "",
			phone: "",
			cpf: "",
			password: "",
			password2: "",
			terms: "",
		})

		if (CadastroForm.fullName.split(" ").length < 2) {
			setErrors((prev) => {
				return { ...prev, fullName: "Coloque pelo menos o nome e o sobrenome" }
			})
		} else {
			setErrors((prev) => {
				return { ...prev, fullName: "" }
			})
		}

		if (CadastroForm.phone) {
			let phoneIsValid = checkPhoneNumber(CadastroForm.phone)
			if (!phoneIsValid.valid) {
				setErrors((prev) => {
					return { ...prev, phone: phoneIsValid.message }
				})
			} else {
				setErrors((prev) => {
					return { ...prev, phone: "" }
				})
			}
		}

		if (CadastroForm.cpf) {
			let cpfIsValid = checkCPF(CadastroForm.cpf)
			if (!cpfIsValid.valid) {
				setErrors((prev) => {
					return { ...prev, cpf: cpfIsValid.message }
				})
			} else {
				setErrors((prev) => {
					return { ...prev, cpf: "" }
				})
			}
		}

		if (CadastroForm.password.length < 8) {
			setErrors((prev) => {
				return { ...prev, password: "A senha precisa ter 8 caracteres" }
			})
		} else {
			setErrors((prev) => {
				return { ...prev, password: "" }
			})
		}

		if (!CadastroForm.terms) {
			setErrors((prev) => {
				return { ...prev, terms: "Você precisa aceitar os termos" }
			})
		} else {
			setErrors((prev) => {
				return { ...prev, terms: "" }
			})
		}

		if (
			!errors.fullName &&
			!errors.email &&
			!errors.phone &&
			!errors.cpf &&
			!errors.password &&
			!errors.password2 &&
			!errors.terms
		) {
			alert("Formulário enviado com sucesso!")
		}
	}

	return (
		<Layout header="Início">
			<StyledCadastro>
				<div className="BG">
					<img src={Leaves} alt="background" />
				</div>

				<div className="content">
					<h1>Cadastre-se na plataforma!</h1>
					<form action="" onSubmit={handleSubmit}>
						<div className="inputGroup">
							<CustomInput
								icon="ph:user-circle"
								name="fullName"
								type="text"
								id="fullName"
								placeholder="Nome Completo"
								value={CadastroForm.fullName}
								onChange={handleChange}
								required
							/>
							{errors.fullName && <p className="error">{errors.fullName}</p>}
						</div>

						<div className="inputGroup">
							<CustomInput
								icon="ph:envelope-simple"
								name="email"
								type="email"
								id="email"
								placeholder="Email"
								value={CadastroForm.email}
								onChange={handleChange}
								required
							/>
							{errors.email && <p className="error">{errors.email}</p>}
						</div>

						<div className="inputGroup">
							<CustomInput
								icon="material-symbols:phone-enabled-outline"
								name="phone"
								type="text"
								id="phone"
								placeholder="Telefone"
								value={CadastroForm.phone}
								onChange={handleChange}
							/>
							{errors.phone && <p className="error">{errors.phone}</p>}
						</div>

						<div className="inputGroup">
							<CustomInput
								icon="mdi:user-card-details-outline"
								name="cpf"
								type="text"
								id="cpf"
								placeholder="CPF"
								value={CadastroForm.cpf}
								onChange={handleChange}
							/>
							{errors.cpf && <p className="error">{errors.cpf}</p>}
						</div>

						<div className="inputGroup">
							<CustomInput
								icon="material-symbols:lock-outline"
								name="password"
								type="password"
								id="password"
								placeholder="Senha"
								value={CadastroForm.password}
								onChange={handleChange}
								required
							/>
							{errors.password && <p className="error">{errors.password}</p>}
						</div>

						<span>
							Já tem uma conta?
							<a href="./login">Faça login!</a>
						</span>
						<label htmlFor="terms">
							<input
								type="checkbox"
								name="terms"
								id="terms"
								value={CadastroForm.terms}
								onChange={(e) =>
									setCadastroForm({ ...CadastroForm, terms: e.target.checked })
								}
							/>
							<span>Aceito os termos de serviço</span>
						</label>
						{errors.terms && <p className="error">{errors.terms}</p>}

						<button type="submit" disabled={!formIsValid}>
							Cadastrar
						</button>
					</form>
				</div>
			</StyledCadastro>
		</Layout>
	)
}
