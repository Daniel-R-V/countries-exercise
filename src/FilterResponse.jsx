const FilterResponse = ({ filterCountries, setCountry }) => {
    if (filterCountries.length === 1) {
        console.log("testing!")
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
                <button onClick={() => setCountry(country)}>show</button>
            </div>
        )
    })
}

export default FilterResponse
