import { Button } from "antd";
import styled from "styled-components";

const BaseToggleMenu = styled(Button)`
  background: transparent;
  border: 0;
  display: flex;
  justify-content: end;

  svg {
    width: 12px;
  }
`;

export default BaseToggleMenu;
