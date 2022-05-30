import {styled} from "@mui/material";
import Chuck from "./assets/chuck_norris.png"

export const AppContainer = styled('div')({
       width: '100%',
       height: '100vh',
       backgroundImage: `url(${Chuck})`,
       backgroundRepeat: 'no-repeat',
       backgroundPositionX: 'right',
       backgroundSize: 'contain'

})