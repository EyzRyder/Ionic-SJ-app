
import { useEffect, useState } from "react";
import Axios from 'axios';

export interface ILink {
    "title": string,
    "favicon": string,
    "description": string,
    "img": string
    "whoRegistered": string,
    "registeredOn": string,
    "status": string,
    "detectionsCounts": string
}

const api = Axios.create({
    baseURL: process.env.REACT_APP_API_URL_TEST
})

const useGet = (url: string) => {
    const [data, setData] = useState<ILink | null>(null);
    const [isPending, setIsPending] = useState<boolean>(true);
    const [error, setError] = useState<Error|null>(null);

    useEffect(() => {
        if (url === "") {
            setData(null)
            setIsPending(false)
            setError(null);
            return;
        }
        setIsPending(true);

        api.post("linkplusregisterdata", {
            timeout: 60000, 
            data:url
        })
            .then(res => {
                if (res.statusText !== "OK") {
                    throw Error('Could not get the data fot that resource');
                }
                setError(null);
                setData(res.data)
            })
            .catch(err => {
                setData(null);
                setError(err.message)
                console.log(err.message);
            })
            .finally(() => {
                setIsPending(false);
            });

    }, [url])

    return { data, isPending, error }

}

export default useGet;