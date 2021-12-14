import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

const StartButton = ({ callBack }) => {
    return ( 
        <StyledStartButton onClick={callBack}>Start Game</StyledStartButton>
     );
}
 
export default StartButton;