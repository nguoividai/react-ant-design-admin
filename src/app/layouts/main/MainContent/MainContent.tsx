import styled from "styled-components";
import { LAYOUT, media } from "../../../../shared/styles/constants";
import { BaseLayout } from "../../../../shared/components/BaseLayout/BaseLayout";

interface HeaderProps {
  $isTwoColumnsLayout: boolean;
}

export default styled(BaseLayout.Content)<HeaderProps>`
  padding: ${LAYOUT.mobile.paddingVertical} ${LAYOUT.mobile.paddingHorizontal};
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 24px 12px 24px;

  @media only screen and ${media.md} {
    padding: ${LAYOUT.desktop.paddingVertical}
      ${LAYOUT.desktop.paddingHorizontal};
  }
`;
