import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Client, team, why } from "../data/data";
import { addName } from "../redux/slices/projectSlice";
import AOS from "aos";
import "aos/dist/aos.css";
const Main = () => {
    const [slider, setSlider] = useState(1);
    const[projectName, setProjectName] = useState('')
    const {pAddress} = useSelector(state => state.project.projectData);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    setTimeout(() => {
        if(slider === Client.length){
            setSlider(1)
        }else{
            setSlider(slider + 1)
            
        }
    },5000)
    const submit = () => {
        dispatch(addName(projectName))
        navigate('/addproject')
    }
    
    useEffect(() => {
        AOS.init({once:true});
        AOS.refresh()
    },[])
    useEffect(() => {
        window.scrollTo(0, 0)
    },[location])
    
    return (
        <> 
        <section className="main" id='main'>
            <div className="container mx-auto">
                <div className="flex justify-center h-80 items-center">
                    <div className="pr">
                        <h1 className="my-2 text-white text-2xl font-400 items">Complete your projects online easily and safely</h1>
                        <h3 className="text-white text-xl my-5">Hire professional freelancers to get your business done</h3>
                        <div className="relative lg:block sm:hidden rounded p-2 bg-white flex justify-center">
                            <input onChange={e => setProjectName(e.target.value)} placeholder="Enter Your Project Name" type="text" className="p-2 w-2/3" />
                            <button onClick={submit} className="p-2 absolute right-2 bg-redP2 rounded text-white">Start Your Project</button>
                        </div>
                        <button className="bg-redP2 sm:mx-auto p-2 text-white rounded lg:hidden sm:block"><Link to={'/addproject'}>Start Now</Link></button>
                    </div>
                </div>
            </div>
        </section>
        <section className="work pb-10 pt-5">
            <div className="container mx-auto">
            <h2 className="text-center text-2xl font-bold py-4 text-redP2">How it Work?</h2>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
                <div className="first" data-aos='fade-left'>
                    <div className="fa text-center text-redP2 w-full"><i className="fa fa-plus text-center"></i></div>
                    <h2 className="my-5 text-center">Add Project</h2>
                    <p className="text-center">add your project detail and required skills to accomblish and start recieve a template</p>
                </div>
                <div className="second">
                <div className="fa text-center w-full text-redP2"><i className="fa fa-check text-center"></i></div>
                    <h2 className="my-5 text-center">Choose the right offer</h2>
                    <p className="text-center">Among the proposals submitted for your project, choose the one that suits the requirements of the project and then start the implementation phase.</p>
                </div>
                <div className="third" data-aos='fade-right'>
                <div className="fa text-center w-full text-redP2"><i className="fa fa-plus"></i></div>
                    <h2 className="my-5 text-center">Receive Your Project</h2>
                    <p className="text-center">Your chosen freelancer will work with you until the job is completed and your project is fully delivered as you intended it to be.</p>
                </div>
            </div>
            </div>
        </section>
        <section className="why bg-redP2 py-5">
            <div className="container mx-auto">
                <h2 className="text-center text-white mt-5 mb-8 text-2xl font-bold">Why My Technology?</h2>
                <div className="grid gap-3 md:grid-cols-3 sm:grid-cols-1">
                    {why.map(ans => (
                        <div className="details p-1" data-aos='flip-up'>
                            <div className="w-full flex justify-center">
                            <img className="text-white text-center h-20 w-20" src={ans.img} alt={ans.title} />
                            </div>
                            <h2 className="text-white text-2xl text-center my-4">{ans.title}</h2>
                            <p className="text text-md text-center text-white">{ans.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <section className="client">
            <div className="container mx-auto relative pt-4 relative">
                <div className="grid grid-cols-1">
                <h2 className="text-center text-redP2 py-5 text-2xl font-bold">What our client say?</h2>
                    {Client.map(i => (
                        <div key={i.id} className={i.id === slider ? 'slider pb-8 active': 'slider pb-8'}>
                            <h2 className="text-center text-redP2 my-4">{i.name}</h2>
                            <p className="text-center">{i.opinion}</p>
                        </div>
                    ))}
                    </div>
            </div>
        </section>
        <section className="team bg-redP2">
            <div className="container mx-auto">
            <h2 className="py-4 text-white text-center text-xl font-bold">Meet our awesome team</h2>
                <div className="grid justify-center md:grid-cols-3 sm:grid-cols-1">
                    {team.map(member => (
                        <div data-aos='flip-down' key={member.id} className='mb-7'>
                        <div className="w-full">
                        <img className="w-40 h-40 rounded-full mx-auto" src={member.img} alt={member.img} />
                        </div>
                        <h2 className="py-4 text-white text-center">{member.name}</h2>
                        <div className="flex justify-center text-white text-md">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-instagram mx-2"></i>
                            <i className="fab fa-linkedin"></i>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Main;