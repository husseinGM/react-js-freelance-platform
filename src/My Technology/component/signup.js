import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import {faAdd, faB} from '@fortawesome/free-solid-svg-icons';
import {faMicrosoft, faGoogle} from '@fortawesome/free-brands-svg-icons'
import {useForm} from 'react-hook-form'
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { newUser } from "../redux/slices/userSlice";

import { useState } from "react";
import { useEffect } from "react";

const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const[image, setImage] = useState({})
    const[rePassword, setRePassword] = useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        setImage(image)
    },[image])
    const rePwd = (e) => {
        setRePassword(e.target.value);
        setTimeout(() => {
            
        },3000)
    }
    return (
        <div className="bg-gray"> 
        <div className="container mx-auto py-10">
            <div className="card bg-white shadow-lg lg:w-1/2 sm:w-full mx-auto p-4">
                <h2 className="font-bold text-redP text-center mt-3 text-2xl">Signup</h2>
                <p className="text-xl my-3 mx-2">Signup with:</p>
                <div className="accounts flex sm:justify-center lg:flex-row sm:flex-col my-5">
                    <div className="p-2 sm:mx-auto mx-1 p-2 w-full sm:w-4/5 sm:my-2 lg:mx-2 bg-redP text-white text-center ml-2 cursor-pointer">
                    <FontAwesomeIcon icon={faMicrosoft} /> Microsoft
                    </div>
                    <div className="p-2 sm:mx-auto mx-1 p-2 w-full sm:w-4/5 sm:my-2 bg-redP text-white text-center ml-2 cursor-pointer">
                    <FontAwesomeIcon icon={faGoogle} /> Google
                    </div>
                </div>
                <div className="p-2">
                <form onSubmit={handleSubmit((data) => {
                    if(data.password !== data.rePassword){
                        setRePassword(true)
                        return;
                    }
                    dispatch(newUser({data}))
                    fetch('http://localhost:8000/freelancer', {
                        method: "POST",
                        headers: {"content-type": "application/json"},
                        body: JSON.stringify({
                            name: `${data.name} ${data.lastName}`,
                            skills: data.skills,
                            description: data.description,
                            img: image
                        })
                    })
                    .then(navigate('/'))
                    console.log(image);
                })}>
                    <div className="flex flex-col w-full">
                    <label className='my-2' htmlFor="">First Name:</label>
                    <input 
                    {...register("name", {required: "This field is required", minLength:{value: 5, message: "min length is 5"}})}
                    className="p-2 border-b-2 border-b-redP" type="text" />
                    <p className="mb-4 text-red">{errors.name &&errors.name.message}</p>
                    <label className='my-2' htmlFor="">Last Name:</label>
                    
                    <input 
                    {...register("lastName", {required: "This field is required", minLength:{value: 5, message: "min length is 5"}})}
                    className="p-2 mb-2 border-b-2 border-b-redP" type="text" />
                    <p className="mb-4 text-red">{errors.lastName &&errors.lastName.message}</p>
                    <label className='my-2' htmlFor="">Email:</label>
                    <input 
                    {...register("email", {required: "This field is required", minLength:{value: 10, message: "min length is 5"}})}
                    className="p-2 mb-2 border-b-2 border-b-redP2" type="email" />
                    <p className="mb-4 text-red">{errors.email &&errors.email.message}</p>
                    <label className='my-2' htmlFor="">Password:</label>
                    <input 
                    {...register("password", {required: "This field is required", minLength:{value: 10, message: "min length is 5"}})}
                    className="p-2 mb-2 border-b-2 border-b-redP2" type="password" />
                    <p className="mb-4 text-red">{errors.password &&errors.password.message}</p>
                    <label className='my-2' htmlFor="">re-Password:</label>
                    <input
                    {...register("rePassword", {required: "This field is required", minLength:{value: 5, message: "min length is 5"},})}
                    className="p-2 mb-4 border-b-2 border-b-redP2" type="password" />
                    {rePassword? <p className="mb-4 text-red">password in not same</p>:null}
                    <p className="mb-4 text-red">{errors.rePassword &&errors.rePassword.message}</p>
                    <label className='my-2' htmlFor="">Skills:</label>
                    <input 
                    {...register("skills", {required: "This field is required", minLength:{value: 10, message: "min length is 5"}})}
                    className="p-2 mb-2 border-b-2 border-b-redP2" type="text" />
                    <p className="mb-4 text-red">{errors.skills &&errors.skills.message}</p>
                    <label className='my-2' htmlFor="">Your Descrition:</label>
                    <textarea
                    {...register('description', {required:"please descripe your self", minLength:{value: 10, message: 'this description is very short'}, maxLength:{value: 100, message:'this description is too long'}})}
                    className="p-2 mb-4 border-b-2 border-b-redP2"
                    />
                    <p className="mb-4 text-red">{errors.description &&errors.description.message}</p>
                    <input type="file" name="image" className="p-2 mb-2 border-b-2 border-b-redP2"
                    onChange={e => {
                        setImage(URL.createObjectURL(e.target.files[0]))  
                        }}
                    />
                    <button className="p-3 w-100 bg-redP2 my-4 text-white opacity-90 hover:opacity-100" type="submit">Signup</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Signup;