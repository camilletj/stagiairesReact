import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Legend from './Legend';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const CalendarC = ({ updateDate,date }) => {
  
   return (
      <div className="flex flex-col items-center">
         <Calendar
            onChange={updateDate}
         />
         {/* <p>Date: {this.state.date.toLocaleDateString()}</p>
            <p>Jour de la semaine: {this.state.date.getDay()} </p>
            <p>Jour du mois:{this.state.date.getDate()} </p> */}
         <p>Date: {format(date, 'eeee,dd', { locale: fr })} </p>


         <Legend />

      </div>
   );
}


export default CalendarC;

