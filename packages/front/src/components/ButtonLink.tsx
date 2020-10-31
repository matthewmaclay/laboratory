import { Box, Button, ButtonProps, Flex } from "bumbag";
import React from "react";
import Link from "next/link";

interface Props extends ButtonProps {
  href: string;
}

const ButtonLink: React.FC<Props> = ({ children, href, ...rest }) => (
  <Link href={href}>
    <Button {...rest}>{children}</Button>
  </Link>
);

export default ButtonLink;
