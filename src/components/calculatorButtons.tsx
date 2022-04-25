import React, {FunctionComponent} from "react";
import Grid from '@mui/material/Grid';
import Styled from 'styled-components';
import Button from '@mui/material/Button';

// const StyledButton = Styled(Button)`
// background-color: #FF0000;
// border-radius: 50px;
// border: none;
// padding: 10px;
// font-size: 400px;
// `;



interface buttonProps {
    label: string,
    styleType?: string,
}

const calculatorButtons:FunctionComponent<buttonProps> = ({label, styleType}) => {
    if (styleType === "big"){
       return (<Button variant="contained" color="success">
            {label}
        </Button>)
    }
    return(

        //variant="contained" color={styleType === "big" ? "success" : undefined}
        <Button >
            {label}
        </Button>    
    )
}

export default calculatorButtons