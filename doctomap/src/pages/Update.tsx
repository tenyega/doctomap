import { useState } from "react";
import Nav from "../components/Navbar";

export default function Update(updateID) {
    console.log(updateID);

    const [resultUpdateDoc, setResultUpdateDoc] = useState();
    
       //Runs only on the first render         
       async function fetchData() {
           try {
              
               const response = await fetch('http://localhost:3000/doctors/'+updateID);
               const datasDoc = await response.json(); 
               console.log("data Received", datasDoc)
               if (datasDoc) {
                setResultUpdateDoc(datasDoc);
                   console.log(datasDoc)

               }
           } catch (err) {
            setResultUpdateDoc(' ');
           }
       }
    fetchData();      
   
    console.log(resultUpdateDoc)
    return (
        <>
            <Nav />
            <div>
                <label htmlFor="updateID" className="block text-sm font-medium leading-6 text-gray-900">
                    Name
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    </div>
                    <input
                    type="text"
                    name="name"
                    id="updateID"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder=''
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                    <label htmlFor="currency" className="sr-only">
                        Currency
                    </label>
                    <select
                        id="currency"
                        name="currency"
                        className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    >
                        <option>USD</option>
                        <option>CAD</option>
                        <option>EUR</option>
                    </select>
                    </div>
                </div>
            </div>
        </>
    );
}