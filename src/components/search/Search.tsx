import SearchIcon from '../../assets/search/search.svg';
import locationIcon from '../../assets/location/location.svg';

export default function Search({ city, setCity, getUserLocation }: { city: string, setCity: React.Dispatch<React.SetStateAction<string>>, getUserLocation: () => Promise<void> }) {
  return (
    <div className="flex items-center justify-start rounded-lg bg-gray-300 w-32 mt-3 mx-4">
      <img src={SearchIcon} alt="search-weather" className="ml-2 h-7 w-7" />
      <input type="text" placeholder="Enter your city" value={city} onChange={(e) => setCity(e.target.value)} className='px-5 py-3 rounded-lg outline-none placeholder-black bg-gray-300' />
      <img onClick={getUserLocation} src={locationIcon} alt="get location" className="ml-2 h-7 w-7" />
    </div>
  )
}
