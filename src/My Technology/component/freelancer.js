import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import useFetch from "../../custom hook/useFetch";
import { freelancer } from "../data/data";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import {freelancerUser} from '../redux/slices/userSlice' 
import { data } from "autoprefixer";
const Freelancer = () => {
    const {userData} = useSelector(state => state.user)
    const {pending, err} = useSelector(state => state.user.status)
    const [filter, setFilter] = useState([])
    const [img, setImage] = useState([])
    const[toggle, setToggle] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const freelancerFilter = (checked,skills) => {
        if(checked === true){
            const filterSkills = userData.filter(skill => skill.skills === skills);
            setFilter(prev => prev.concat(filterSkills))
            console.log()
        }else if(checked === false) {
            const outSkills = filter.filter(skill => skill.skills !== skills)
            setFilter(outSkills);
        }
    }
    useEffect(() => {
        setFilter(filter)
    },[filter])
    useEffect(() => {
        setToggle(toggle)
    },[toggle])
    useEffect(() => {
        AOS.init({once:true});
        AOS.refresh()
    },[])
    useEffect(() => {
        dispatch(freelancerUser())
    },[])
    return ( 
        <div className="freelancer bg-gray">
            <div className="container font-bold mx-auto py-5 w-4/3">
                <h2 className="text-redP2 py-4">Choose your Freelancer</h2>
                {pending && <div>Pending...</div>}
                {err && <div>{err}</div>}
                <button onClick={e => {
                    setToggle(!toggle);
                }} className="md:hidden sm:block ml-auto"><i className="fa fa-bars" aria-hidden='true'></i></button>
                    
                <div className="lg:fixed sm:bolck ml-auto sm:z-10 p-5 lg:w-64 right-0">
                <div className={toggle ? 'card bg-white block': 'card bg-white lg:block hidden transition-all duration-500'}>
                        <ul className="list-none">
                            {freelancer.map(item => <li className="p-2" key={item.id}><input onClick={(e) => freelancerFilter(e.target.checked,e.target.name)} className="py-2" type="checkbox" name={item.skills} data-filter={item.skills} id="" /> {item.skills}</li>)}
                        </ul>
                    </div>
                </div>
                <div className="grid  grid-cols-1 md:w-3/4 sm:w-full">
                    {filter.length !== 0 ?
                    filter.map((item) => (
                        <div key={item.id} data-aos='zoom-in' className="card p-2">
                            <div className="flex">
                                <div className="img mx-5"><img className="w-12 h-12 mx-3 rounded-full" src={item.img} /></div>
                                <div className="details">
                                    <h3 className="text-redP2 my-4">{item.name}</h3>
                                    <h4 className="my-2">skills: {item.skills}</h4>
                                    <p>{item.description}</p>
                                    <button onClick={() => navigate(`/search/${item.name}`)} className="bg-redP2 p-3 text-white ">Hire Me</button>
                                </div>
                            </div>
                        </div>
                    )):
                    userData.map((item) => (
                        <div key={item.id} data-aos='zoom-in' className="card p-2">
                            <div className="flex">
                                <div className="img mx-5"><img className="w-12 h-12 mx-3 rounded-full" src={item.img} alt={item.img} /></div>
                                <div className="details">
                                    <h3 className="text-redP2 my-4">{item.name}</h3>
                                    <h4 className="my-2">skills: {item.skills}</h4>
                                    <p>{item.description}</p>
                                    <button onClick={() => navigate(`/search/${item.name}`)} className="bg-redP2 p-3 text-white ">Hire Me</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default Freelancer;