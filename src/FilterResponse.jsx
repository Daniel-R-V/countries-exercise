const FilterResponse = ({ filteringCountries, setValue, value }) => {
    if (filteringCountries.length > 10) {
        return (
            <div>
                <p>Too many matches, specify another filter</p>
            </div>
        )
    }

    if (filteringCountries.length === 1) {
        return (
            <div>
                <h1>{filteringCountries[0].name.common}</h1>
                <p>capital {filteringCountries[0].capital}</p>
                <p>population {filteringCountries[0].population}</p>
                <h2>languages</h2>
                <ul>
                    {Object.values(filteringCountries[0].languages).map((language) => (
                        <li key={language}>{language}</li>
                    ))}
                </ul>
                <img src={filteringCountries[0].flags.png} alt={filteringCountries[0].name.common} />
            </div>
        )
    }

    return (
        <div>
            {filteringCountries.map((country) => (
                <p key={country.name.common}>
                    {country.name.common}
                    <button onClick={() => setValue(country.name.common.toLowerCase())}>show</button>
                </p>
            ))}
        </div>
    )
}

export default FilterResponse
