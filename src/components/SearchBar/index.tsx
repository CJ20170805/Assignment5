import { useEffect, useState } from "react";
import "./searchBar.css";

const token = "tG6ZZUpMN6d4bCYkDdrV8hqp2LApfJJi";

const SearchBar = ({ setWeatherInfo }) => {
  const [list, setList] = useState([]);
  const [searchText, setSearchText] = useState("");

  // useEffect(() => {
  //   search("Winnipeg");
  // }, []);

  async function search(name: string) {
    setWeatherInfo([]);
    const res = await fetch(
      `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${token}&q=${name}`,
    );
    const list = await res.json();

    setList(list);
  }

  async function getWeatherInfo(Key: string) {
    setList([]);

    const res = await fetch(
      `https://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${token}`,
    );
    const info = await res.json();

    console.log("info", info);
    setWeatherInfo(info[0]);
  }

  return (
    <div className="search-bar">
      <div className="s-top">
        <input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          placeholder="type the country name"
        />
        <button onClick={() => search(searchText)}>Search</button>
      </div>
      {list && list.length > 0 && (
        <div className="s-bot">
          <div className="results">
            <ul>
              {list.map((item, index) => {
                return (
                  <li key={index} onClick={() => getWeatherInfo(item.Key)}>
                    {item.LocalizedName} - {item.Country.LocalizedName} (
                    {item.AdministrativeArea.EnglishName})
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
