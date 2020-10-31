import { Box, Flex, Heading } from "bumbag";
import React from "react";
import { Card } from "bumbag";

interface Props {
  underBlock?: React.ReactNode;
  header?: string;
}

const SignLayout: React.FC<Props> = ({ children, underBlock, header }) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Heading use="h4" marginBottom="20px">
        {header}
      </Heading>

      <Card minHeight="400px">{children}</Card>

      <Box marginTop="20px">{underBlock}</Box>
    </Flex>
  );
};

export default SignLayout;
