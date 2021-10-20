const cityname = document.getElementById("cityName");
const submitbtn = document.getElementById("submitbtn");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer");
const temp_real_val = document.getElementById("temp_real_val");
const getInfo = async(e) => {
    e.preventDefault();
    let cityval = cityname.value; 

    if (cityval == "") {
        city_name.innerHTML = `please write the name before search`;
        datahide.classList.add('data_hide');
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=f310ea5ce1cce08834a9276c2fd0ddc5`;
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];
            
            city_name.innerHTML = `${arrdata[0].name} , ${arrdata[0].sys.country}`;
            temp_real_val.innerHTML = arrdata[0].main.temp;
            const tempMood = arrdata[0].weather[0].main;

            if (tempMood == "Clear") {
                temp_status.innerHTML =
                    "<i class='fas fa-sun' style='color: #eccc68'></i >";
            }else if (tempMood == "Rain") {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud-rain' style='color: #eccc68'></i >";
            }else if (tempMood == "Clouds") {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud' style='color: #f1f2f6'></i >";
            }else {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud' style='color: #f1f2f6'></i >";
            }
            datahide.classList.remove('data_hide');
        } catch (error) {
            city_name.innerHTML = `please enter the city name properly`;
            datahide.classList.add('data_hide');
        }
    }
}
submitbtn.addEventListener('click',getInfo);