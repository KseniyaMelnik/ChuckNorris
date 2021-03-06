import {styled} from "@mui/material";

export const AppContainer = styled('div')({
       display: 'flex',
       justifyContent: 'center',
       width: '95%',
       height: '100vh',
       margin: '0 auto',
       boxSizing: 'border-box',
})

export const ContentContainer = styled('div')({
       display: 'flex',
       flexDirection: 'column',
       gap: '20px',
       justifyContent: 'space-between',
       height: '500px',
       minWidth: '400px',
       paddingTop: '100px'
})

export const Controls = styled('div')({
       display: 'flex',
       flexDirection: 'column',
       gap: '10px',
       paddingBottom: '50px'
})