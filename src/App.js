import { useState, useEffect } from "react"
import axios from "axios"

function App() {
    const apiURL = "https://restcountries.com/v3.1/all"
    const [countries, setCountries] = useState([])
    const [name, setName] = useState("")

    useEffect(() => {
        axios.get(apiURL).then((response) => {
            setCountries(response.data.map((country) => country.name.common))
        })
    }, [])

    const handleChange = (event) => setName(event.target.value)

    const filterCountries = countries.filter((country) => country.toLowerCase().includes(name))

    return (
        <>
            <p>
                find countries
                <input value={name} onChange={handleChange} />
            </p>
            {filterCountries.length > 10 ? "too many matches" : filterCountries.map((country) => <p key={country}>{country}</p>)}
        </>
    )
}

export default App
