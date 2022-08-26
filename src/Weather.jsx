import { useState, useEffect } from "react"
import axios from "axios"

const api_key = process.env.REACT_APP_API_KEY

const Weather = ({ name }) => {
    const [result, setResult] = useState([])

    useEffect(() => {
        axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=France`).then((response) => {
            setResult(response.data)
            console.log(result)
        })
    }, [])
}

export default Weather
