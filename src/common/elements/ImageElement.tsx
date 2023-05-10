import React, { CSSProperties } from "react";
import { NextPage } from "next";
import Image from "next/image";
const ImageElement: NextPage<{
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
}> = ({ src, className, alt, style }) => {
  return (
    <span className={className} style={style}>
      <Image src={src} width={"100%"} height={"100%"} alt={alt} />
    </span>
  );
};

export default ImageElement;
