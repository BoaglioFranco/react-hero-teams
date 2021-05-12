import { Image } from "@chakra-ui/image";
import React from "react";

interface Props {
  src: string;
  alt?: string;
}

const ImageOverlay: React.FC<Props> = ({ src, alt }) => {
  return (
    <Image
      zIndex={15}
      maxH='70vh'
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      src={src}
      alt={alt}
    ></Image>
  );
};

export default ImageOverlay;
