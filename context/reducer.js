import { SET_LOADING_INVOICE, SET_LOADING_DOMAIN,SET_LOADING_TICKETS } from "./constants"

export const initState = {
    invoiceLoading: false,
    domainLoading: false,
    ticketLoading: false,
}

export default function reducer(state, action){
    switch (action.type) {
        // logic here
        case SET_LOADING_INVOICE:
            return {
                ...state,
                invoiceLoading: action.payload
            }
        case SET_LOADING_DOMAIN: 
            return {
                ...state,
                domainLoading: action.payload
            }
        case SET_LOADING_TICKETS: 
            return {
                ...state,
                ticketLoading: action.payload
            }
        default:
            throw new Error('invalid action')
    }
}