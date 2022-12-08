import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  makeStyles,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import Page from "src/component/Page";
import { BiCopy } from "react-icons/bi";
import Transfer from "src/component/Transfer";
import BackTopbar from "src/component/BackTopbar";
import { useWeb3React } from "@web3-react/core";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import RarityCard from "src/component/RarityCard";

import {
  getContract,
  getWeb3Obj,
  copyTextByID,
  swichNetworkHandler,
} from "src/utils";
import { useHistory } from "react-router-dom";
import { UserContext } from "src/context/User";

const useStyles = makeStyles((theme) => ({
  deatailimage: {
    width: "100%",
    display: "flex",
    padding: "50px 0",
    borderBottom: " 2px solid #fff",
    position: "relative",
    textAlign: "center",
    zIndex: "99",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
    "& img": {
      filter: " drop-shadow(rgba(0, 0, 0, 0.25) 0px 20px 20px)",
      maxHeight: "100%",
      borderRadius: "10px",
      maxWidth: "100%",
    },
  },

  Padding_Top: {
    paddingTop: "50px",
    backgroundColor: "#fff",
  },
  dialogBox: {
    padding: "30px",
  },
  walletPage: {
    "& h4": {
      fontSize: "50px",
      fontWeight: "600",
      color: "#300760",
      marginBottom: "30px",
      "& span": {
        color: "#f30066",
      },
      [theme.breakpoints.down("lg")]: {
        fontSize: "40px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "30px",
      },
    },
    "& p": {
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "27px",
      color: "#7f7f7f",

      "& span": {
        color: "#ec0066",
        cursor: "pointer",
      },
    },
  },
  paper: {
    overflowY: "unset",
  },
  customizedButton: {
    position: "absolute",
    top: "-42px",
    right: "-9px",
    color: "#fff",
  },
  walletBox: {
    background: "#FFFFFF",
    boxShadow: " 0px 4px 8px rgba(0, 0, 0, 0.12)",
    borderRadius: "25px",
    padding: "30px",
    textAlign: "center",
    marginBottom: "50px",
    transition: "02s",
    cursor: "pointer",
    border: "1px solid transparent",
    "&:hover": {
      border: "1px solid #f30065",
    },
    "& p": {
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "27px",
      color: "#fafafa",
      textOverflow: "ellipsis",
      maxWidth: "90%",
      overflow: "hidden",
      position: "relative",
    },
  },
  copy: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: " 0px 4px 8px rgb(0 0 0 / 12%)",
    background: "#000",
    color: "#fff",
    paddingTop: "13px",
    position: "absolute",
    cursor: "pointer",
    padding: "10px",
    borderRadius: "50px",
    border: "2px solid #fff",
    bottom: "-26px",
    [theme.breakpoints.down("xs")]: {
      right: "10px",
      width: "90%",
    },
    "& svg": {
      fontSize: "30px",
    },
  },
  walletdiv: {
    background: "#FFFFFF",
    boxShadow: " 0px 4px 8px rgba(0, 0, 0, 0.12)",
    borderRadius: "10px",
    padding: "20px 15px",
    position: "relative",
    backgroundColor: "#dedede",
    border: "1px solid transparent",
    overflow: "hidden",
    zIndex: "99",
    "& svg": {
      position: "absolute",
      right: "24px",
      fontSize: "80px",
      top: "9px",
      color: "#3c076a40",
      transform: "rotate(-20deg)",
    },
    "& h6": {
      color: "#000",
    },

    "& h1": {
      fontSize: "50px",
      fontWeight: "600",
      lineHeight: "67px",
      letterSpacing: "3px",
      color: "#000",
      [theme.breakpoints.down("lg")]: {
        fontSize: "46px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "30px",
        lineHeight: "40px",
      },
    },

    "&:hover": {
      "& .wallet_box": {
        opacity: "1",
        top: "30%",
        right: "-60px",
      },
      "& .wallet_box:first-child": {
        opacity: "1",
        top: "30%",
        right: "-60px",
      },
    },
  },
  box: {
    height: "150px",
    width: "150px",
    borderRadius: "50%",
    background: "linear-gradient(90deg, #00000052 8.75%, #038ba947 89.69%)",
    position: "absolute",
    top: "100%",
    right: "-150px",
    transition: "0.5s all",
  },
  dialoginputbox: {
    width: "393px",
    height: "35px",
    border: "2px solid rgb(78 67 179)",
    paddingLeft: "10px",
    backgroundColor: "rgb(235 235 235)",
    borderRadius: "8px",
    // boxShadow: "2px 5px 2px #888888ab",

    "@media (max-width: 900px)": {
      width: "291px",
    },
  },
  labeltext: {
    padding: "0em 0em 0.7em",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "27px",
    color: "#52565c",
    display: "block",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    borderRadius: "0.25em",
  },
  alllist: {
    color: "#fff",
    marginTop: "60px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "40px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "20px",
    },
  },
}));

const rarityData = [
  {
    img: "/images/RaritySection/Alien.png",
    text: "Alien:7.0.07%",
  },
  {
    img: "/images/RaritySection/Ape.png",
    text: "Ape:24-0.24%",
  },
  {
    img: "/images/RaritySection/Zombie.png",
    text: "Zombie:88-0.88%",
  },
  {
    img: "/images/RaritySection/Male.png",
    text: "Male:6039-60.39%",
  },
  {
    img: "/images/RaritySection/Female.png",
    text: "Female:3840-38.40%",
  },
  {
    img: "/images/RaritySection/Alien.png",
    text: "Alien:7.0.07%",
  },
];

