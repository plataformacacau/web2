export function checkCPF(cpf) {
	console.log("verificando cpf -> " + cpf)
	cpf = cpf.replace(/[^\d]+/g, "")

	if (cpf.length !== 11) {
		return { valid: false, message: "CPF inválido - O CPF deve possuir 11 dígitos" }
	}

	// Verificar se o CPF é igual a todos os números iguais (ex: 11111111111)
	if (/^(\d)\1{10}$/.test(cpf)) {
		return { valid: false, message: "CPF inválido - Números repetidos" }
	}

	// Calcular o primeiro dígito verificador
	var soma = 0
	var resto
	for (var i = 1; i <= 9; i++) {
		soma += parseInt(cpf.substring(i - 1, i)) * (11 - i)
	}
	resto = (soma * 10) % 11
	if (resto === 10 || resto === 11) {
		resto = 0
	}
	if (resto !== parseInt(cpf.substring(9, 10))) {
		return { valid: false, message: "CPF inválido" }
	}

	// Calcular o segundo dígito verificador
	soma = 0
	for (i = 1; i <= 10; i++) {
		soma += parseInt(cpf.substring(i - 1, i)) * (12 - i)
	}
	resto = (soma * 10) % 11
	if (resto === 10 || resto === 11) {
		resto = 0
	}
	if (resto !== parseInt(cpf.substring(10, 11))) {
		return { valid: false, message: "CPF inválido" }
	}

	return { valid: true, message: "" }
}

export function organizeCPF(cpf) {
	// Remover tudo que não for número
	cpf = cpf.replace(/[^\d]/g, "")

	if (cpf.length === 3) {
		return `${cpf}.`
	} else if (cpf.length > 3 && cpf.length < 6) {
		let primeirosDigitos = cpf.slice(0, 3)
		let ultimosDigitos = cpf.slice(3)
		return `${primeirosDigitos}.${ultimosDigitos}`
	} else if (cpf.length >= 6 && cpf.length < 9) {
		let primeirosDigitos = cpf.slice(0, 3)
		let segundosDigitos = cpf.slice(3, 6)
		let ultimosDigitos = cpf.slice(6)
		return `${primeirosDigitos}.${segundosDigitos}.${ultimosDigitos}`
	} else if (cpf.length >= 9 && cpf.length <= 11) {
		let primeirosDigitos = cpf.slice(0, 3)
		let segundosDigitos = cpf.slice(3, 6)
		let terceirosDigitos = cpf.slice(6, 9)
		let ultimosDigitos = cpf.slice(9)

		return `${primeirosDigitos}.${segundosDigitos}.${terceirosDigitos}-${ultimosDigitos}`
	}

	return cpf
}
