import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="24" {...props} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6667 21.3334H21.3333V24.0001H10.6667V21.3334ZM10.6667 16.0001H21.3333V18.6667H10.6667V16.0001ZM18.6667 2.66675H7.99999C6.53333 2.66675 5.33333 3.86675 5.33333 5.33341V26.6667C5.33333 28.1334 6.51999 29.3334 7.98666 29.3334H24C25.4667 29.3334 26.6667 28.1334 26.6667 26.6667V10.6667L18.6667 2.66675ZM24 26.6667H7.99999V5.33341H17.3333V12.0001H24V26.6667Z" fill="white"/>
</Svg>

  );
};

export default Icon;


