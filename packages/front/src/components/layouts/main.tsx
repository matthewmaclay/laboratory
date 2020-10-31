import { Box, Flex, Heading } from "bumbag";
import React from "react";
import { Card } from "bumbag";

interface Props {
  underBlock?: React.ReactNode;
  header?: string;
}

const MainLayout: React.FC<Props> = ({ children, underBlock, header }) => {
  return (
    <Flex
      padding="40px"
      flexDirection="column"

      alignItems="center"
      minHeight="100vh"
    >
      {children}
    </Flex>
  );
};

export default MainLayout;
