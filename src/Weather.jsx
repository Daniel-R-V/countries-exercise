import { useState, useEffect } from "react"
import axios from "axios"

const api_key = process.env.REACT_APP_API_KEY

const Weather = ({ name }) => {
    const [result, setResult] = useState([])

    useEffect(() => {
        axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${name}`).then((response) => {
            setResult(response.data)
        })
    }, [])
}

export default Weather
