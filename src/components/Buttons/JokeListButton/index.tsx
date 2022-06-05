import React from 'react';
import {Button} from "../styles";

type JokeListButtonProps = {
    openModal: (active: boolean)=> void
}

export const JokeListButton = ({openModal}: JokeListButtonProps) => {
    return <Button onClick={()=> {openModal(true)}}>Open joke list</Button>
}