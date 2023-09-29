async function getWeather(){
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=40.522%2C-74.41';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aaf412f001mshb16825a0d5065e6p181d8ajsn4a009ea4951a',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    const data = result.current.temp_f;
    const name = result.location.name;
    const region = result.location.region;
    
    console.log(name,data,region);
    document.querySelector(".card").innerHTML=`<h3>${name}, ${region}</h3><h1>${data}</h1>`;
	
} catch (error) {
	console.error(error);
}
}
getWeather();
