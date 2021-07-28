import { Checkbox as MuiCheckBox, FormControl, FormControlLabel } from '@material-ui/core';
import React from 'react'

const convertcheckvalue =(name,value)=>({
    target:{
        name,value
    }
})

function CheckBox(props) {
    const{name,label,value,onChange}=props;
    return (
        <FormControl>
            <FormControlLabel
              control={  <MuiCheckBox
                name={name}
                color="primary"
                checked={value}
                onChange={e=>onChange(convertcheckvalue(name,e.target.checked))}

                />}
                label={label}
            />
        </FormControl>
    )
}

export default CheckBox
