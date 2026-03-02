import axios from "axios";

const AxiosCommon = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API
})

const useAxios = () => {
    return AxiosCommon
}

export default useAxios
