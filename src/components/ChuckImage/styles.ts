import {styled} from "@mui/material";
import Chuck from "./../../assets/chuk.svg"

export const ChuckNorris = styled('div')({
    width: '400px',
    height: '508px',
    backgroundImage: `url(${Chuck})`,
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: 'right',
    backgroundSize: 'contain',
})