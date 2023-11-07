import DateTimePicker from "react-datetime-picker";

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker/>
        </LocalizationProvider>
    );
}