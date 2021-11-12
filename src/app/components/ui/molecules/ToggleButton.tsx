import React, { useState, useContext } from 'react';
import { ToggleWrapper, ToggleButtonStyle } from '../../styles/ToggleButton.style';
import { StoreContext } from '../../../context/store';

const ToggleButton = () => {
    const [clicked, setClicked] = useState(false);
    const ctx = useContext(StoreContext);
    const handleClick = () => {
        console.log(clicked);
        setClicked(!clicked);
        ctx.setToggle(!clicked)
    }
    return (
        <ToggleWrapper>
            <ToggleButtonStyle  clicked={clicked} onClick={handleClick} />
        </ToggleWrapper>
    )
}

export default ToggleButton