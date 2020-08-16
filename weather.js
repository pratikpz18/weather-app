let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let icon = document.querySelector(".icon");
let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let description = document.querySelector(".description");


const key = //USE YOUR OWN KEY HERE ;

btn.addEventListener('click',function getinput(){
	let api = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}&units=metric` ;
	fetch(api)
		.then(response => {
			return response.json();
		})
		.then(data => {
			console.log(data)
			icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
			city.innerHTML = data.name ;
			temp.innerHTML = `${data.main.temp}<sup style="font-size:14px">&#8451<sup>` ;
			description.innerHTML = data.weather[0].description ;
		})
});