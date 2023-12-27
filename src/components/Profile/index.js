import instance from '../Interceptor'
import { useEffect } from 'react'

const Profile = () => {
    useEffect(() => {
        details()
    }, [])
    const details = async() => {
        try {
            const response = await instance.get("https://api.escuelajs.co/api/v1/auth/profile")
            if(response.status === 200){
                console.log(response.data)
            }
        }
        catch(e){
            console.log(e)
        }
    }
}
export default Profile