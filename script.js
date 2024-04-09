document.addEventListener('DOMContentLoaded', () => {
    const inputbox = document.querySelector(".inputbox");
    const searchbtn = document.querySelector("#searchbtn");
    const weatherimg = document.querySelector(".weather-img");
    const temprature = document.querySelector(".temperature");
    const description = document.querySelector(".description");
    const humidity = document.querySelector("#humidity");
    const windspeed = document.querySelector("#wind-speed");
  

    async function checkweather(city) {
        const apikey = "5b3482034aa14b9eddbed7752811827b";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
        const weatherdata = await fetch(url).then(response => response.json());
        console.log(weatherdata);


      if (weatherdata.cod === '404') {
         window.alert("Rong Input !");
          return;
      }
        temprature.innerHTML = `${Math.round(weatherdata.main.temp - 273.15)}°C`;
        description.innerHTML = `${weatherdata.weather[0].description}`;
        humidity.innerHTML = `${weatherdata.main.humidity} %`;
        windspeed.innerHTML = `${weatherdata.wind.speed} Km/H `;
        switch (weatherdata.weather[0].main) {
            case 'Clouds':
                weatherimg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwHNUINWfEArGU9dVntiPQFRJXvk5axYIzorBrkYqvepztedcVopJsvQaI2MFTA8E6bf0&usqp=CAU";
                break;
            case 'Clear':
                weatherimg.src = "https://img.freepik.com/free-photo/low-angle-shot-beautiful-cloudscape-blue-sky_181624-28988.jpg?t=st=1711707239~exp=1711710839~hmac=3f755e983d0d4292627c8862&w=996";
                break;
            case 'Rain':
                weatherimg.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAGAAEDBAUCB//EAEIQAAIBAwIDBgMFBgQEBwEAAAECAwAEEQUhEjFRBhMiQWFxMoGRFCNCUqEHFTNikrFygsHRFjRD4SVEoqOys/Ak/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAMEAgEF/8QAJREAAwACAgMBAQEAAAAAAAAAAAECAxEEIRIxQRMiFDJRcWEz/9oADAMBAAIRAxEAPwD3GqT8z70uM9TVpVGBsM0AJP4Y9qrS/wAZqUjESEDPyqeLDIpIG9ADwfwxUNx/E+VNKcOQPoKkh/h5YfWgCF7mKztZbi5cJFGOJmbyFDl1r1/et/8AzRpawfhaVeKQ+uOQ9udLtDci81L7ON4bQhsA7GQ+Z9h+pql7VXiwrXkyLLmbrU+iePUNSTf7cxPnmJcfSrSdpJbeMfvOJWi/FPENkHVl549RWdTPxcDFFDNg8IJwCfKnVihr0LnJcv2Fcl9Z2cIuri5ijtyuRI74Bz06/Ksy57Vw44bLT7y66PwiJT83IP6UOWOmwWfAVUGRM8LHJCA7kKD8I9quep/vSlx19Yx8i36LqdpbsOCdHfA3/wCZWr0Pam1cYu7eUgjDff3Gr9GafB1TcL/AAgwfWmH6Uqz3a36TT4uIm57tUshyNnUaTpUqV2//2Q==";
                break;
            case 'Snow':
                weatherimg.src = "https://cdn.pixabay.com/photo/2016/01/19/18/04/old-1158401_960_720.jpg";
                break;
            default:
                weatherimg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwHNUINWfEArGU9dVntiPQFRJXvk5axYIzorBrkYqvepztedcVopJsvQaI2MFTA8E6bf0&usqp=CAU";
                break;
        }
    }

    searchbtn.addEventListener("click", () => {
        const city = inputbox.value;
        checkweather(city);
    });
});
