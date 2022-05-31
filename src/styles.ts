import {styled} from "@mui/material";

export const AppContainer = styled('div')({
       display: 'flex',
       justifyContent: 'center',
       paddingTop: '100px',
       width: '95%',
       height: '100vh',
       margin: '0 auto',
       boxSizing: 'border-box',
})

export const ContentContainer = styled('div')({
       display: 'flex',
       flexDirection: 'column',
       gap: '20px',
       paddingTop: '50px'
})