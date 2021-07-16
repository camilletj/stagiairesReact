import React, {Component} from 'react';
import Calendar from 'react-calendar';
import Legend from './Legend';
import {format} from 'date-fns';
import {fr} from 'date-fns/locale';

export default class CalendarC extends Component {
   
 state = {
     date: new Date(),
  };

 onChange = date => {
      this.setState({
         date 
      })
  }


render() {
      return (
         <div className="flex flex-col items-center">
            <Calendar
               onChange={this.onChange}
              
            />
            {/* <p>Date: {this.state.date.toLocaleDateString()}</p>
            <p>Jour de la semaine: {this.state.date.getDay()} </p>
            <p>Jour du mois:{this.state.date.getDate()} </p> */}
            <p>Date: {format (this.state.date, 'eeee,dd',{locale:fr})} </p>
            
        
            <Legend/>
         
         </div>
      );
   }


};

