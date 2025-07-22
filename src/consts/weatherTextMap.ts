import type { WeatherTextMap } from "@/types/weatherTextMap";

export const weatherTextMap: WeatherTextMap = {
    0: { description: "Clear", icon: "☀️" },
    1: { description: "Mostly clear", icon: "🌤️" },
    2: { description: "Partly cloudy", icon: "⛅" },
    3: { description: "Cloudy", icon: "☁️" },
    45: { description: "Fog", icon: "🌫️" },
    48: { description: "Fog with frost", icon: "🌫️" },
    51: { description: "Light drizzle", icon: "🌦️" },
    53: { description: "Moderate drizzle", icon: "🌦️" },
    55: { description: "Heavy drizzle", icon: "🌧️" },
    61: { description: "Light rain", icon: "🌧️" },
    63: { description: "Moderate rain", icon: "🌧️" },
    65: { description: "Heavy rain", icon: "🌧️🌧️" },
    66: { description: "Light freezing rain", icon: "🌧️❄️" },
    67: { description: "Heavy freezing rain", icon: "🌧️❄️❄️" },
    71: { description: "Light snow", icon: "🌨️" },
    73: { description: "Moderate snow", icon: "🌨️" },
    75: { description: "Heavy snow", icon: "❄️❄️" },
    95: { description: "Thunderstorm", icon: "⛈️" },
    96: { description: "Thunderstorm with hail", icon: "⛈️🧊" },
    99: { description: "Severe thunderstorm with hail", icon: "⛈️🧊🧊" },
};