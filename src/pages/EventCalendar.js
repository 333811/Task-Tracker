import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { useLocation } from 'react-router-dom';

import React from "react";

import PopupForm from './EventComponents/PopupForm.js';


import Sidebar from "./EventComponents/Sidebar";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "../css Files/sidebar.css";
import "../css Files/calendar.css";


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

const events = [
    {
        title: "Big Meeting",
        start: new Date(2023, 4, 1),
        end: new Date(2023, 4, 3),
    },
    {
        title: "Vacation",
        start: new Date(2023, 4, 7),
        end: new Date(2023, 4, 10),
    },
    {
        title: "Conference",

        start: new Date("Fri May 19 2023 00:00:00 GMT-0700 (Yukon Time)"),
        end: new Date("Wed May 31 2023 12:00:00 GMT-0700 (Yukon Time)"),
    },
];


const EventCalendar = () => {
    const location = useLocation()
    console.log(location.state.id, location.state.name)

    return (
        <div className="app">
            <div className="sidenav">
<<<<<<< HEAD
                <Sidebar id= {location.state.id} />
=======
                <Sidebar id={location.state.id} />
>>>>>>> 77607529da6cc4772d6a1628ee5704825afebbd6
            </div>
            <div class="calendar">
                <Calendar
                    class=""
                    localizer={localizer} events={events} startAccessor="start" endAccessor="end"
                    style={{ height: 550, margin: "50px" }} />
            </div>
            <PopupForm />
        </div>
    )
}

export default EventCalendar