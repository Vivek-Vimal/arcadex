import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28 28" fill="none">
    <path d="M14 0.666748C6.64001 0.666748 0.666672 6.64008 0.666672 14.0001C0.666672 21.3601 6.64001 27.3334 14 27.3334C21.36 27.3334 27.3333 21.3601 27.3333 14.0001C27.3333 6.64008 21.36 0.666748 14 0.666748ZM14 24.6667C8.12001 24.6667 3.33334 19.8801 3.33334 14.0001C3.33334 8.12008 8.12001 3.33341 14 3.33341C19.88 3.33341 24.6667 8.12008 24.6667 14.0001C24.6667 19.8801 19.88 24.6667 14 24.6667ZM14.4133 12.8534C12.0533 12.2534 11.2933 11.6001 11.2933 10.6267C11.2933 9.50675 12.3467 8.72008 14.0933 8.72008C15.9333 8.72008 16.6267 9.60008 16.68 10.9067H18.96C18.8933 9.12008 17.8 7.48008 15.64 6.94675V4.66675H12.5333V6.92008C10.52 7.34675 8.90667 8.65341 8.90667 10.6667C8.90667 13.0534 10.8933 14.2534 13.7867 14.9467C16.3867 15.5601 16.9067 16.4801 16.9067 17.4401C16.9067 18.1467 16.3867 19.2934 14.1067 19.2934C11.9733 19.2934 11.1333 18.3334 11.0133 17.1067H8.72001C8.85334 19.3734 10.5333 20.6534 12.5333 21.0667V23.3334H15.6533V21.1067C17.68 20.7201 19.28 19.5601 19.2933 17.4134C19.28 14.4801 16.76 13.4667 14.4133 12.8534Z" fill="white"/>
    </Svg>
  );
};

export default Icon;



