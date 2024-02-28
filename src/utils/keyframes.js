import { keyframes } from "styled-components";

export const slideFromLeftAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%);
  }

  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const slideFromRightAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(50%);
  }

  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const slideFromTopAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }

  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const slideFromBottomAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;