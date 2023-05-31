import { useEffect, useState } from 'react'
import axios from 'axios';


export const UseFetch = (URL) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    const fetchApi = async () => {
         try {
            setLoading(true);
            let apiResponse = await axios.get(URL)
            setData(apiResponse);
            setLoading(false);

        } catch (e) {
            setLoading(false);
            console.log(e)
        }
    }

    const reFetchApi = async () => {

        try {
            setLoading(true);
            let getMovieUrl = await axios.get(URL)
            setData(getMovieUrl);
            setLoading(false);

        } catch (e) {
            setLoading(false);
            console.log(e)
        }
    }

    useEffect(() => {
        fetchApi();
    },[])
  return {data,loading, reFetchApi, fetchApi};
}
