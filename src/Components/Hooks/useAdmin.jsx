import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useAdmin = () => {
    const {user} = useAuth()
    const {data : isAdmin,refetch,isLoading} = useQuery({
        queryKey : ['admin' , user?.email],
        queryFn: async () => {
            const res = await axios.get(`https://assignment-12-server-rouge.vercel.app/users/admin/${user?.email}`)
            console.log(res.data.role);
            return res.data.role
        },
        enabled:!!user?.email
        
    })
    return [isAdmin,isLoading]
}
export default useAdmin;