import { messaging } from "../components/firebase";
import { onMessage,getToken } from "firebase/messaging";
import { useEffect } from "react";

export default function IndexPage(){

    useEffect(()=>{
        onMessage(messaging, (payload) => {
            console.log('Message received. ', payload);
            // ...
        });
    })

    return <>Hello</>
}