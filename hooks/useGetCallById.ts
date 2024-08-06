import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk"
import { useEffect, useState } from "react"

//custom hook
export const useGetCallById = (id: string | string[])=>
{
    const [call,setCall]=useState<Call>()
    const [isCallLoading,setIsCallLoading] = useState(true)

    const client=useStreamVideoClient();

    useEffect(()=>{
        if(!client) return;

        const loadCall=async()=>{
            const {calls} = await client.queryCalls({
                filter_conditions:{
                    id
                }
            })

            if(calls.length>0) setCall(calls[0])

            setIsCallLoading(false)

        }//we did it in a function since we cant write async await in a useEffect except if its in a fct
        loadCall();

    },[client, id]);

    return { call , isCallLoading }

}//fetches and manages the state of a specific video call by its ID