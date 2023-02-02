
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
}

const useGet = (data: string) => {
    const [metaData, setMetaData] = useState<ILink | null>(null);
    const [dataWho, setDataWho] = useState<IWho | null>(null);
    const [isPending, setIsPending] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        if (data == "") {
            setMetaData(null);
            setDataWho(null)

            setIsPending(false)
            setError(null);
            return;
        }
        setIsPending(true);

        Axios.post("http://localhost:3000/api/previewlink", { data })
            .then(res => {
                if (res.statusText !== "OK") {
                    throw Error('Could not get the data fot that resource');
                }
                setIsPending(false);
                setError(null);
                setMetaData(res.data)
            })
            .catch(err => {
                setMetaData(null);
                setError(err.message)
                console.log(err.message);
            });
        
        setIsPending(true);

        Axios.post("http://localhost:3000/api/registerdata", { data })
            .then(res => {
                if (res.statusText !== "OK") {
                    throw Error('Could not get the data fot that resource');
                }
                setIsPending(false);
                setError(null);
                setDataWho(res.data)
            })
            .catch(err => {
                setDataWho(null)
                setError(err.message)
                console.log(err.message);
            });
    }, [data])

    return { metaData, dataWho, isPending, error }

}

export default useGet;