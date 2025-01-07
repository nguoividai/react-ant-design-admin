import styled, { css } from "styled-components";
import { BaseLayout } from "../../../../shared/components/BaseLayout/BaseLayout";
import {
  LAYOUT,
  mobileOnlyMedia,
  tabletOnlyMedia,
} from "../../../../shared/styles/constants";

interface Header {
  $isTwoColumnsLayoutHeader: boolean;
  $collapsed: boolean;
}

export const Header = styled(BaseLayout.Header)<Header>`
  line-height: 1.5;
  color: ${LAYOUT.desktop.color};
  align-items: center;
  display: flex;
  justify-content: space-between;
  background-color: ${LAYOUT.desktop.headerBg};
  border-bottom: 1px solid ${LAYOUT.desktop.borderColor};
  height: ${LAYOUT.desktop.headerHeight};
  padding: 8px 12px 8px 12px;

  .user-name {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-right: 8px;
  }

  width: calc(100vw - 260px);

  ${(props) =>
    props.$collapsed &&
    css`
      width: 100vw;
    `}

  @media only screen and ${mobileOnlyMedia} {
    width: 100vw;
    background-color: ${LAYOUT.mobile.headerBg};
    color: ${LAYOUT.mobile.color};
    padding: 24px;
    border-bottom: 0;
  }

  @media only screen and ${tabletOnlyMedia} {
    padding: ${LAYOUT.desktop.paddingVertical}
      ${LAYOUT.desktop.paddingHorizontal};
    background-color: ${LAYOUT.desktop.headerBg};
    width: calc(100vw - 80px);
    color: ${LAYOUT.desktop.color};
    padding: 8px 12px 8px 12px;
  }
`;
