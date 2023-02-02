
import { useEffect, useState } from "react";
import Axios from 'axios';
import { ILink } from "./Ilink";

const useGet = (url: string, data: string) => {
    const [dataPage, setDataPage] = useState<ILink|null>(null);
    const [isPending, setIsPending] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        if (data == "") {
            return () => {
                setDataPage(null);
                setIsPending(false)
                setError(null);
            }
        }
        setIsPending(true);
        // if (data.slice(0, 12) !== "https://www.") {
        //     return () => {
        //         setDataPage(null);
        //         setIsPending(false)
        //         setError("Coloque um link do youtube");
        //     }
        // }
        Axios.post(url, { data })
            .then(res => {
                if (res.statusText !== "OK") {
                    throw Error('Could not get the data fot that resource');
                }
                setIsPending(false);
                setError(null);
                setDataPage(res.data)
            })
            .catch(err => {
                setError(err.message)
                console.log(err.message);
            })
    }, [data])

    return { dataPage, isPending, error }

}

export default useGet;