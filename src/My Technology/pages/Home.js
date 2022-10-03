import { Route, Routes } from "react-router";
import AddProject from "../component/addProject";
import Browse from "../component/browse";
import Freelancer from "../component/freelancer";
import FreelancerDetails from "../component/freelancerDetails";
import Login from "../component/login";
import Main from "../component/mainPages";
import ProjectDetails from "../component/projectDetails";
import Signup from "../component/signup";

const Home = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route exact path="/addproject" element={<AddProject />} />
            <Route path="/addproject/:address" element={<ProjectDetails />} />
            <Route exact path="/projects" element={<Browse />} />
            <Route exact path="/search" element={<Freelancer />} />
            <Route exact path="/search/:name" element={<FreelancerDetails />} />
        </Routes>
     );
}
 
export default Home;