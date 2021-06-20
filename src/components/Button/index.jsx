import React from "react";
import { StyleButton } from "./style";


export const Button = ({ label, onClick, ...rest }) => {
    return (
        <StyleButton onClick={onClick} {...rest}>{label}</StyleButton>
    )
}
