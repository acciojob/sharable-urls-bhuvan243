// your code here
const btn = document.getElementById('button');
const url = document.getElementById('url');
const name = document.getElementById('name');
const year = document.getElementById('year');
// adding event listener
btn.addEventListener("click", () => {
	if (name.value && year.value) {
		url.innerText = `https://localhost:8080/?name=${name.value}&year=${year.value}`;
	}
	else if (name.value){
		url.innerText = `https://localhost:8080/?name=${name.value}`;	
	}
	else if(year.value){
		url.innerText = `https://localhost:8080/?year=${year.value}`;
	}
	else{
		url.innerText = `https://localhost:8080/111`;
	}
})