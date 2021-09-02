 
import axios from 'axios'
 

function getAxiosWithTokenObj(){

    // GET TOKEN
       let token = localStorage.getItem("token")
       // add token to headers of req object
       let apiURL ="http://localhost:1212"
       let axiosRequestWithToken= axios.create({
           baseURL:apiURL,
           headers:{
               Authorization: `Bearer ${token}`
               //Here after  Bearer- the white space is must
           }
       })

       return axiosRequestWithToken;
}


export default getAxiosWithTokenObj