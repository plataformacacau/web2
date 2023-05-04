export default function logout() {
	localStorage.setItem('user', null);
	window.location.replace('/');
}
