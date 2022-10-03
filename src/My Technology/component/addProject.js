import { data } from "autoprefixer";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { budgets } from "../data/data";
import { addProject } from "../redux/slices/projectSlice";

const AddProject = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [budget, setBudget] = useState('$25 - $50');
    const navigate = useNavigate()
    const dispatch = useDispatch()
    //bring the data from store
    const {pAddress} = useSelector(state => state.project.projectData);
    //const myTime = useSelector(state => state.project.projectData.time)
    //handleSubmit
    console.log(register('name'))
    console.log(errors)
    return ( 
        <div className="bg-gray">
            <div className="container mx-auto py-10">
            <div className="card sm:p-1 sm:w-full xsm:w-full rounded shadow-lg bg-white shadow-lg lg:w-3/4 mx-auto p-4">
                <h2 className="font-bold text-redP pt-3 text-2xl">Add Project</h2>
                <div className="p-2">
                <form onSubmit={handleSubmit(data => {
                    dispatch(addProject({data, budget}))
                    navigate(`/addproject/${data.pName}`)
                })}>
                    <div className="flex flex-col w-full">
                    <label className='my-3' htmlFor="">Project Name:</label>
                    <input
                     {...register('pName', {required: "please enter time"})} 
                     defaultValue={pAddress}
                     className="p-2 border-2 border-redP" type="text" />
                    {errors.pName? <p className="text-redP">{errors.pName.message}</p>:<p className="mt-2 mb-5">Include a short title that accurately describes your project</p>}
                    <label className='my-3' htmlFor="">Required Skills:</label>
                    <input  
                    {...register('pSkills', {required:"This is field required"})}
                    className="p-2 mb-2 border-2 border-redP" type="text" />
                    {errors.pSkills? <p className="text-redP">{errors.pSkills.message}</p>:<p className="mt-2 mb-5">Determine the most important skills required to implement your project</p>}
                    <label className='my-3' htmlFor="">Project Details:</label>
                    <textarea 
                    {...register('pDesc', {required:"This is required"})} 
                    className="p-2 mb-2 border-2 border-redP" type="email" />
                    {errors.pDesc? <p className="text-redP">{errors.pDesc.message}</p>:<p className="mt-2 mb-5">Enter a detailed description of your project</p>}
                    <div className="flex lg:flex-row sm:flex-col">
                        <div className="budget lg:w-1/2 sm:w-full sm:mx-auto mx-2 sm:my-2">
                            <label className="my-2" htmlFor="">Expected Budget:</label>
                            <select className="p-2 border-2 border-redP w-full" name="" id="">
                                {budgets.map(budget => <option key={budget.id} onClick={e => setBudget(e.target.value)} className='hover:bg-redP hover:text-white' value={budget.budget}>{budget.budget}</option>)}
                            </select>
                        </div>
                        <div className="time lg:w-1/2 sm:w-full sm:mx-auto my-2">
                            <label htmlFor="">Expected Delivery Time</label>
                            <div className="group sm:w-2/3 flex lg:w-full">
                                <input {...register('time', {required: "please enter time"})} className='p-2 border-2 border-redP w-full' type="text" />
                                <div className="bg-redP p-2 text-white">Days</div>
                            </div>
                            <p className="text-redP">{errors.time && errors.time.message}</p>
                        </div>
                    </div>
                    <button  className="p-3 w-100 bg-redP my-4 text-white opacity-90 hover:opacity-100" type="submit">Signup</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
     );
}
export default AddProject;