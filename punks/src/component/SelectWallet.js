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
import React, { useContext } from "react";
import { sortAddress } from "src/utils";

export default function SelectWallet({ open, handleClose }) {
  const algo = useContext(AlgoContext);
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
        {algo?.accountList?.map((data) => {
          return (
            <Box key={data.address} mb={1}>
              <Button
                onClick={() => {
                  algo.setAccount(data);
                  handleClose();
                }}
                variant='contained'
                size='small'
                color={
                  algo.account.address == data.address ? "primary" : "secondary"
                }
              >
                {sortAddress(data.address)}
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
