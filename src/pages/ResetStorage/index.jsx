export default function reset() {
	localStorage.setItem('users', JSON.stringify([]));
	localStorage.setItem('user', null);
	localStorage.setItem('farms', JSON.stringify([]));
	localStorage.setItem('areas', JSON.stringify([]));
	localStorage.setItem('qtd_farms_data', JSON.stringify([0, 1]))
	alert('Dados resetados com sucesso!');
	window.location.replace('/');
}
