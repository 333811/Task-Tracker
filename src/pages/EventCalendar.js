import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { useLocation } from 'react-router-dom';

import React, { useState } from "react";

import PopupForm from './EventComponents/PopupForm.js';


import Sidebar from "./EventComponents/Sidebar";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "../css Files/sidebar.css";
import "../css Files/calendar.css";

import axios from "axios";


//import { useState } from "react";
//import DateFnsUtils from '@date-io/date-fns';
//import DatePicker from "react-datepicker";


const locales = {
    "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const EventCalendar = () => {

    const [events,setEvents] = useState([])
    
    const location = useLocation()
    async function getEvents(id) {
        const email = id;
        try {
            await axios.post("http://localhost:5000/events", {
                email
            }).then(res => {
                const events = res.data;
                var eventList=[]
                for (var i = 0; i < events.length; i++) {
                    var event = events[i];
                    const etitle =event["title"]
                    const estart = new Date(event["start"])
                    const eend = new Date(event["end"])
    
                    const object={
                        title: etitle,
                        start: estart,
                        end: eend,
                        
                    }
                    eventList.push(object)
                    setEvents(eventList)
                }
            })
                .catch(e => {
                    console.log(e);
                })
        }
        catch (e) {
            console.log(e);
        }
    };
    
    getEvents(location.state.id)

    return (
        <div className="app">
            <div className="sidenav">
                <Sidebar id={location.state.id} />
            </div>
            <div class="calendar">
                <Calendar
                    localizer={localizer} events={events} startAccessor="start" endAccessor="end"
                    style={{ height: 550, margin: "50px" }} />
            </div>
            <PopupForm id={location.state.id} />
        </div>
    )
}

export default EventCalendar