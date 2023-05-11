import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import Sidebar from "../GlobalComponents/Sidebar";
import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";import "../css Files/calendar.css";
import "D:/Task-Tracker/src/css Files/sidebar.css";

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
        start: new Date(2023, 4, 20),
        end: new Date(2023, 4, 23),
    },
];


const EventCalendar = () => {
    return (
        <div className="app">
            <div className="sidenav">
            <Sidebar />
            </div>

            <div class="calendar">
                <Calendar
                class=""
                localizer={localizer} events={events} startAccessor="start" endAccessor="end" 
                style={{ height: 550, margin: "50px"}} />
            </div>
        </div>
    )
}

export default EventCalendar