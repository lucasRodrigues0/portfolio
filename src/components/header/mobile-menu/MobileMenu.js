import styled from "styled-components";
import { Squash as Hamburger } from 'hamburger-react';
import { useState, useEffect, useRef } from "react";
import { useClickAway } from "react-use";

const BurgerMenu = styled.div`
    display: none;
    color: #fff;

    @media (max-width: 940px) {
        display: block;
    }
`;

// const Menu = styled.nav`
//     display: flex;
//     flex-direction: column;
//     height: fit-content;
//     width: 100%;
//     position: absolute;
//     right: 0;
//     top: 70px;
//     background-color: black;
    
// `;

// const List = styled.ul`
//     border: 1px solid red;
//     padding: 0;
//     position: relative;
// `;

// const ListItem = styled.li`
//     border: 1px solid green;
//     color: white;
//     height: 50px;
//     list-style: none;
//     padding: 0;
//     margin: 0;
//     width: 100%;
// `;

export const MobileMenu = ({language}) => {

    const [isOpen, setIsOpen] = useState(false);

    const ref = useRef(null);

    useClickAway(ref, () => setIsOpen(false));

    useEffect(() => {
        console.log(isOpen);
    }, [isOpen]);

    return (
        <>
            <BurgerMenu>
                <Hamburger toggled={isOpen} size={20} toggle={setIsOpen}/>
            </BurgerMenu>
        </>
    )
}