import React from 'react'
import { KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"
import MomentUtils from '@date-io/moment';

function DatePicker(props) {
    const convertdatevalue =(name,value)=>({
        target:{
            name,value
        }
    })
    const{name,value,label,onChange}=props;
    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined"
            label={label}
            formate="MMM/dd/yyyy"
            name={name}
            value={value}
            onChange={date=>onChange(convertdatevalue(name,date))}
            />

        </MuiPickersUtilsProvider>
    )
}

export default DatePicker
