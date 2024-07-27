import { useEffect, useState } from "react";

function useCurrencyInfo (currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        fetch(`https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res[currency])) // here we are storing the data which is come from the API.
    },[currency])
    return data
}

export default useCurrencyInfo;