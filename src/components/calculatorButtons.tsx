import React from "react";
import Grid from '@mui/material/Grid';
import Styled from 'styled-components';

const StyledButton = Styled.button`
background-color: #f90os7;
border-radius: 8px;
border: none;
`;

type buttonProps = {
    label: string;
}

function calculatorButtons(props: buttonProps){
    return(
            <StyledButton>
                {props.label}
            </StyledButton>
    )
}

export default calculatorButtons