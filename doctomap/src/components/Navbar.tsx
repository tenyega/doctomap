import { NavLink } from "react-router-dom";

export default function Nav() {
   
    return (
        <nav className="flex w-full p-4 m-10 bg-gray-800">
        <div className="container flex items-center justify-between mx-auto">
        <div className="text-xl text-white "></div>
                <ul className="flex space-x-4">
                <li>
                    <NavLink to="/doctors" className="text-gray-300 hover:text-white">Doctors</NavLink>
                </li>
                <li>
                    <NavLink to="/hospitals" className="text-gray-300 hover:text-white">Hospitals</NavLink>
                </li>
             
                <li>
                    <NavLink to="/" className="text-gray-300 hover:text-white">Acceuil</NavLink>
                </li>
                
                
            </ul>
        </div>
        </nav>
    );
}