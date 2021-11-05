import './App.css';
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda} from '@syncfusion/ej2-react-schedule';
import React from 'react';


class App extends React.Component{
  render(){
    return <ScheduleComponent className="calendarnew" currentView="Month" eventSettings={{dataSource: this.remoteData}}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  }
}

export default App;
