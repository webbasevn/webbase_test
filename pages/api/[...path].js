import axios from "axios"
import Cookies from 'cookies'

import requestIp from 'request-ip'
import parser from 'ua-parser-js'

import { decryptData } from "../../components/decryptData"

// api này hoạt động với các request kèm jwt

export default async function handleApi(req, res) {
    // get access token from cookies
    const cookies = new Cookies(req, res, {
        secure: process.env.NODE_ENV !== 'development'
    })

    const jwt = cookies.get('jwt')

    if(!jwt){
        return res.status(403).json({
            success: false,
            statusCode: '01',
            data: {
                msg: 'Hết phiên làm việc'
            }
        })
    }

    const url = process.env.API_URL + req.url

    const ua = parser(req.headers['user-agent'])
    const ip = requestIp.getClientIp(req)

    const device = (ua.device.vendor) ?  ua.device : {
        vendor: 'unknown',
        model: 'unknown',
        type: 'unknown',
    }

    // trường hợp các method get
    if(req.method == "GET"){
        try{
            let config = {
                method: 'get',
                url: url,
                headers: { 
                    'Content-Type': 'application/json', 
                    'Authorization': 'Bearer ' + jwt,
                    'Cookie': req.headers.cookie
                },
            };
            const request = await axios(config)
            return res.status(200).json(request.data)

        }catch(e){
            return res.status(403).json(e.response.data)
        }
    }

    try{

        const dataRequest = decryptData(req.body)
        const stime = Math.floor(new Date().getTime() / 1000)
        if(Math.floor(stime - +dataRequest.stime) > parseInt(process.env.TIME_EXCUSIVE)){
            return res.status(403).json('unauthorized')
        }

        const body = {
            ... dataRequest,
            browser: ua.browser,
            os: ua.os,
            device: device,
            ip
        }

        let config = {
            method: 'post',
            url: url,
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': 'Bearer ' + jwt,
                'Cookie': req.headers.cookie
            },
            data : body
        };

        const request = await axios(config)

        return res.status(200).json(request.data)

    }catch(e){
        return res.status(403).json(e.response.data)
    }
}