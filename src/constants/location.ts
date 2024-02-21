import { Location } from "../interfaces/location/locationdata";
import { GET_IP, GET_LOCATION } from "./constant"

export const getVisitorIP = async (): Promise<string> => {
    try {
        const response = await fetch(GET_IP);
        const ipAddress = await response.text();
        return ipAddress;
    } catch (error) {
        console.error(error);
        return "";
    }
}

export const fetchLocation = async (): Promise<string> => {
    try {
        const ipAddress = await getVisitorIP();
        const response = await fetch(GET_LOCATION + ipAddress);
        const data: Location = await response.json() as Location;
        return data.status === "success" ? data.city : "";
    } catch (error) {
        console.error(error);
        return "";
    }
}