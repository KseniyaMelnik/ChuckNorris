import {styled} from "@mui/material";
import Chuck from "./../../assets/chuck_norris.png"

export const ChuckNorris = styled('div')({
    width: '400px',
    height: '80vh',
    backgroundImage: `url(${Chuck})`,
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: 'right',
    backgroundSize: 'contain'

})