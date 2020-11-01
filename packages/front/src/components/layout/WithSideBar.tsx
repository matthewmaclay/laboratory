import { PageWithSidebar, Flex, Box } from "bumbag";

import { UserContext } from "components/providers/UserProvider";
import { ReactNode, useContext } from "react";

interface Props {
  blocks: ReactNode[];
  lastBlock?: ReactNode;
  header?: ReactNode;
  rightBlock?: ReactNode;
}

const WithSideBar: React.FC<Props> = ({
  children,
  blocks,
  lastBlock,
  header,
  rightBlock,
}) => {
  const user = useContext(UserContext);

  return (
    <PageWithSidebar
      sidebar={
        <Flex height="100%" flexDirection="column">
          <Flex flexDirection="column" flexGrow="1">
            {blocks.map((i, index) => (
              <Box borderTop={index && "1px solid #4E5868"} padding="20px 35px">
                {i}
              </Box>
            ))}
          </Flex>
          <Box borderTop="1px solid #4E5868" padding="20px 35px">
            {lastBlock}
          </Box>
        </Flex>
      }
    >
      <Flex
        flexDirection="column"
        minHeight="100vh"
        borderLeft="1px solid #4E5868"
      >
        {header && (
          <Flex
            borderBottom="1px solid #4E5868"
            alignItems="center"
            padding="12px 72px 12px 56px"
            flexShrink="2"
          >
            {header}
          </Flex>
        )}
        <Flex flexGrow="2">
          <Flex overflowY="scroll" width={!rightBlock?"100%":"50%"} padding="40px 0 0 56px">
            {children}
          </Flex>
          {rightBlock && (
            <Flex
              borderLeft="1px solid #4E5868"
              width="50%"
              padding="40px 0 0 56px"
            >
              {rightBlock}
            </Flex>
          )}
        </Flex>
      </Flex>
    </PageWithSidebar>
  );
};

export default WithSideBar;
