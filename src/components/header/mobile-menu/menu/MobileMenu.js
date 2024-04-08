import styled from "styled-components";
import { useEffect } from "react";
import { OPTIONS } from "../../../../utils/constants";

const Menu = styled.nav`
    background-color: #242424;
    display: none;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    transition: all 0.2s ease-in;
    transform: ${props => props.$isOpen ? "translateX(0%)" : "translateX(-100%)"};
    width: 50vw;
    
    @media (max-width: 940px) {
        display: block;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    width: 100%;
`;

const Button = styled.button`
    background-color: transparent;
    border: none;
    color: #fff;
    font-family: "Spline Sans Mono", monospace, sans-serif;
    font-size: 20px;
    height: 50px;
    width: 100%;
`;

export const MobileMenu = ({isOpen, setIsOpen, language}) => {

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    const handleClick = (id) => {
        const element = document.getElementById(id);
        if(element) {
            element.scrollIntoView({behavior: 'smooth'});
            setIsOpen(false);
        }
    }

    return (
        <Menu $isOpen={isOpen} >
            <Wrapper>
            {
                OPTIONS.map(option => {
                    return (
                        <Button 
                            key={`mobile-button-${option.EN}`} 
                            href={`/#${option.EN}`}
                            onClick={() => handleClick(option.EN)}>
                                {option[`${language}`]}
                                <hr />
                        </Button>
                    )
                })
            }
            </Wrapper>
        </Menu>
    )
}