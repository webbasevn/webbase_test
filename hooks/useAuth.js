import useSWR from 'swr'
import axiosClient from '../api-client/axiosClient'

export function useAuth(){

    const {data: userData, isValidating, error, mutate} = useSWR(`/get-user`, {
        dedupingInterval: 1000 * 60 * 60 * 24,
        revalidateOnFocus: false,
        shouldRetryOnError : false,
        revalidateIfStale : false
    })

    const firstLoading = userData === undefined && error === undefined

    async function signin(body){

        const request = await axiosClient.post('/signin',body)

        if(request.data.nextStep !== false){
            return `/auth/${request.data.nextStep}/${request.data.accessToken}`
        }

        // mute data
        mutate(request.data.user_data, false)

        // nếu là user mới chưa cấu hình tên và mật khẩu
        if(request.data.user_data.data.isNewUser === true) return '/auth/starter' 

        // nếu là user chưa vertify email
        if(request.data.user_data.data.vertifyEmail === false) return '/auth/vertify-email' 
        
        // return url cần redirect
        return '/application/websites'

    }

    async function signinWith2Fa(body){
        const request = await axiosClient.post('/handle-login-2fa',body)
        await mutate(request.data.user_data, false)
    }

    async function signinWithNewBrowser(body){
        const request = await axiosClient.post('/vertify-new-browser',body)
        await mutate(request.data.user_data, false)
    }

    async function signup(body){
        const request =  await axiosClient.post('/signup',body)
        // mute data
        mutate(request.data.user_data, false)
        return request
    }

    async function signout(){
        await axiosClient.post('/signout')
        await mutate({}, false)
    }

    async function vertifyEmail(values){
        const request = await axiosClient.post('/vertify-email', values)
        await mutate(request, false)
    }

    async function stater(values){
        const request = await axiosClient.post('/starter',values)
        await mutate(request, false)
    }

    async function addUserPhone(values){
        const request = await axiosClient.post('/update-phone-number',values)
        await mutate(request, false)
    }

    async function vertifyPhone(values){
        const request = await axiosClient.post('/vertify-phone',values)
        await mutate(request, false)
    }

    async function updateAccountInfo(values){
        const request = await axiosClient.post('/update-info-user', values)
        await mutate(request, false)
    }

    return {
        userData,
        isValidating,
        error,
        firstLoading,
        signout,
        vertifyEmail,
        stater,
        addUserPhone,
        vertifyPhone,
        updateAccountInfo,
        signin,
        signup,
        signinWith2Fa,
        signinWithNewBrowser
    }
}