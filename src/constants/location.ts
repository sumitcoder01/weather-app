import { Location } from "../interfaces/location/locationdata";
import { GEO_API_KEY, GET_LOCATION } from "./constant"

export const getCity = async (latitude: number, longitude: number): Promise<string> => {
    try {
        const response = await fetch(`${GET_LOCATION}?key=${GEO_API_KEY}&q=${latitude + "," + longitude}&pretty=1`);
        if (!response.ok) throw new Error("Location not found");
        const data: Location = await response.json() as Location;
        return data.results[0].components._normalized_city;
    } catch (error) {
        console.error(error);
        return "";
    }
}

export const getCurrentPosition = (): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

export const fetchLocation = async (): Promise<string> => {
    try {
        if (!navigator.geolocation) throw new Error("Geolocation not available");
        const position = await getCurrentPosition();
        const { latitude, longitude } = position.coords;
        const city = await getCity(latitude, longitude);
        return city;
    } catch (error) {
        console.error(error);
        return "";
    }
}