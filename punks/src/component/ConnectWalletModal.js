import { AlgoContext } from "src/context/Algo";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Typography,
} from "@material-ui/core";
import React, { useContext, useEffect } from "react";

const walletList = [
  { name: "PERA ALGO", keyName: "PeraWallet", img: "" },
  { name: "MY ALGO", keyName: "MyAlgo", img: "" },
  { name: "ALGO SIGNER", keyName: "AlgoSigner", img: "" },
];

export default function ConnectWalletModal({
  open,
  handleClose,
  handleConnectWalletClick,
}) {
  const algo = useContext(AlgoContext);

  useEffect(() => {
    if (algo.account) {
      handleClose();
    }
  }, [algo.account]);

  return (
    <Dialog
      style={{ background: "rgb(12 12 13 / 40%)" }}
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>
        <Box textAlign={"center"}>
          <Typography>{"Seleact address"}</Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        {walletList?.map((data) => {
          return (
            <Box key={data.address} mb={1}>
              <Button
                onClick={() => {
                  if (
                    data.keyName == "PeraWallet" &&
                    handleConnectWalletClick
                  ) {
                    sessionStorage.setItem("walletName", data.keyName);

                    handleConnectWalletClick();
                    handleClose();
                  } else {
                    algo.connectToWallet(data.keyName);
                  }
                }}
                variant='contained'
                size='small'
                color={"primary"}
              >
                {data.name}
              </Button>
            </Box>
          );
        })}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
