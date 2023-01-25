import React, { useState } from "react"
import Layout from "../../components/Layout"
import { StyledCadastro } from "./styles"
import Leaves from "../../assets/leaves.png"
import CustomInput from "../../components/StyledInput"
import { checkCPF, organizeCPF } from "../../hooks/cpfHandler"
import { checkPhoneNumber, organizePhoneNumber } from "../../hooks/phoneHandler"

export default function Cadastro() {
	const [cadastroForm, setCadastroForm] = useState({
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
		terms: "",
	})

	const [formIsValid, setFormIsValid] = useState(true)

	function handleChange(e) {
		if (e.target.name === "phone") {
			let phone = organizePhoneNumber(e.target.value)
			setCadastroForm({ ...cadastroForm, phone })
		} else if (e.target.name === "cpf") {
			let cpf = organizeCPF(e.target.value)
			setCadastroForm({ ...cadastroForm, cpf })
		} else {
			setCadastroForm({ ...cadastroForm, [e.target.name]: e.target.value })
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
			terms: "",
		})

		if (cadastroForm.fullName.split(" ").length < 2) {
			setErrors((prev) => {
				return { ...prev, fullName: "Coloque pelo menos o nome e o sobrenome" }
			})
		} else {
			setErrors((prev) => {
				return { ...prev, fullName: "" }
			})
		}

		if (cadastroForm.phone) {
			let phoneIsValid = checkPhoneNumber(cadastroForm.phone)
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

		if (cadastroForm.cpf) {
			let cpfIsValid = checkCPF(cadastroForm.cpf)
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

		if (cadastroForm.password != cadastroForm.password2) {
			setErrors((prev) => {
				return { ...prev, password: "As senhas não são iguais" }
			})
		} else if (cadastroForm.password.length < 8) {
			setErrors((prev) => {
				return { ...prev, password: "A senha precisa ter 8 caracteres" }
			})
		} else {
			setErrors((prev) => {
				return { ...prev, password: "" }
			})
		}

		if (!cadastroForm.terms) {
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
			// alert("Formulário enviado com sucesso!")
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
								value={cadastroForm.fullName}
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
								value={cadastroForm.email}
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
								value={cadastroForm.phone}
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
								value={cadastroForm.cpf}
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
								value={cadastroForm.password}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="inputGroup">
							<CustomInput
								icon="material-symbols:lock-outline"
								name="password2"
								type="password"
								id="password2"
								placeholder="Confirmar senha"
								value={cadastroForm.password2}
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
								value={cadastroForm.terms}
								onChange={(e) =>
									setCadastroForm({ ...cadastroForm, terms: e.target.checked })
								}
							/>
							<span>
								Aceito os{" "}
								<a href="./termos" target="_blank">
									termos de serviço
								</a>
							</span>
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
