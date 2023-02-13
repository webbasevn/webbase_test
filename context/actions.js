import {
    SET_LOADING_TEMPLATES, 
    SET_LOADING_INVOICE, 
    SET_LOADING_DOMAIN,
    SET_LOADING_TICKETS
} from './constants'

export const setLoadingTemplates = payload => ({
    type: SET_LOADING_TEMPLATES,
    payload
})

export const setLoadingInvoice = payload => ({
    type: SET_LOADING_INVOICE,
    payload
})

export const setLoadingDomain = payload => ({
    type: SET_LOADING_DOMAIN,
    payload
})

export const setLoadingTickets = payload => ({
    type: SET_LOADING_TICKETS,
    payload
})