import {styled} from "@mui/material";
import {ReactComponent as Fist} from "../../assets/fist.svg";

export const FistContainer = styled(Fist)({
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