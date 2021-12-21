const getWeatherData = async (city, apiKey) => {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
	);
	const apiData = await response.json();
	return apiData;
};
const getWeather = () => {
	let city = document.getElementById("city").value;
	const apiKey = "69c74c1baa5a315002de22b050a3f4f6";
	getWeatherData(city, apiKey).then((data) => {
		let temp = document.getElementById("temp");
		let humidity = document.getElementById("humidity");
		let wind = document.getElementById("wind");
		let description = document.getElementById("description");
		let cityName = document.getElementById("city-name");
		cityName.innerHTML = `City: ${data.name}`;
		let tempF = (data.main.temp - 273.15) * 1.8 + 32;
		temp.innerHTML = `Temperature: ${Math.round(tempF)}°F`;
		humidity.innerHTML = `Humidity: ${data.main.humidity} %`;
		wind.innerHTML = `Wind Speed: ${data.wind.speed} m/s`;
		description.innerHTML = `Description: ${data.weather[0].description}`;
		let weatherImage = document.getElementById("weatherImage");
		changeImage(weatherImage, data.weather[0].description);
	});
};

const changeImage = (image, description) => {
	if (description.includes("rain")) {
		image.src = "images/rainy.png";
	} else if (description.includes("cloud")) {
		image.src = "images/cloudy.png";
	} else if (description.includes("snow")) {
		image.src = "images/snowy.png";
	} else if (description.includes("clear")) {
		image.src = "images/sunny.png";
	}
};
