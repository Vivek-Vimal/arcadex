import React from "react";
import Button from "../../components/Button/Button";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";
import styled from "styled-components";

const Desktop = styled.div`
${({ theme }) => theme.mediaQueries.sm}{
  display: block;
}
 display: none;
`;

const Mobile = styled.div`
${({ theme }) => theme.mediaQueries.sm}{
  display: none;
}
 display: block;
`;

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
}

const UserBlock: React.FC<Props> = ({ account, login, logout }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div>
      {account ? (
        <Button
          size="sm"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <Button
          size="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
         <Desktop>Connect to Wallet</Desktop><Mobile>Connect</Mobile>  
        </Button>
      )}
    </div>
  );
};

export default UserBlock;
