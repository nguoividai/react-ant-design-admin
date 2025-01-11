import styled, { css } from "styled-components";

interface OverlayProps {
  show: string;
}

export const Overlay = styled.div<OverlayProps>`
  position: absolute;
  z-index: 1;
  height: 0;

  ${(props) =>
    props.show !== "false"
      ? css`
          backdrop-filter: blur(6px);
          width: 100vw;
          height: 100vh;
        `
      : undefined}
`;
