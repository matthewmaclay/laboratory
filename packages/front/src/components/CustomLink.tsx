import { Box, Button, ButtonProps, Link as BumbagLink } from "bumbag";
import React from "react";
import Link from "next/link";

interface Props extends ButtonProps {
  href?: string;
  onClick?: () => void;
}

const ButtonLink: React.FC<Props> = ({ children, href, onClick }) => {
  if (onClick) return <BumbagLink onClick={onClick}>{children}</BumbagLink>;
  return (
    <Link href={href}>
      <BumbagLink>{children}</BumbagLink>
    </Link>
  );
};

export default ButtonLink;
