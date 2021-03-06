import {styled} from "@mui/material";
import { ReactComponent as Fist } from "../../assets/fist.svg"


export const DisplayContainer = styled('div')({
    maxWidth: '300px',
    backgroundColor: '#93a5b2',
    padding: '10px 20px',
    borderRadius: '10px 10px 0px 10px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    '&:before': {
        right: '-7px',
        width: '20px',
        backgroundColor: '#93a5b2',
        borderBottomLeftRadius: '16px 14px',
        content: '""',
        position: 'absolute',
        bottom: 0,
        height: '25px'
    },
    '&:after': {
        right: '-26px',
        width: '26px',
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius:'15px',
        content: '""',
        position: 'absolute',
        bottom: 0,
        height: '25px'
    }

})



