import { data } from 'react-router-dom';
import  api from '..//service/Api'

export const register = async(data)=>{
    const response = await api.post("/auth/register",data);
    return response.data;
}
export const login = async(data)=>{
    const response= await api.post("/auth/login",data);
    return response.data
}