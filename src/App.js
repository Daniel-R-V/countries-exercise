import Countries from "./Countries"
import Weather from "./Weather"
import { useState } from "react"

function App() {
    const [country, setCountry] = useState({})
    return (
        <>
            <Countries country={country} setCountry={setCountry} />
            <Weather country={country} />
        </>
    )
}

export default App
