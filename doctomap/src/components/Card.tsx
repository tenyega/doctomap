import { Key, useEffect, useState } from 'react';
import Update from '../pages/Update';
import Delete from '../pages/Delete';


 function Card() {
     const [resultDoc, setResultDoc] = useState([]);
     const [resultHos, setResultHos] = useState([]);
     useEffect(() => {
        //Runs only on the first render
     
          
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:3000/doctors?_limit=5');
                const datasDoc = await response.json(); 
                if (datasDoc) {
                    setResultDoc(datasDoc);

                }
            } catch (err) {
                setResultDoc([]);
            }
        }
     fetchData();
    

          
     async function fetchDataHos() {
         try {
             const response = await fetch('http://localhost:3000/hospitals?_limit=5');
             const datasHos = await response.json(); 
             if (datasHos) {
                setResultHos(datasHos);

             }
         } catch (err) {
            setResultHos([]);
         }
     }
         fetchDataHos();
     }, []);
     console.log(resultDoc)
  console.log(resultHos)
  
     
     function handleUpdateDoctor(e: { target: { dataset: { info: any; }; }; }) {
         console.log(e.target.dataset.info);
         const updateID = e.target.dataset.info;
         <Update updateID={updateID} />
     }
    //  function handleDeleteClick(e) {
    //     console.log(e.target.dataset.info);
    //      const deleteID = e.target.dataset.info;
    //      resultDoc.delete(deleteID);

       
     //     }
     

     function handleDeleteDoctor(e) {
        const deleteID = e.target.dataset.info;
       
     }
  return (
      <>
        <div className="flex gap-5 px-5 py-10">
          
        <div className="flex flex-col items-center justify-center min-h-screen gap-5 px-5 py-10 bg-gray-100">
            {resultDoc.map((data: { id: Key | null | undefined, name: string, email: string, specialty:string, value:string}) => (
                <div
                key={data.id}
                className="w-full max-w-md p-5 text-center bg-white border rounded-lg shadow-md border-neutral-300">
                <h4 className="mb-2 text-xl font-semibold text-gray-800">
                    {data.name}
                </h4>
                <h3 className="mb-1 text-gray-600 text-md"> {data.email}</h3>
                <h3 className="text-gray-600 text-md">Specialty: {data.specialty}</h3>
                <button data-info={data.id}  onClick={handleUpdateDoctor} className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Update
                    </button>
                    <button  data-info={data.id} onClick={handleDeleteDoctor} className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300">
                    Delete
                    </button>
                </div>
            ))}
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen gap-5 px-5 py-10 bg-gray-100">
        {resultHos.map((data: { id: Key | null | undefined, name: string, email: string, specialty:string}) => (
            <div
            key={data.id}
            className="w-full max-w-md p-5 text-center bg-white border rounded-lg shadow-md border-neutral-300">
            <h4 className="mb-2 text-xl font-semibold text-gray-800">
                {data.name}
            </h4>
            <h3 className="mb-1 text-gray-600 text-md"> {data.email}</h3>
            <h3 className="text-gray-600 text-md">Specialty: {data.specialty}</h3>
            <button data-info={data.id} className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Update
                </button>
                <button  data-info={data.id} className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300">
                Delete
                </button>
            </div>
        ))}
        </div>
    </div>
      
     
        </>
    );
}
export default Card;