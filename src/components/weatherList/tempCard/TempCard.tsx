import { useEffect, useState } from "react";
import { WeatherData } from "../../../interfaces/weather/weather";
import { ICON_URL } from "../../../constants/constant";

export default function TempCard({ city, weatherData }: { city: string, weatherData: WeatherData }) {
    const [date, setDate] = useState<string>("");
    const [currentCity, setCurrentCity] = useState<string>("");

    const getDate = (inputDate: string): void => {
        const monthNames = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        const dateObject = new Date(inputDate);
        const formattedDate = `${dateObject.getDate()} ${monthNames[dateObject.getMonth()]} ${dateObject.getFullYear()}`;
        setDate(formattedDate)
    }

    const getCity = () => {
        const cityUpperCase = city[0].toUpperCase() + city.substring(1).toLowerCase();
        setCurrentCity(cityUpperCase)
    }

    useEffect(() => {
        getDate(weatherData.dt_txt);
        getCity();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [weatherData.dt_txt, city])
    return (
        <div className="mx-auto rounded-md py-4 px-5 shadow-lg bg-[#413d3d] text-white mb-5 mt-10 md:mb-1">
            <div className="text-xl mb-2">{currentCity}</div>
            <div className="flex items-center space-x-4">
                <img src={ICON_URL + `${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].main} className="h-20 w-20 object-fill object-center" />
                <div className="text-lg">
                    <div className="font-bold mb-1">{weatherData.weather[0].description}</div>
                    <div className="text-sm">Feels like {Math.floor(weatherData.main.feels_like)}°C</div>
                </div>
            </div>
            <div className="px-6 py-3">
                <div className="text-lg mb-1">{Math.floor(weatherData.main.temp)}°C</div>
                <div className="font-bold text-lg mb-1">{date}</div>
                <div className="space-y-1 text-sm">
                    <div>Max Temp: {Math.floor(weatherData.main.temp_max)}°C</div>
                    <div>Min Temp: {Math.floor(weatherData.main.temp_min)}°C</div>
                    <div>Humidity: {weatherData.main.humidity}%</div>
                    <div>Pressure: {weatherData.main.pressure} hPa</div>
                </div>
            </div>
        </div>


    )
}
