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
        backgroundColor: '#c4c0be',
        borderBottomLeftRadius:'15px',
        content: '""',
        position: 'absolute',
        bottom: 0,
        height: '25px'
    }

})

export const FistButton = styled(Fist)({
    display: "block",
    flex: "0 0 100%",
    maxWidth: '40px',
    height: '40px',
    cursor: 'pointer',
    transition: '0.3s easy-in-out',
    '&:hover': {
        transition: '0.3s easy-in-out',
        '& g': {
            fill: 'brown'
        }
    },
    '&:active': {
        transform: 'scale(0.8)',
        transition: '0.3s easy-in-out',
    }
})



