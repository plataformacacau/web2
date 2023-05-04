import React, { useState } from "react"
import Layout from "../../components/Layout"
import { StyledCadastro } from "./styles"
import Leaves from "../../assets/leaves_dark.png"
import CustomInput from "../../components/StyledInput"
import { checkCPF, organizeCPF } from "../../hooks/cpfHandler"
import { checkPhoneNumber, organizePhoneNumber } from "../../hooks/phoneHandler"

export default function Cadastro() {
	const [user_list, setUserList] = useState(JSON.parse(localStorage.getItem('users')))
	const [logged_user, setLoggedUser] = useState(JSON.parse(localStorage.getItem('user')))

	if (logged_user !== null) window.location.replace('/logged-user');

	const [cadastroForm, setCadastroForm] = useState({
		fullName: "",
		email: "",
		phone: "",
		whatsapp: "",
		cpf: "",
		password: "",
		password2: "",
		terms: false,
		/*fullName: "Samuel Correia Nascimento",
		email: "samuca.7cn@gmail.com",
		phone: "(73) 9 8812-1518",
		whatsapp: "(73) 9 8812-1518",
		cpf: "064.897.345-08",
		password: "12345678",
		password2: "12345678",
		terms: true,*/
	})

	const [errors, setErrors] = useState({
		fullName: "",
		email: "",
		phone: "",
		whatsapp: "",
		cpf: "",
		password: "",
		password2: "",
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
			whatsapp: "",
			cpf: "",
			password: "",
			password2: "",
			terms: "",
		})

		if (cadastroForm.fullName.split(" ").length < 2) {
			setErrors((prev) => {
				return { ...prev, fullName: "Coloque pelo menos o nome e o sobrenome" }
			})
			return;
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
				return;
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
				return;
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
			return;
		} else if (cadastroForm.password.length < 8) {
			setErrors((prev) => {
				return { ...prev, password: "A senha precisa ter 8 caracteres" }
			})
			return;
		} else {
			setErrors((prev) => {
				return { ...prev, password: "" }
			})
		}

		if (!cadastroForm.terms) {
			setErrors((prev) => {
				return { ...prev, terms: "Você precisa aceitar os termos" }
			})
			return;
		} else {
			setErrors((prev) => {
				return { ...prev, terms: "" }
			})
		}

		if (user_list.filter((el) => ((
			el.email === cadastroForm.email) ||
			el.phone === cadastroForm.phone))
			.length) {

			alert('Usuário já cadastrado!')
			return;
		}

		let new_user = {
			id: user_list.length,
			fullName: cadastroForm.fullName,
			email: cadastroForm.email,
			phone: cadastroForm.phone,
			password: cadastroForm.password,
			terms: cadastroForm.terms,
		}

		user_list.push(new_user);
		localStorage.setItem('user', JSON.stringify(new_user))
		localStorage.setItem('users', JSON.stringify(user_list))
		window.location.replace('/cadastro/farm')
	}

	return (
		<Layout header="Início">
			<StyledCadastro>

				<div className="content">
					<h1>Cadastre-se na plataforma!</h1>
					<form action="" onSubmit={handleSubmit}>
						<div className="inputGroup">
							<CustomInput
								icon="ph:user"
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

						<div className="inputGroup">
							<label htmlFor="terms">
								<span>
									<input
										type="checkbox"
										name="terms"
										id="terms"
										value={cadastroForm.terms}
										onChange={(e) =>
											setCadastroForm({ ...cadastroForm, terms: e.target.checked })
										}
									/>
								</span>
								<span> Aceito os </span>
								<span><a href="./termos" target="_blank">
									Termos de serviço
								</a></span>
							</label>
							{errors.terms && <p className="error">{errors.terms}</p>}
						</div>

						<span>
							<span>Já tem uma conta? </span>
							<a href="./login"> Faça login!</a>
						</span>

						<button type="submit" disabled={!formIsValid}>
							Cadastrar
						</button>
					</form>
				</div>
			</StyledCadastro>
		</Layout>
	)
}
