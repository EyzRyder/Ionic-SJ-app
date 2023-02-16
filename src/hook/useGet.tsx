
import { useEffect, useState } from "react";
import Axios from 'axios';

export interface ILink {
    "title": string,
    "favicon": string,
    "description": string,
    "img": string
}

export interface IWho {
    "whoRegistered": string,
    "registeredOn": string,
    "status": string,
    "detectionsCounts":string
}

const api = Axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const useGet = (data: string) => {
    const [metaData, setMetaData] = useState<ILink | null>(null);
    const [dataWho, setDataWho] = useState<IWho | null>(null);
    const [isPending, setIsPending] = useState<boolean>(true);
    const [error, setError] = useState<Error|null>(null);

    useEffect(() => {
        if (data === "") {
            setMetaData(null);
            setDataWho(null)
            setIsPending(false)
            setError(null);
            return;
        }
        setIsPending(true);

        api.post("previewlink", { data })
            .then(res => {
                if (res.statusText !== "OK") {
                    throw Error('Could not get the data fot that resource');
                }
                setError(null);
                setMetaData(res.data)
            })
            .catch(err => {
                setMetaData(null);
                setError(err.message)
                console.log(err.message);
            })
            .finally(() => {
                setIsPending(false);
            });

        // setIsPending(true);


        // api.post("registerdata", { data })
        //     .then(res => {
        //         if (res.statusText !== "OK") {
        //             throw Error('Could not get the data fot that resource');
        //         }
        //         setError(null);
        //         setDataWho(res.data)
        //     })
        //     .catch(err => {
        //         setDataWho(null)
        //         setError(err.message)
        //         console.log(err.message);
        //     })
        //     .finally(() => {
        //         setIsPending(false);
        //     });;
    }, [data])

    return { metaData, dataWho, isPending, error }

}

export default useGet;