import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg {...props} width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.9867 24.7201L6.16 17.0801L4 18.7601L16 28.0934L28 18.7601L25.8267 17.0667L15.9867 24.7201ZM16 21.3334L25.8133 13.6934L28 12.0001L16 2.66675L4 12.0001L6.17333 13.6934L16 21.3334ZM16 6.04008L23.6533 12.0001L16 17.9601L8.34667 12.0001L16 6.04008Z" fill="white"/>
</Svg>
  );
};

export default Icon;


