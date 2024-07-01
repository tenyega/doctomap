import { NavLink } from "react-router-dom";

export default function Nav() {
   
    return (
        <nav className="flex w-full p-4 m-10 bg-gray-800">
        <div className="container flex items-center justify-between mx-auto">
        <div className="text-xl text-white "></div>
                <ul className="flex space-x-4">
                <li>
                    <NavLink to="/create" className="text-gray-300 hover:text-white"> create</NavLink>
                </li>
                <li>
                    <NavLink to="/read" className="text-gray-300 hover:text-white">Read</NavLink>
                </li>
                <li>
                    <NavLink to="/update" className="text-gray-300 hover:text-white">update</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="text-gray-300 hover:text-white">delete</NavLink>
                </li>
                
            </ul>
        </div>
        </nav>
    );
}