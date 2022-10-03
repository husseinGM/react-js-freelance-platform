import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { budgets } from "../data/data";
import { addProject } from "../redux/slices/projectSlice";

const FreelancerDetails = () => {
    const [budget, setBudget] = ('$25 - $50')
    const {name} = useParams();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    return ( 
        <div className="bg-gray py-10">
            <div className="container mx-auto">
            <div className="card rounded bg-white shadow-lg w-3/4 mx-auto my-10 p-4">
                <h3 className="font-bold text-redP mt-3 text-2xl">Add Project</h3>
                <h2 className="mt-5 mb-3">freelancer: <span className="text-redP2 my-8 font-bold">{name}</span></h2>
                <div className="p-2">
                <form onSubmit={handleSubmit(data => {
                    dispatch(addProject({data,name}))
                })}>
                    <div className="flex flex-col w-full">
                    <label className='my-3' htmlFor="">Project Name:</label>
                    <input 
                     {...register('pName', {require:"This is required"})}
                     className="p-2 border-2 border-redP" type="text" />
                    {errors.pName? <p className="text-redP">{errors.pName.message}</p>:<p className="mt-2 mb-5">Include a short title that accurately describes your project</p>}
                    <label className='my-3' htmlFor="">Required Skills:</label>
                    <input  
                    {...register('pSkills', {require:"This is field required"})}
                    className="p-2 mb-2 border-2 border-redP" type="text" />
                    {errors.pSkills? <p className="text-redP">{errors.pSkills.message}</p>:<p className="mt-2 mb-5">Determine the most important skills required to implement your project</p>}
                    <label className='my-3' htmlFor="">Project Details:</label>
                    <textarea 
                    {...register('pDesc', {require:"This is required"})} 
                    className="p-2 mb-2 border-2 border-redP" type="email" />
                    {errors.pDesc? <p className="text-redP">{errors.time.message}</p>:<p className="mt-2 mb-5">Enter a detailed description of your project</p>}
                    <div className="flex">
                        <div className="budget w-1/2 mx-2">
                            <label className="my-2" htmlFor="">Expected Budget:</label>
                            <select className="p-2 border-2 border-redP w-full" name="" id="">
                                {budgets.map(budget => <option key={budget.id} onClick={e => setBudget(e.target.value)} className='hover:bg-redP hover:text-white' value={budget.id}>{budget.budget}</option>)}
                            </select>
                        </div>
                        <div className="time md:w-1/2 mx-2">
                            <label htmlFor="">Expected Delivery Time</label>
                            <div className="group flex w-full">
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
 
export default FreelancerDetails;