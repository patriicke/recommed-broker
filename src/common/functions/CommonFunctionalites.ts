import React from "react";

export const FormChange = (e:React.ChangeEvent<HTMLInputElement>, setValue:Function) =>{
    setValue(e.target.value)
}