import styled from "styled-components";
import { Squash as Hamburger } from 'hamburger-react';

const BurgerButton = styled.div`
    display: none;
    position: absolute;
    left: 0;
    color: #fff;

    @media (max-width: 940px) {
        display: block;
    }
`;

export const BurgerMenu = ({isOpen, setIsOpen}) => {

    return (
            <BurgerButton>
                <Hamburger toggled={isOpen} size={20} toggle={setIsOpen}/>
            </BurgerButton>
    )
}