import { defineStore } from "pinia";
import useApi from '../composables/useApi'

export interface User{
    id: number,
    username: string,
    email: string,
    first_name: string,
    last_name: string
}

export interface State{
    user: User,
    accessToken: string
}

export interface LoginData{
    email: string,
    password: string,
}

export interface RegisterData{
    email: string,
    password: string,
}

export const useAuthStore = defineStore('auth', {
    state: (): State =>{
        return {
            user: {} as User,
            accessToken: "" as string
        }

    },
    getters : {
        user: (state: State) => state.user,
        isAuthenticated: state => state.user?.id? true : false
    },

    actions: {
        async login(payload: LoginData){
            try {
                const data = await useApi.post(`/api/auth/login`, payload);
                this.accessToken = data?.access_token
                return data
            } catch (error: Error | any) {
                 throw error.response.message
            }
        },

        async register(payload: RegisterData){
            try {
                const data = await useApi.post(`/api/auth/login`, payload);
                return data
            } catch (error: Error | any) {
                 throw error.response.message
            }
        },

        async getUser(){
            try {
                const data = await useApi.post(`/api/auth/user`);
                return data
            } catch (error: Error | any) {
                 throw error.response.message
            }
        },

        async logout(){
            try {
                const data = await useApi.post(`/api/auth/logout`);
                return data
            } catch (error: Error | any) {
                 throw error.response.message
            }
        },

        async refresh(){
            try {
                const data = await useApi.post(`/api/auth/refresh`);
                return data
            } catch (error: Error | any) {
                 throw error.response.message
            }
        }
    }
})