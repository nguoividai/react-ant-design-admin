import styled from "styled-components";
import { BaseLayout } from "../../../../shared/components/BaseLayout/BaseLayout";
import {
  LAYOUT,
  mobileOnlyMedia,
  tabletOnlyMedia,
} from "../../../../shared/styles/constants";

interface Header {
  $isTwoColumnsLayoutHeader: boolean;
}

export const Header = styled(BaseLayout.Header)<Header>`
  line-height: 1.5;
  color: ${LAYOUT.desktop.color};
  align-items: center;
  display: flex;
  justify-content: space-between;
  background-color: ${LAYOUT.desktop.headerBg};

  .user-name {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-right: 8px;
  }

  width: calc(100vw - 260px);

  @media only screen and ${mobileOnlyMedia} {
    width: 100vw;
    background-color: ${LAYOUT.mobile.headerBg};
    color: ${LAYOUT.mobile.color};
    padding: 24px;
  }

  @media only screen and ${tabletOnlyMedia} {
    padding: ${LAYOUT.desktop.paddingVertical}
      ${LAYOUT.desktop.paddingHorizontal};
    height: ${LAYOUT.desktop.headerHeight};
    background-color: ${LAYOUT.desktop.headerBg};
    width: calc(100vw - 80px);
    border-bottom: 1px solid ${LAYOUT.desktop.borderColor};
    color: ${LAYOUT.desktop.color};
    padding: 8px 12px 8px 12px;
  }
`;
