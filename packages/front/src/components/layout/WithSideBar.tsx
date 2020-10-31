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
  rightBlock
}) => {
  const user = useContext(UserContext);
  console.log(user);

  return (
    <PageWithSidebar
      sidebar={
        <Flex flexDirection="column">
          <Flex flexDirection="column" flexFlow="1">
            {blocks.map((i) => (
              <Box>{i}</Box>
            ))}
          </Flex>
          {lastBlock}
        </Flex>
      }
    >
      <Flex flexDirection="column" minHeight="100vh" borderLeft="1px solid #4E5868">
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
          <Flex  width="50%" padding="40px 0 0 56px">{children}</Flex>
          {
            rightBlock && <Flex  borderLeft="1px solid #4E5868" width="50%" padding="40px 0 0 56px">{children}</Flex>
          }
        </Flex>
      </Flex>
    </PageWithSidebar>
  );
};

export default WithSideBar;
