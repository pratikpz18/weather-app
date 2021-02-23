let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let icon = document.querySelector(".icon");
let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let description = document.querySelector(".description");
let body = document.querySelector("body");

//USE YOUR OWN KEY HERE 
const key = "key" ;

btn.addEventListener('click',function getinput(){
	let api = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}&units=metric` ;
	fetch(api)
		.then(response => {
			input.value='';
			return response.json();
		})
		.then(data => {
			icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
			city.innerHTML = data.name ;
			temp.innerHTML = `${data.main.temp}<sup style="font-size:14px">&#8451<sup>` ;
			description.innerHTML = data.weather[0].description ;

			var color='rgba(244,244,244,0.4)'
  
			if(data.main.temp > -10 && data.main.temp <= 0){
				color='rgba(50,97,214, 0.4)'
			}else if(data.main.temp > 1 && data.main.temp <= 15){
				color='rgba(244,244,244, 0.4)'
			}else if(data.main.temp > 16 && data.main.temp <= 25){
				color='rgba(244,204,0, 0.4)'
			}else if(data.main.temp > 26){
				color='rgba(252,170,18, 0.8)'
			};
			body.style.background = color ;
		})
});