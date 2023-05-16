import { Controller, useForm } from "react-hook-form";
import DateTimePicker from 'react-datetime-picker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import 'react-calendar/dist/Calendar.css';
import 'react-datetime-picker/dist/DateTimePicker.css';

export default function AddEvent() {
    const { register, control, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="card-front white">
                    <div class="center-wrap">
                        <div class="section text-center">
                            <h4 class="mb-4 pb-3">Add Event</h4>
                            <div class="form-group mt-1">
                                <input {...register("Title", { required: true })} />
                                <br></br>
                                {errors.Title && <span>This field is required</span>}
                            </div>
                            <div class="form-group mt-2">
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
                                <br></br>
                            </div>
                            <input type="submit" class="mt-4"/>
                        </div>
                    </div>
                </div>

                
            </form>
        </LocalizationProvider>
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */

    );
}