import "../../css Files/popup.css";
import { Controller, useForm } from "react-hook-form";
import DateTimePicker from 'react-datetime-picker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import axios from "axios";

import 'react-calendar/dist/Calendar.css';
import 'react-datetime-picker/dist/DateTimePicker.css';

const AddEvent = ({ id }) => {
    const { register, control, handleSubmit, formState: { errors }, getValues } = useForm();

    async function onSubmit() {
        console.log("here", getValues(["Title"]));
        const email = id;
        const title = getValues('Title');
        const start = getValues('StartDate');
        const end = getValues('EndDate');
        console.log(title, start, end);
        try {
            await axios.post("http://localhost:5000/addEvent", {
                email, title, start, end
            }).then(res => {
                alert("Event has been added to your Calendar.")
            })
                .catch(e => {
                    alert("Something went wrong. Event could not be added.")
                    console.log(e);
                })
        }
        catch (e) {
            console.log(e);
        }

    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="card-front white">
                    <div class="center-wrap">
                        <div class="section text-center">
                            <h4 class="mb-4 pb-1">Add Event</h4>
                            <div class="form-group mt-1">
                                <input {...register("Title", { required: true })} />
                                <br></br>
                                {errors.Title && <span>This field is required</span>}
                            </div>
                            <div class="form-group mt-3 pt-3" style={{ border: "none" }}>
                                <Controller
                                    name={"StartDate"}
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { onChange, value } }) => (
                                        <DateTimePicker
                                            amPmAriaLabel="Select AM/PM"
                                            calendarAriaLabel="Toggle calendar"
                                            clearAriaLabel="Clear value"
                                            dayAriaLabel="Day"
                                            hourAriaLabel="Hour"
                                            maxDetail="second"
                                            minuteAriaLabel="Minute"
                                            monthAriaLabel="Month"
                                            nativeInputAriaLabel="Date and time"
                                            onChange={onChange}
                                            secondAriaLabel="Second"
                                            value={value}
                                            yearAriaLabel="Year"
                                        />)}
                                /><br></br>
                                {errors.StartDate && <span>This field is required</span>}
                            </div>
                            <div class="form-group mt-3">
                                <Controller
                                    name={"EndDate"}
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { onChange, value } }) => (
                                        <DateTimePicker
                                            amPmAriaLabel="Select AM/PM"
                                            calendarAriaLabel="Toggle calendar"
                                            clearAriaLabel="Clear value"
                                            dayAriaLabel="Day"
                                            hourAriaLabel="Hour"
                                            maxDetail="second"
                                            minuteAriaLabel="Minute"
                                            monthAriaLabel="Month"
                                            nativeInputAriaLabel="Date and time"
                                            onChange={onChange}
                                            secondAriaLabel="Second"
                                            value={value}
                                            yearAriaLabel="Year"
                                        />)}
                                />
                                <br></br>
                                {errors.EndDate && <span>This field is required</span>}
                            </div>
                            
                            <div class="submit-btn">
                                <button type="submit" class="btn btn-block mt-3">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            </form>
        </LocalizationProvider>
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */

    );
}

export default AddEvent