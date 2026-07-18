
  let fetchWeatherData = async (cityInput)=>{
    try {
      let response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityInput}`);
      response = await response.json()
      console.log(response)
      return response
    } catch (error) {
      console.error(error)
    }
  }

  export { fetchWeatherData }