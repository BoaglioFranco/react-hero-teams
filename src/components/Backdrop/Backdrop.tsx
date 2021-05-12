import { MouseEventHandler } from "react";
import { Box } from "@chakra-ui/layout";

interface Props {
  onClick: MouseEventHandler;
}

export const Backdrop: React.FC<Props> = ({ onClick, children }) => {
  return (
    <Box
      pos="fixed"
      top={0}
      left={0}
      width="100%"
      height="100vh"
      zIndex={10}
      backgroundColor="rgba(0, 0, 0, 0.75);"
      onClick={onClick}
    >
      {children}
    </Box>
  );
};
