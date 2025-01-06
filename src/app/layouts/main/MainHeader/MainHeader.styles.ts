import styled from "styled-components";
import { BaseLayout } from "../../../../shared/components/BaseLayout/BaseLayout";
import { LAYOUT, media } from "../../../../shared/styles/constants";

interface Header {
  $isTwoColumnsLayoutHeader: boolean;
}

export const Header = styled(BaseLayout.Header)<Header>`
  line-height: 1.5;
  width: 100vw;
  color: ${LAYOUT.mobile.color};
  align-items: center;
  display: flex;
  justify-content: space-between;

  .user-name {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-right: 8px;
  }

  @media only screen and ${media.md} {
    padding: ${LAYOUT.desktop.paddingVertical}
      ${LAYOUT.desktop.paddingHorizontal};
    height: ${LAYOUT.desktop.headerHeight};
    background-color: ${LAYOUT.desktop.headerBg};
    width: calc(100vw - 260px);
    border-bottom: 1px solid ${LAYOUT.desktop.borderColor};
    color: ${LAYOUT.desktop.color};
    padding: 8px 12px 8px 12px;
  }
`;
