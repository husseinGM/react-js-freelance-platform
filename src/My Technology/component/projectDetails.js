import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

const ProjectDetails = () => {
    const data = useSelector(state => state.project.projectData)
    const param = useParams()
    const address = useState(param.address);
    const navigate = useNavigate()
    const post = e => {
        e.preventDefault();
        alert('You will get best projects from us, Thank you for your trust')
        navigate('/')
    }
    return (
        <section className="bg-gray"> 
            <div className="container mx-auto pb-8">
                <div className=" lg:w-1/2 md:w-full mx-auto">
                    <h2 className="mb-5 pt-10 font-400">Project Details:</h2>
                    <div className="card p-3 bg-white shadow-md">
                        <p className="my-3 p-3">Project Name: <span className="font-bod text-xl text-redP2">{data.pAddress}</span></p>
                        <p className="my-3 p-3">Required Skills: <span className="font-bod text-xl text-redP2">{data.pSkills}</span></p>
                        <p className="my-3 p-3">Project Description: <span className="font-bod text-xl text-redP2">{data.pDescription}</span></p>
                        <p className="my-3 p-3">Project Time: <span className="font-bod text-xl text-redP2">{data.pTime}</span></p>
                        <p className="my-3 p-3">Project Budget: <span className="font-bod text-xl text-redP2">{data.pBudget}</span></p>
                        <button onClick={post} className="p-2 text-white rounded mx-auto my-4 bg-redP2">Post Now</button>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default ProjectDetails;