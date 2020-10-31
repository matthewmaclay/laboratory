import { Box, Button, ButtonProps, Flex, Avatar, Text } from "bumbag";
import React from "react";
import Link from "next/link";

interface Props extends ButtonProps {
  img: string;
  name: string;
}

const AvatarWithName: React.FC<Props> = ({ children, img, name }) => (
  <Flex alignItems="center">
    <Avatar width="40px" height="40px" src={img} />
    <Text  marginLeft="12px" fontSize="16px"> {name}</Text> 
  </Flex>
);

export default AvatarWithName;
