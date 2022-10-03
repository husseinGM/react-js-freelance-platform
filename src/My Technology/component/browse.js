import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { projects } from "../redux/slices/projectSlice";
import AOS from "aos";
import "aos/dist/aos.css";
const Browse = () => {
    const data = useSelector(state => state.project.projects.projectsData)
    const {pending, err} = useSelector(state => state.project.status)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(projects()); //createAsyncThunk
    },[])
    useEffect(() => {
        AOS.init({once:true});
        AOS.refresh()
    },[])
    return ( 
        <div className="bg-gray">
            <div className="container mx-auto py-10">
                <h2 className="text-redP2 py-5 ml-4 text-2xl font-bold">Completed Projects:</h2>
                {pending && <div>Pending...</div>}
                {err && <div>couldn't fetch data from resource</div>}
                <div className={`grid md:grid-cols-3 sm:grid-cols-1 gap-5`}>
                    {data.map(project => (
                        <div key={project.id} data-aos='zoom-out' className="card rounded bg-white shadow-md p-2">
                            <h3 className="text-redP2 my-4 text-xl font-bold pl-2">{project.title}</h3>
                            <img className="cover mx-auto my-4 rounded h-60 w-60" src={project.img} alt={project.title} />
                            <h4 className="my-5">Project: <span className="text-redP2">{project.type}</span></h4>
                            <h4 className="my-2"> Budget: <span className="text-redP2">{project.budget}</span></h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default Browse;