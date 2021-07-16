import React from 'react';

const Legend = () => {
   return (
      
 
            <div className="flex items-end mt-5">
              <p className="text-3xl font-bold text-techGreen ">&#9866; <span className="text-sm font-light text-black">Présent</span></p>
              <p className="ml-10 mr-10 text-3xl font-bold text-yellow-400">&#9866;<span className="ml-1 text-sm font-light text-black">Absence justifiée</span> </p>
              <p className="text-3xl font-bold text-techRed ">&#9866;<span className="ml-1 text-sm font-light text-black">Absence injustifiée</span> </p>
            </div>
       
    
   );
};

export default Legend;