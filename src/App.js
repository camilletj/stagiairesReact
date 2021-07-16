import React,{ useState } from 'react';
import './App.css';

import CalendarC from './components/CalendarC';
import Form from './components/Form';
import Logo from './components/Logo';
import Profil from './components/Profil';

const  App = () => {
const [state, setState] = useState({
  date:new Date()
})
const getValue = (e) => {
  setState({
    date:e
  })
  console.log('getValue',e)
}
return (

    <div >
        {console.log(state)}
        <div className="flex">
          <aside className="flex flex-col w-1/5 h-screen bg-gray-300 border-l-8 shadow-2xl border-techGreen ">
            <Logo/>
            <Form date={state.date}/>
          </aside>
          <div className="w-full ">
            <header className="flex justify-end mt-10 mr-20">
              <Profil/>
            </header>
            <div className="mt-10">
              <CalendarC updateDate={getValue} date={state.date}/>
            </div>
           
          </div>
        </div>
    </div>

  
)


  
}

export default App;