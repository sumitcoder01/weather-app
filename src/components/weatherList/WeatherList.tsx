import { WeatherData } from "../../interfaces/weather/weather";
import TempCard from "./tempCard/TempCard";

export default function WeatherList({ city, weathersData }: { city: string, weathersData: WeatherData[] }) {
    return (
        <div className="container flex mt-4 justify-center flex-wrap gap-8 mb-2 md:flex-row flex-col">
            {weathersData.map(weatherData =>
                <TempCard key={weatherData.dt} city={city} weatherData={weatherData} />
            )}
        </div>
    )
}
