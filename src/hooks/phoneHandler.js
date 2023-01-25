export function checkPhoneNumber(phone) {
	var regexTelefone =
		/^(\d{4}-\d{4})|(\d{1} \d{4}-\d{4})|(\(?\d{2}\)? \d{4}-\d{4})|(\(?\d{2}\)? \d{1} \d{4}-\d{4})$/

	let isValid = regexTelefone.test(phone)

	if (isValid) return { valid: true, message: "" }

	return {
		valid: false,
		message: "Número de telefone inválido. Ele deve estar no formato (DDD) XXXX-XXXX",
	}
}

export function organizePhoneNumber(phone) {
	// Remover tudo que não for número
	phone = phone.replace(/[^\d]/g, "")

	if (phone.length === 8) {
		let primeirosNumeros = phone.slice(0, 4)
		let ultimosNumeros = phone.slice(4)
		return `${primeirosNumeros}-${ultimosNumeros}`
	} else if (phone.length === 9) {
		let digito = phone.slice(0, 1)
		let primeirosNumeros = phone.slice(1, 5)
		let ultimosNumeros = phone.slice(5)
		return `${digito} ${primeirosNumeros}-${ultimosNumeros}`
	} else if (phone.length === 10) {
		let ddd = phone.slice(0, 2)
		let primeirosNumeros = phone.slice(2, 6)
		let ultimosNumeros = phone.slice(6)
		return `(${ddd}) ${primeirosNumeros}-${ultimosNumeros}`
	} else if (phone.length === 11) {
		let ddd = phone.slice(0, 2)
		let digito = phone.slice(2, 3)
		let primeirosNumeros = phone.slice(3, 7)
		let ultimosNumeros = phone.slice(7)
		return `(${ddd}) ${digito} ${primeirosNumeros}-${ultimosNumeros}`
	}

	return phone
}
