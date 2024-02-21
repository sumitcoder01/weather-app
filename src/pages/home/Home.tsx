import { useEffect, useState } from "react"
import { WeatherData, WeatherResponse } from "../../interfaces/weather/weather";
import { API_KEY, BASE_URL } from "../../constants/constant";
import Search from "../../components/search/Search";
import WeatherList from "../../components/weatherList/WeatherList";
import { fetchLocation } from "../../constants/location";
import WeatherListSkeleton from "../../components/weatherList/skeleton/weatherListSkeleton";

export default function Home() {
  const [city, setCity] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [weathersData, setWeathersData] = useState<WeatherData[]>([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}?q=${city}&cnt=24&units=metric&appid=${API_KEY}`);
      const weathers: WeatherResponse = await response.json() as WeatherResponse;
      if (weathers.cod !== "200") throw new Error("City not found");

      let currentDate = "";
      const weathersList: WeatherData[] = [];
      weathers.list.forEach(weather => {
        const newDate: string = weather.dt_txt.split(' ')[0];
        if (newDate !== currentDate) {
          weathersList.push(weather);
          currentDate = newDate;
        }
      });

      setWeathersData(weathersList);
    } catch (error) {
      setWeathersData([]);
    }
    setLoading(false);
  }

  const getUserLocation = async (): Promise<void> => {
    const userCity = await fetchLocation();
    setCity(userCity);
  }

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city])

  useEffect(() => {
    getUserLocation();
  }, [])
  return (
    <section className="mx-5 mt-24">
      <Search city={city} setCity={setCity} getUserLocation={getUserLocation} />
      {loading ? (
        <WeatherListSkeleton />
      ) : weathersData.length === 0 || city.trim().length === 0 ? (
        <div className="text-xl mt-16 flex justify-center items-center">
          {city.trim().length === 0 ? "Search city for result..." : "No results found..."}
        </div>
      ) : (
        <WeatherList city={city} weathersData={weathersData} />
      )}
    </section>
  )
}
