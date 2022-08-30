import { useState, useEffect } from "react"
import axios from "axios"
import FilterResponse from "./FilterResponse"

const Countries = ({ country, setCountry }) => {
    const apiURL = "https://restcountries.com/v3.1/all"
    const [countries, setCountries] = useState([])
    const [value, setValue] = useState("")

    useEffect(() => {
        axios.get(apiURL).then((response) => {
            setCountries(response.data)
        })
    }, [])

    useEffect(() => {
        if (country.name?.common) {
            setValue(country.name.common)
        }
    }, [country])

    const handleChange = (event) => setValue(event.target.value)

    const filterCountries = countries.filter((c) => c.name?.common.toLowerCase().includes(value.toLowerCase()))

    return (
        <>
            <p>
                find countries
                <input value={value} onChange={handleChange} />
            </p>
            <FilterResponse filterCountries={filterCountries} setCountry={setCountry} />
        </>
    )
}

export default Countries
