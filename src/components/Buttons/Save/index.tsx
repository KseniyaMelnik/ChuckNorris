import React from 'react';
import {Button} from "../styles";
import SaveIcon from '@mui/icons-material/Save';
import { syncBuiltinESMExports } from 'module';

type SaveProps = {
    setExport: (value: boolean)=> void
}

export const Save = ({setExport}: SaveProps) => {
    return <Button onClick={()=> {setExport(true)}}><SaveIcon/>Save</Button>
}