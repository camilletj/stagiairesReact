import React from 'react';


const Form = () => {
   return (
     
     
       
            <div className="relative flex flex-col w-full h-full " >
               <div className="flex flex-col items-center mt-10 font-bold uppercase text-techGreen ">
                  <p className="text-4xl">Samedi</p>
                  <p className="text-9xl">10</p>
               </div>
             
               <div className="flex flex-col items-center mt-20 ">
                  <button className="w-4/5 px-3 py-2 mb-8 text-black bg-white rounded-md shadow-md hover:text-yellow-500">Matin</button>
                  <button className="w-4/5 px-3 py-2 text-black bg-white rounded-md shadow-md hover:text-yellow-500">Après-midi</button>
               </div>
               <div className="flex flex-col items-center ">
                  <button className="absolute w-4/5 px-3 py-2 text-white bg-red-500 rounded-md shadow-md bottom-5 ">
                     Déconnexion
                  </button>
               </div>
            </div>
      
   
    
   );
};

export default Form;