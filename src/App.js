import { useState, useEffect } from "react"
import axios from "axios"

function App() {
    const apiURL = "https://restcountries.com/v3.1/all"
    const api_key = process.env.REACT_APP_API_KEY
    const [countries, setCountries] = useState([])
    const [name, setName] = useState("")

    useEffect(() => {
        axios.get(apiURL).then((response) => {
            setCountries(response.data)
        })
    }, [])

    const handleChange = (event) => setName(event.target.value)

    const filterCountries = countries.filter((country) => country.name.common.toLowerCase().includes(name))

    return (
        <>
            <p>
                find countries
                <input value={name} onChange={handleChange} />
            </p>
            <FilterResponse filterCountries={filterCountries} setName={setName} />
        </>
    )
}

const FilterResponse = ({ filterCountries, setName }) => {
    if (filterCountries.length === 1) {
        const country = filterCountries[0]
        return (
            <div>
                <h1>{country.name.common}</h1>

                <p>capital {country.capital}</p>
                <p>population {country.population}</p>

                <h1>languages</h1>

                <ul>
                    {Object.values(country.languages).map((language) => (
                        <li key={language}>{language}</li>
                    ))}
                </ul>
                <div>
                    <img src={country.flags.png} alt={country.name} />
                </div>
            </div>
        )
    }

    if (filterCountries.length > 10) return <div>Too many matches, specify another filter</div>
    return filterCountries.map((country) => {
        return (
            <div key={country.name.common}>
                {country.name.common}
                <button value={country.name.common.toLowerCase()} onClick={(event) => setName(event.target.value)}>
                    show
                </button>
            </div>
        )
    })
}

export default App
