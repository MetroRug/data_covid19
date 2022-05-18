import React, {memo, useCallback, useEffect, useState} from "react";
import api from "../../api";

function Main(){
    const [data, setData] = useState({})
    const [country, setCountry] = useState('brazil')

    const getCovidData = useCallback((country) => {
        api.getCountry(country)
        .then(data => console.log(data))
    }, [])
    
    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country])

    return(
        <div>
            Teste
        </div>
    )
}

export default memo(Main)