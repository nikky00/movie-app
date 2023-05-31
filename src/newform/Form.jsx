import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { UseFetch } from '../hooks/UseFetch';
import { UseFormValidation } from '../hooks/UseFormValidation';

export const Form = () => {
    const [formError, setFormError] = useState({});
    let apiUrl = 'https://api.themoviedb.org/3/authentication/token/new?api_key=140d648a01229b143fbaadee47387efd'

    const { data, reFetchApi } = UseFetch(apiUrl);

    const userDetails = {
            username:"",
            password:"",
            request_token:""
    }
    const [ authDetails, setAuthDetails] = useState(userDetails);
    const handleAuth = (e) => {
        setAuthDetails({
            ...authDetails, 
            [e.target.name]: e.target.value,
        })
    }
    const navigate = useNavigate();

    useEffect(() => {
        reFetchApi();
    }, []);

    const loginDetails= async () => {
    const detailsUrl='https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=140d648a01229b143fbaadee47387efd'
        
        try{
            const apiResponse =  await fetch(detailsUrl , {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    username:authDetails.username,
                    password:authDetails.password,
                    request_token: data.data.request_token
                })   
            })
            apiResponse && apiResponse?.status === 200 ? navigate("/popularmovies") : navigate("/");
            
        }catch(e){
            console.log(e)
        }
       }
 const handleSubmit= (e) => {
   e.preventDefault();
   setFormError(UseFormValidation(authDetails));
   if(Object.keys(formError).length === 0){
    loginDetails();
   }else{
    showAlert()
   }
      
}

const showAlert = () => {
    
   Swal.fire({
        
      title: 'error logging in?',
    //   text: message,
      icon: 'warning',
      timer: 3000, 
      showCancelButton: false,
      showConfirmButton:false,
    
    }) 
}

    return (
        <div className='flex items-center justify-center h-screen' >
            <div className="w-full max-w-xs">
                <form   className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Username
                        </label>
                        <small className="text-[red]">{formError?.username}</small>
                        <input className= {`shadow appearance-none border ${formError?.username?.length > 0 && authDetails?.username?.length < 0 && 'border-red-500'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} id="username" type="text" placeholder="Username" name="username"  value={authDetails.username} onChange={handleAuth} />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <small className="text-[red]">{formError?.password}</small>
                        <input className={`shadow appearance-none border ${formError?.password?.length > 0 && "border-red-500"} rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`} id="password" type="password" placeholder="******************" name="password"  value={authDetails.password} onChange={handleAuth} />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="flex items-center justify-between">
                   
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>
                            Sign In
                    </button>
                 
                        
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/">
                            Forgot Password?
                        </a>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2020 Acme Corp. All rights reserved.
                </p>
            </div>
        </div>
    )
}
