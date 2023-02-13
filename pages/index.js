import { Box, Button } from "@mui/material";
import Link from "next/link";

export default function IndexPage(){

    const notification = async () => {
        const requestMission = await Notification.requestPermission()
        
        if(requestMission === "granted") {
            new Notification("Hello World", {
                body: Math.random(),
                data: { hello: 'world'},
                icon: '/logo.png'
            })
        }

    }
    
    return (
       <Box>
            <Button onClick={notification}>
                Notification 1
            </Button>
       </Box>
    )
}