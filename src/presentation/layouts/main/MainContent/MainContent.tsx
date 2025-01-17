import styled, { css } from "styled-components";
import {
  LAYOUT,
  mobileOnlyMedia,
  tabletOnlyMedia,
} from "../../../../data/constants/layouts";
import { BaseLayout } from "../../../shared/components/BaseLayout/BaseLayout";

interface HeaderProps {
  $isTwoColumnsLayout: boolean;
  $collapsed: boolean;
}

export default styled(BaseLayout.Content)<HeaderProps>`
  padding: ${LAYOUT.mobile.paddingVertical} ${LAYOUT.mobile.paddingHorizontal};
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 24px 12px 24px !important;
  width: 100vw;
  padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
  width: calc(100vw - 260px);

  ${(props) =>
    props.$collapsed &&
    css`
      width: 100vw;
    `}

  @media only screen and ${mobileOnlyMedia} {
    width: 100vw;
    padding: 24px;
  }

  @media only screen and ${tabletOnlyMedia} {
    width: calc(100vw - 80px);
  }
`;
