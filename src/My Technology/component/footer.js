import { Link } from "react-router-dom";
import { footer } from "../data/data";

const Footer = () => {
    return ( 
        <div className="footer py-10">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 sm:grid-cols-1">
                    <div className="list sm:my-4">
                        <ul className="list-none">
                            {footer.map(item => (
                                <li key={item.id} className="my-2 underline text-redP2"><Link to={item.path}>{item.li}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div className="list-two">
                        <ul className="list-none">
                            {footer.map(item => (
                                <li key={item.id} className="my-2"><img className="w-50 h-10" src={item.img} /></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;