function Wallet(props) {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const classes = useStyles();
  const user = useContext(UserContext);
  const { account, library, chainId } = useWeb3React();
  const [remove, setRemove] = useState(false);
  const [userBalance, setUserBalance] = useState(0);
  const [isUpdatingWithdrwal, setIsUpdatingWithdrwal] = useState(false);
  const [isFlipSale, setIsFlipSale] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleRemove = () => {
    setRemove(false);
  };

  return (
    <Page title='Wallet'>
      <BackTopbar />
      <Box style={{ background: "#000" }} pb={7}>
        <Box className={classes.deatailimage} mb={10}>
          <img
            src={`https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${account}&choe=UTF-8`}
            alt=''
          />
          <Box className={classes.copy}>
            {" "}
            <input
              id={"wallet_WalletAddress"}
              value={account}
              style={{ display: "none" }}
              onClick={() => copyTextByID("wallet_WalletAddress")}
            />
            <Typography
              variant='body1'
              align='center'
              style={{ color: "#fff", fontSize: "16px", marginRight: "5px" }}
            >
              {/* {account} */}
              9aa3d95b3bc440fa88ea12eaa4456161
            </Typography>
            <BiCopy onClick={() => copyTextByID("wallet_WalletAddress")} />
          </Box>
        </Box>

        <Container maxWidth='md'>
          <Box>
            <Grid container spacing={3} alignItems='center'>
              {account &&
                user.adminWalletAddress.toLowerCase() ===
                  account.toLowerCase() && (
                  <Grid item xs={12} sm={6} md={6}>
                    <Box className={classes.walletdiv}>
                      <Typography variant='h6'>Balance</Typography>
                      <Typography variant='h1'>{userBalance}</Typography>
                      <Box className={`${classes.box} wallet_box`}></Box>
                    </Box>
                  </Grid>
                )}

              <Grid item xs={12} sm={6} md={6}>
                <Box className={classes.walletdiv}>
                  <Typography variant='h6'>Owned Nft</Typography>
                  <Typography variant='h1'>{user.balanceOfValue}</Typography>
                  <Box className={`${classes.box} wallet_box`}></Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={12} align='center'>
                {account &&
                  user.adminWalletAddress.toLowerCase() ===
                    account.toLowerCase() && (
                    <Box mt={5} mb={5}>
                      <Button
                        style={{ marginRight: "10px" }}
                        variant='contained'
                        size='large'
                        color='secondary'
                        // onClick={() => withdrawHandler()}
                        disabled={isUpdatingWithdrwal || isFlipSale}
                      >
                        Claim All{" "}
                        {isUpdatingWithdrwal && <ButtonCircularProgress />}
                      </Button>
                      <Button
                        style={{ margin: "0 9px 0 0 !important" }}
                        variant='contained'
                        size='large'
                        color='secondary'
                        // onClick={flipSaleStateHandler}
                        disabled={isUpdatingWithdrwal || isFlipSale}
                      >
                        Flip Sale State{" "}
                        {isFlipSale && <ButtonCircularProgress />}
                      </Button>
                      {/* <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    onClick={(e) => setRemove(true)}
                  >
                    Remove Whitelist
                  </Button> */}
                    </Box>
                  )}
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Typography variant='h3' align='center' className={classes.alllist}>
              ***All NFTs will be displayed once the admin stores their
              Metadata***
            </Typography>
            <Box mt={4}>
              <Grid container spacing={3} className={classes.cardData}>
                {rarityData.map((data, i) => {
                  return (
                    <Grid item xs={6} sm={4} md={2} lg={2} key={i}>
                      <RarityCard data={data} type='card' index={i} />
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Box>
          <Box mt={8}>
            <Grid container spacing={3}>
              {user.userNFTList.map((data, i) => {
                return (
                  <Grid item xs={12} sm={6} md={3} key={i}>
                    <Transfer data={data} index={i} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Container>
        {/* <Particles /> */}
      </Box>
      <Dialog
        style={{ background: "rgb(12 12 13 / 47%)" }}
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {/* {"Use Google's location service?"} */}
          {/* {"Connect Your Wallet?"} */}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id='alert-dialog-description'
            style={{ maxWidth: "450px" }}
          >
            <label className={classes.labeltext} for='fname'>
              User Wallet Address{" "}
            </label>

            <input
              className={classes.dialoginputbox}
              type='text'
              placeholder='Wallet Address'
              name='fname'
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
          <Button onClick={handleClose} autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        style={{ background: "rgb(12 12 13 / 47%)" }}
        open={remove}
        onClose={handleRemove}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {/* {"Use Google's location service?"} */}
          {/* {"Connect Your Wallet?"} */}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id='alert-dialog-description'
            style={{ maxWidth: "450px" }}
          >
            <label className={classes.labeltext} for='fname'>
              User Wallet Address{" "}
            </label>

            <input
              className={classes.dialoginputbox}
              type='text'
              placeholder='Wallet Address'
              name='fname'
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <Button onClick={handleRemove} autoFocus>
            Cancel
          </Button>
          <Button onClick={handleRemove} autoFocus>
            Remove
          </Button>
        </DialogActions>
      </Dialog>
    </Page>
  );
}

export default Wallet;
