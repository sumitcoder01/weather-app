import SearchIcon from '../../assets/search/search.svg';

export default function Search({ city, setCity }: { city: string, setCity: React.Dispatch<React.SetStateAction<string>> }) {
  return (
    <div className="flex items-center justify-start rounded-lg bg-gray-300 md:w-32 w-[80%] mt-3 mx-4">
      <img src={SearchIcon} alt="search-weather" className="ml-2 h-7 w-7" />
      <input type="text" placeholder="Enter your city" value={city} onChange={(e) => setCity(e.target.value)} className='px-5 py-3 rounded-lg outline-none bg-gray-300' />
    </div>
  )
}
