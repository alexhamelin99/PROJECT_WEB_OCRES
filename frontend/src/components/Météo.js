import axios from 'axios';
import React, { useState } from 'react';


const Météo = () => {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_Key = "4081444b7b90198136fefe6ed4ccf35b";
    const [query, setQuery] = useState('Paris');
    const [weather, setWeather] = useState({});


    const fetchWeather = async(query) => {
        const { data } = await axios.get(URL, {
            params: {
                q: query,
                units: 'metric',
                APPID: API_Key,
            },
        });
        return data;
    }

    const search = async(e) => {
        if (e.key == 'Enter') {
            const data = await fetchWeather(query)
            setWeather(data);
            setQuery('');
        }
    }

    return ( 
        <div className="ui form">
            <div>
                
                <input 
                className="input" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                onKeyPress={search}
                placeholder="Sélectionnez une ville"
                /> 
                {weather.main && (
                    <div className="city" >
                        <h2 className="city-name" >
                            <span></span>
                            <span > {weather.name} ({weather.sys.country})  </span>
                        </h2> 
                        
                        <h2 className="city-temp">
                            {Math.round(weather.main.temp)}
                            <sup>°C</sup>
                        </h2>
                        <h2 className="info">
                            <img className="city-icon" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
                            <p>{weather.weather[0].description}</p>
                        </h2>
                    </div>
            )} 
            </div>
        </div>
    );

};export default Météo;