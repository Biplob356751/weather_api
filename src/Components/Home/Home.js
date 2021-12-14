import React, { useEffect, useState } from 'react';
import './Home.css'

const Home = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("bangladesh");

    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9c9a62363a0d1b8bd3248ca44214428c`
        fetch(url)
            .then(res => res.json())
            .then(data => setCity(data.main));
    }, [search])
    return (
        <div className="home_page">
            <div className="home">
                <div className="search_input">
                    <input onChange={(e) => { setSearch(e.target.value) }} type="search" placeholder="Search City..." />
                </div>

                {
                    !city ? (
                        <p className="found_data"><i className="fas fa-exclamation"></i>Country Not Found </p>
                    ) : (
                        <div className="weather_info">
                            <h1><i className="fas fa-plane-departure"></i>{search}</h1>
                            <h3>Temperature: {city.temp}°Celsius</h3>
                            <p>Maximum Temperature: {city.temp_max}°Celsius</p>
                            <p>Minimum Temperature: {city.temp_min}°Celsius</p>
                            <p>Humidity: {city.humidity}%</p>

                            <p>Date: {new Date().toLocaleDateString()}</p>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Home;