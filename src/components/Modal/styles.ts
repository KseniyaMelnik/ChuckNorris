import {styled} from "@mui/material";

export const ModalContainer = styled('div')({
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    top: '0',
    left: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

export const ModalContent = styled('div')({
    height: '200px',
    width: '400px',
    backgroundColor: 'white',
    borderRadius: '12px',
    overflow: 'hidden'
})