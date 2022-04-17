const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById(`cityName`);
const cityname = document.getElementById(`city_name`);
const temp = document.getElementById('temp');
const tempstatus = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');


const getinfo = async (event) => {
    event.preventDefault();   //to prevent page from restoring to default
    let cityVal = cityName.value;
    datahide.classList.remove('data_hide')



    if (cityVal === "") {
        cityname.innerText = `Please Write the name before search`;
        datahide.classList.add('data_hide')

    } else {
        try {

            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=7b3165353e7bc04983323b24e5b97892`;
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];
            console.log(arrdata);

            cityname.innerText = `${arrdata[0].name},${arrdata[0].sys.country}`
            temp.innerText = arrdata[0].main.temp + '°C';

            let tempMood = arrdata[0].weather[0].main;

            //condition to check sunny or cloudy
            if (tempMood = "Clear") {
                tempstatus.innerHTML =
                    '<i class="fa fa-cloud"></i>';
            } else if (tempMood = "Clouds") {
                tempstatus.innerHTML =
                    '<i class="fa fa-cloud"></i>';
            } else if (tempMood = "Rain") {
                tempstatus.innerHTML =
                    '<i class="fa fa-cloud-rain"></i>';
            }
            else if (tempMood == 'Haze') {
                tempstatus.innerHTML =
                    '<i class="fa fa-sun-haze"></i>';
            }
            else {

                tempstatus.innerHTML =
                    '<i class="fa fa-cloud"></i>';
            }


        } catch (error) {
            console.log(error);
            cityname.innerText = `Plz enter the city name properly`;
            datahide.classList.add('data_hide')
        }

    }

}
submitBtn.addEventListener('click', getinfo);