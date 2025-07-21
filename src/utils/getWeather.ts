export interface WeatherData {
    temperatureMax: number;
    temperatureMin: number;
    currentTemperature: number;
    precipitation: number;
    weatherCode: number; // Devolvemos el código sin traducirlo
}

const url = "https://api.open-meteo.com/v1/forecast";

export async function getWeather(latitude: number, longitude: number): Promise<WeatherData> {
    const response = await fetch(
        `${url}?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&current_weather=true&forecast_days=1&timezone=auto`
    );

    if (!response.ok) {
        throw new Error(`Error al obtener el clima: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.current_weather) {
        console.error("Respuesta sin current_weather:", data);
        throw new Error("No se encontró current_weather en la respuesta");
    }

    return {
        temperatureMax: data.daily.temperature_2m_max[0],
        temperatureMin: data.daily.temperature_2m_min[0],
        currentTemperature: data.current_weather.temperature,
        precipitation: data.daily.precipitation_sum[0],
        weatherCode: data.current_weather.weathercode,
    };
}