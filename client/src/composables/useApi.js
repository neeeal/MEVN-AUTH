import { axiosInstance } from '../utils/axios';
import { userAuthStore } from '../stores/auth';

export default function useApi(){

    const authStore = useAuthStore()

   watchEffect(()=>{
        axiosInstance.interceptors.request.use(
            (config) => {
                if(!config.headers['Authorization']){
                    config.headers['Authorization'] = `Bearer ${authStore.accessToken}`
                }
                return config
            },  
            (error) => Promise.reject(error)
        )

        axiosInstance.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config

                if(error?.response?.status ===403 || error?.response?.status === 401 && !prevRequest.sent){
                    prevRequest.sent = true
                    await authStore.refresh()

                    prevRequest.headers["Authorization"] = authStore.accessToken
                    return axiousInstance(prevRequest)
                }

                return Promise.reject(error)
            }
        )
   })

    return axiosInstance
}