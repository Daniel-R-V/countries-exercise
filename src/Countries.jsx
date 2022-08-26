import { useState, useEffect } from "react"
import axios from "axios"
import FilterResponse from "./FilterResponse"

const Countries = () => {
    const apiURL = "https://restcountries.com/v3.1/all"
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

export default Countries
