import { useEffect, useState } from "react";
import Nav from "../components/Navbar";
import { NavLink } from "react-router-dom";

export default function Doctors() {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        //Runs only on the first render
     
          
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:3000/doctors');
                const datasDoc = await response.json(); 
                if (datasDoc) {
                    setDoctors(datasDoc);

                }
            } catch (err) {
                setDoctors([]);
            }
        }
     fetchData();
     }, []);
  console.log(doctors)

    return (
        <>
            <Nav />
            <div className="flex flex-row flex-wrap items-center justify-center min-h-screen gap-5 px-5 py-10 bg-gray-100">
        {doctors.map((data: { id: Key | null | undefined, name: string, email: string, specialty:string}) => (
            <div
            key={data.id}
            className="w-full max-w-md p-5 text-center bg-white border rounded-lg shadow-md border-neutral-300">
            <h4 className="mb-2 text-xl font-semibold text-gray-800">
                {data.name}
            </h4>
            <h3 className="mb-1 text-gray-600 text-md"> {data.email}</h3>
            <h3 className="text-gray-600 text-md">Specialty: {data.specialty}</h3>
            <ul className="flex flex-row flex-wrap items-center justify-center space-x-4">
                <li>
                    <NavLink to="/doctorUpdate" className="text-blue-400 hover:text-white">Update</NavLink>
                </li>
                <li>
                    <NavLink to="/doctorDelete" className="text-blue-400 hover:text-white">Delete</NavLink>
                    </li>
                    </ul>
            </div>
        ))}
        </div>
            
        </>
    );
}