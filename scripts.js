function search(){
    let place=document.getElementById('place').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=5b4bee0ba241d092159faf007e166080`).then(data => data.json()).then(data => displaydata(data));

}

function displaydata(data){
console.log(data);
let name=data.name;
let temp=data.main.temp;
let temp_celcius=Math.round(temp-273.15);
let wind=data.wind.speed;
let des=data.weather[0].description;
let hum=data.main.humidity;
let result=document.getElementsByClassName('details')[0];
result.innerHTML=`<h2>${name}<h2>
Temperature: ${temp_celcius}°C<br>
Description:${des}<br>
Wind Speed: ${wind} m/s<br>
Humidity:${hum}%`
}
