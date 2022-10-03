import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(false)
    
    useEffect(() => {
        fetch(url)
        .then(res => {
            if(res.ok){
                return res.json();
            } else {
                throw Error('Falied to fetch data from resource')
            }
        })
        .then(data => {
            setPending(false)
            setData(data);
        })
        .catch(err => {
            setError(err)
            setPending(false)
        });
        
    },[url])
    return {data, error, pending};
}
 
export default useFetch;