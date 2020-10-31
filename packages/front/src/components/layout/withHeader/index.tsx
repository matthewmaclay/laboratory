import React from "react";
import { PageWithHeader, TopNav, Button, Image, Box, Text } from "bumbag";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

const HeaderLink = styled.span`
  display: flex;
  align-items: center;
  & > a {
    color: inherit;
    font-size: inherit;
    text-decoration: none;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const StyledPageWithHeader = styled(PageWithHeader)`
  display: flex;
  flex-direction: column;
  & > .bb-PageWithHeaderContent {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    & > .bb-Box {
      flex-grow: 1;
    }
  }
`;
const Logo = styled.img`
  width: 66px;
  height: 53px;
  object-fit: cover;
  margin-right: 10px;
`;

const withHeader: React.FC = ({ children }) => {
  const router = useRouter();

  return (
    <StyledPageWithHeader
      header={
        <TopNav selectedId={router.pathname}>
          <TopNav.Section>
            <TopNav.Item marginLeft="50px" marginRight="50px">
              {/* <HeaderLink>
                <Logo src="https://i.mycdn.me/i?r=AEF0PjOBfKSCKs0AX-NHBglGjl1cOYfrnlldZk9YlWosrTGbRQEY6-ICQyXdCj2nC0iPO0i1bS25atCdys1_w0Ps&i=1&fn=external_8" />
                <Link href="/"> Digital Scale</Link>
              </HeaderLink> */}
            </TopNav.Item>
          </TopNav.Section>
        </TopNav>
      }
      border="default"
    >
      {children}
    </StyledPageWithHeader>
  );
};
export default withHeader;
