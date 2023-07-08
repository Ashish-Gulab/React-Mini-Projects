import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';

const App=()=>{
    const[number,setNumber]=useState(0);

    const InCrement=()=>{
        setNumber(number+1);
    }

    const deCrement=()=>{
        if(number>0)
        {
            setNumber(number-1);
        }
        else
        {
            alert("You have reached the 0th number");
        }
    }

    return(<>
    <div className='main_div'>
        <div className='center_div'>
            <h1>{number}</h1>
            <div className='btn_div'>
                <Stack direction="row" spacing={10}> 
                    <Tooltip title="Add">
                        <Button onClick={InCrement} className='btn_green'><AddIcon/></Button>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Button onClick={deCrement} className='btn_red'><DeleteIcon/></Button>
                    </Tooltip>
                </Stack>
            </div>
        </div>
    </div>
    </>);
}

export default App;