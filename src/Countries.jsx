import { useEffect, useState } from "react"
import axios from "axios"
import FilterResponse from "./FilterResponse"

const Countries = () => {
    const apiURL = "https://restcountries.com/v3.1/all"
    const [allCountries, setAllCountries] = useState([])
    const [value, setValue] = useState("")

    useEffect(() => {
        axios.get(apiURL).then((response) => {
            const data = response.data
            setAllCountries(data)
        })
    }, [])

    const handleChange = (event) => setValue(event.target.value)

    const filteringCountries = allCountries.filter((country) => country.name.common.toLowerCase().includes(value))

    return (
        <>
            find countries
            <input type="text" value={value} onChange={handleChange} />
            <FilterResponse filteringCountries={filteringCountries} setValue={setValue} />
        </>
    )
}

export default Countries
