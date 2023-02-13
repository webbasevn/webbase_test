import useSWR from 'swr'

export function useStimes(){
  
    const {data: stime, isValidating , error, mutate} = useSWR('/get-stime',{
        refreshInterval: 1000 * 30
    })

    return {
        stime
    }

}