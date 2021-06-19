import React from "react";
import { StyleButton } from "./style";


export const Button = ({label, onClick})=>{
    return(
        <StyleButton onClick = {onClick}>{label}</StyleButton>
    )
}

