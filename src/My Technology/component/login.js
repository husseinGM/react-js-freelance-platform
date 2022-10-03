import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import {faAdd, faB} from '@fortawesome/free-solid-svg-icons';
import {faMicrosoft, faGoogle} from '@fortawesome/free-brands-svg-icons'
import { useForm } from "react-hook-form";
import { data } from "autoprefixer";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { freelancerUser } from "../redux/slices/userSlice";
import { useState } from "react";
import { useEffect } from "react";
const Login = () => {
    const dataUser = useSelector(state => state.user.userData)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [user, setUser] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(freelancerUser())
    },[])
    return (
        <div className="bg-gray"> 
        <div className="container mx-auto py-10">
            <div className="card shadow-lg lg:w-1/2  sm:w-full rounded bg-white mx-auto  p-4">
                <h2 className="font-bold text-redP text-center pt-3 text-2xl">Login</h2>
                <p className="text-xl my-3 mx-2">login with:</p>
                <div className="accounts sm:justify-center lg:flex-row flex my-5 sm:flex-col">
                    <div className="p-2 sm:w-3/4 mx-2 p-2 sm:mx-auto lg:mr-3 my-2 lg:w-full bg-redP text-white text-center">
                    <FontAwesomeIcon icon={faMicrosoft} /> Microsoft
                    </div>
                    <div className="p-2 sm:w-3/4 mx-2 p-2 sm:mx-auto mx-auto my-2 lg:w-full bg-redP text-white text-center">
                    <FontAwesomeIcon icon={faGoogle} /> Google
                    </div>
                </div>
                <div className="p-2">
                <form onSubmit={handleSubmit(data => {
                    dataUser.map(user => {
                        if(data.name !== user.name){
                            setUser(true)
                        } else {
                            navigate('/')
                        }
                    })
                    })}>
                    <div className="flex flex-col w-full">
                    <label className='my-2' htmlFor="">Name:</label>
                    <input
                    {...register("name", {required: "This field is required", minLength:{value: 5, message: "min length is 5"}})}
                    className="p-2 border-b-2 border-b-redP" type="text" />
                    <p className="mb-4 text-red">{errors.name &&errors.name.message}</p>
                    <label className='my-2' htmlFor="">Email:</label>
                    <input
                    {...register("email", {required: "This field is required"})} 
                     className="p-2 mb-2 border-b-2 border-b-redP" type="email" />
                     <p className="mb-4 text-red">{errors.email &&errors.email.message}</p>
                    <label className='my-2' htmlFor="">Paswword:</label>
                    <input 
                    {...register("password", {required: "This field is required", minLength:{value: 10, message: "min length is 5"}})}
                    className="p-2 mb-2 border-b-2 border-b-redP" type="password" />
                    <p className="mb-4 text-red">{errors.email &&errors.email.message}</p>
                    {user? <p className="text-red my-3">invalid email or password</p>:null}
                    <button className="p-3 w-100 bg-redP my-4 text-white opacity-90 hover:opacity-100" type="submit">Login</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Login;