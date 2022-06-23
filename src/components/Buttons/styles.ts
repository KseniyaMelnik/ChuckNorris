import {styled} from "@mui/material";

export const Button = styled('button')(({ theme }) => ({
    transition: 'box-shadow 300ms ease-in-out, color 300ms ease-in-out',
    width: '120px',
    boxSizing: 'border-box',
    appearance: 'none',
    backgroundColor: theme.palette.primary.main,
    border: '2px solid #93a1a1',
    borderRadius: '0.25rem',
    color: theme.palette.primary.contrastText,
    cursor: 'pointer',
    fontSize: '1rem',
    lineHeight: '1',
    padding: '0.6em 0',
    textTransform: 'uppercase',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
        boxShadow: '0 0 40px 40px #539ed1 inset',
        color: '#4b5065',
        outline: '0',
    },
    '&:focus': {
        outline: '0'
    },
    '&:disabled': {
    transition: 'none',
    boxShadow: 'none',
    color: '#3d3b3b',
    opacity: '.5',
    cursor: 'auto'
}

}))