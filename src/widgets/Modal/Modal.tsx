import React from "react";
import styled from "styled-components";
import Heading from "../../components/Heading/Heading";
import Flex from "../../components/Flex/Flex";
import { ArrowBackIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { InjectedProps } from "./types";

interface Props extends InjectedProps {
  title: string;
  hideCloseButton?: boolean;
  onBack?: () => void;
  bodyPadding?: string;
}

const StyledModal = styled.div`
  background: ${({ theme }) => theme.modal.background};
  // box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  // border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 18px;
  width: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  margin: 0 1rem;
  ${({ theme }) => theme.mediaQueries.xs} {
    width: auto;
    min-width: 360px;
    max-width: 100%;
  }
  ${({ theme }) => theme.mediaQueries.sm}{
    margin: 0;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(246, 140, 18, 1);
  align-items: center;
  padding: 12px 24px;
`;

const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`;

const Grid = styled.div`
  display: grid;
  ${({ theme }) => theme.mediaQueries.sm}{
    grid-template-columns: repeat(3, minmax(8rem, 1fr));
  }
  grid-template-columns: repeat(2, minmax(8rem, 1fr));
  grid-gap: 2rem;
  padding: 2rem;
  place-items: center;
`;

const Modal: React.FC<Props> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding = "24px",
}) => (
  <StyledModal>
    <ModalHeader>
      <ModalTitle>
        {onBack && (
          <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
            <ArrowBackIcon color="secondary" />
          </IconButton>
        )}
        <Heading>{title}</Heading>
      </ModalTitle>
      {!hideCloseButton && (
        <IconButton variant="text" onClick={onDismiss} aria-label="Close the dialog">
          <CloseIcon color="secondary" />
        </IconButton>
      )}
    </ModalHeader>
    <Flex flexDirection="column" p={bodyPadding} >   { /*  p={bodyPadding} */  }
      {children}
    </Flex>
  </StyledModal>
);

export default Modal;
