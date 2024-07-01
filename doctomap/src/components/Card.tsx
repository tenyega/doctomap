import { Key, useEffect, useState } from 'react';
import Update from '../pages/Update';


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
  
     
     function handleUpdateClick(e) {
         console.log(e.target.dataset.info);
         const updateID = e.target.dataset.info;
         <Update updateID={updateID} />
     }
    //  function handleDeleteClick(e) {
    //     console.log(e.target.dataset.info);
    //      const deleteID = e.target.dataset.info;
    //      resultDoc.delete(deleteID);

       
    //     }
  return (
      <>
        <div className="flex gap-5 px-5 py-10">
          
        <div className="flex flex-col items-center justify-center gap-5 px-5 py-10 bg-gray-100 min-h-screen">
            {resultDoc.map((data: { id: Key | null | undefined, name: string, email: string, specialty:string, value:string}) => (
                <div
                key={data.id}
                className="p-5 text-center border rounded-lg border-neutral-300 shadow-md bg-white w-full max-w-md">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {data.name}
                </h4>
                <h3 className="text-md text-gray-600 mb-1"> {data.email}</h3>
                <h3 className="text-md text-gray-600">Specialty: {data.specialty}</h3>
                <button data-info={data.id}  onClick={handleUpdateClick} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Update
                    </button>
                    <button  data-info={data.id}  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300">
                    Delete
                    </button>
                </div>
            ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-5 px-5 py-10 bg-gray-100 min-h-screen">
        {resultHos.map((data: { id: Key | null | undefined, name: string, email: string, specialty:string}) => (
            <div
            key={data.id}
            className="p-5 text-center border rounded-lg border-neutral-300 shadow-md bg-white w-full max-w-md">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {data.name}
            </h4>
            <h3 className="text-md text-gray-600 mb-1"> {data.email}</h3>
            <h3 className="text-md text-gray-600">Specialty: {data.specialty}</h3>
            <button data-info={data.id} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Update
                </button>
                <button  data-info={data.id} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300">
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