import axios from "axios";

const User_Details_Api_Url = "http://localhost:9025/getUsers";

class UserDetailsService 
{
    getUserDetails()
    {
        return axios.get(User_Details_Api_Url);
    }
}


export default new UserDetailsService;