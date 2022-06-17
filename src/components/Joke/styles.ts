import {styled} from "@mui/material";

export const JokeContainer = styled('div')({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   border: '2px solid violet',
   borderRadius: '5px',
   padding: '5px'
   
})

export const JokeRemoveBtn = styled('div')({
    padding: '5px',
    backgroundColor: 'pink',
    borderRadius: '2px',
    height: '20px',
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
        backgroundColor: 'red',
        transition: '0.3s'
      }
})