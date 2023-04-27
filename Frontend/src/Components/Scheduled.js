import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";
import "../index.css"

const SchedulePage = () => {
  const localizer = momentLocalizer(moment);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);


  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const res = await axios.get('/api/schedule');
        console.log(res)
        const eventData = res.data.map((event) => {
          let date = new Date(event.date);
          if (date.getDay() === 6) { // if it's a Saturday
            date.setDate(date.getDate() + 2); // move to Monday
          } else if (date.getDay() === 0) { // if it's a Sunday
            
            date.setDate(date.getDate() + 1); // move to Monday
          } 
          return {
            title: event.course,
            start: date,
            end: date,
            allDay: true
          };
        });
        setEvents(eventData);
       
      } catch (err) {
        console.log(err);
      }
    };
    fetchSchedule();
  }, []);

 


  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

 
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Schedule</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={handleSelectEvent}
      />
      
      
   
    </div>
  );
};

export default SchedulePage;
