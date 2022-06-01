function loadingWeather() {
// lay duoc du lieu tu api
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status== 200){ // đã gửi lên hoàn thành và nhận đc kết quả thành công
            var currentWeather = JSON.parse(xhttp.responseText);

            //thay số 27 vào vị trí của 30 bên html
            var nd = document.getElementById("nhietdo");
            nd.innerText = currentWeather.main.temp;
            var hm = document.getElementById("hump");
            hm.innerText = currentWeather.main.humidity;
            var wn = document.getElementById("wind");
            wn.innerText = currentWeather.wind.speed;
            var ds = document.getElementById("desc");
            ds.innerText = currentWeather.weather[0].description;
        }
    };
    xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric", true);
    xhttp.send();
}
loadingWeather();
