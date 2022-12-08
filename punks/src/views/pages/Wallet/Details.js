import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Container,
  Typography,
  makeStyles,
  Grid,
  Button,
  DialogTitle,
  DialogContentText,
} from "@material-ui/core";
import Page from "src/component/Page";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import BackTopbar from "src/component/BackTopbar";
import axios from "axios";
import { useWeb3React } from "@web3-react/core";
import { UserContext } from "src/context/User";
import { toast } from "react-toastify";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import {
  copyTextByID,
  getContract,
  getWeb3ContractObject,
  getWeb3Obj,
  swichNetworkHandler,
} from "src/utils";
import { useLocation } from "react-router-dom";
import CryptoChipsABI from "src/ABI/CryptoChipsABI.json";
import { ACTIVE_NETWORK, CryptochipsContract } from "src/constants";
// import Particles from "../../../component/Particles";

const useStyles = makeStyles((theme) => ({
  deatailimage: {
    width: "100%",
    height: "50vh",
    display: "flex",
    padding: "50px 0",
    position: "relative",
    textAlign: "center",
    justifyContent: "center",
    borderBottom: " 2px solid rgb(78, 67, 179)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    zIndex: "99",
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
  walletdiv: {
    background: "#FFFFFF",
    boxShadow: " 0px 4px 8px rgba(0, 0, 0, 0.12)",
    borderRadius: "10px",
    padding: "20px 15px",
    position: "relative",
    backgroundColor: "#dedede",
    border: "1px solid transparent",
    overflow: "hidden",
    "& svg": {
      position: "absolute",
      right: "24px",
      fontSize: "80px",
      top: "9px",
      color: "#3c076a40",
      transform: "rotate(-20deg)",
    },
    "& h6": {
      color: "rgb(78, 67, 179)",
    },
    "& h1": {
      color: "#000",
      marginTop: "10px",
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
    backgroundColor: "#e21ae752",
    position: "absolute",
    top: "100%",
    right: "-150px",
    transition: "0.5s all",
  },
  boxheading: {
    color: "#fff",
    "& h3": {
      fontSize: "30px",
      paddingBottom: 0,
      color: "#00ffab",
      marginBottom: "10px",
    },
    "&  div": {
      border: "1px solid #fff",
      display: " inline-block",
      padding: "20px 20px",
      borderRadius: "5px",
      marginTop: "20px",
      color: "#fff",
      fontWeight: "600",
      height: "20px",
    },
  },
  filterbox: {
    display: "inline-block",
    flesWarp: "warp",
    minWidth: "90px",
    boxShadow: "rgb(0 0 0 / 13%) 0px 5px 15px",
    border: "1px solid rgb(78, 67, 179)",
    padding: "10px",
    color: "#fff",
    borderRadius: "10px",
    margin: "10px 5px",
    transition: " 02s",
    "&:hover": {
      transform: "translateY(-10px)",
    },
    "& label": {
      fontSize: "15px",
      paddingBottom: 0,
      color: "rgb(255, 255, 255)",
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
  dialoginputbox: {
    width: "393px",
    height: "35px",
    border: "2px solid #fff",
    paddingLeft: "10px",
    backgroundColor: "rgb(235 235 235)",
    borderRadius: "8px",
    // boxShadow: "2px 5px 2px #888888ab",

    "@media (max-width: 900px)": {
      width: "291px",
    },
  },
}));

function Wallet(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { account, library, chainId } = useWeb3React();
  const user = useContext(UserContext);
  const location = useLocation();
  const [nftDetails, setnftDetails] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [ownerOf, setOwnerOf] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [transferAddress, setTransferAddress] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getDetails = async (id) => {
    setIsLoading(true);
    try {
      const contract = await getWeb3ContractObject(
        CryptoChipsABI,
        CryptochipsContract
      );

      const ownerOf_L = await contract.methods.ownerOf(id.toString()).call();
      setOwnerOf(ownerOf_L);

      const filter = await contract.methods.tokenURI(id.toString()).call();
      const res = await axios.get(filter);

      if (res.status === 200) {
        setnftDetails({ id: id.toString(), nfdData: res.data });
        console.log(" res.data", res.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log("ERROR", error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (location.search) {
      const ids = location.search.split("?");
      if (ids[1]) {
        getDetails(ids[1]);
      }
    }
  }, [location]);

  const transferFromHandler = async () => {
    if (chainId === ACTIVE_NETWORK) {
      if (transferAddress && transferAddress !== "") {
        const web3 = await getWeb3Obj();
        const dataRes = web3.utils.isAddress(transferAddress);
        if (dataRes) {
          try {
            setIsUpdate(true);
            const contract = getContract(
              CryptochipsContract,
              CryptoChipsABI,
              library,
              account
            );

            const res = await contract.transferFrom(
              account,
              transferAddress,
              nftDetails.id
            );
            await res.wait();
            toast.success("Success");
            setIsUpdate(false);
            getDetails(nftDetails.id);
            user.getCurrentMintingDetails();
            handleClose();
          } catch (error) {
            setIsUpdate(false);

            toast.error(error.message);
            console.log("error", error);
          }
        } else {
          toast.error("Please enter valid address");
        }
      } else {
        toast.error("Please enter address");
      }
    } else {
      swichNetworkHandler();
    }
  };

  return (
    <Page title="RiseAngle">
      <BackTopbar />
      {!isLoading ? (
        <>
          {nftDetails ? (
            <Box pb={5}>
              <Box
                className={classes.deatailimage}
                style={{ backgroundImage: "url('images/wallet_banner.jpeg')" }}
                mb={10}
              >
                <img
                  src={
                    nftDetails.nfdData.image
                      ? nftDetails.nfdData.image
                      : "images/wallet_2.jpeg"
                  }
                  alt=""
                />
              </Box>

              <Container>
                <Box mt={5} mb={7}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Box className={classes.boxheading}>
                        <Typography variant="h3" style={{ color: "#fff" }}>
                          {" "}
                          #{nftDetails.id} - {nftDetails.nfdData.name}{" "}
                        </Typography>
                        <Typography
                          variant="body2"
                          style={{ wordBreak: "break-all" }}
                          onClick={() => copyTextByID("details_ownerOf")}
                        >
                          <input
                            id={"details_ownerOf"}
                            value={ownerOf}
                            style={{ display: "none" }}
                          />
                          <strong>Owned by:</strong> {ownerOf}
                        </Typography>
                        {/* <div>Accumulated NCT: 2566.60</div> <br /> */}
                        {!account && (
                          <Button
                            variant="contained"
                            size="large"
                            color="secondary"
                            style={{ marginTop: "20px" }}
                            onClick={() => user.connectWallet()}
                          >
                            Connect Wallet
                          </Button>
                        )}
                        {ownerOf &&
                          account &&
                          account.toLowerCase() === ownerOf.toLowerCase() && (
                            <Button
                              variant="contained"
                              size="large"
                              color="secondary"
                              style={{ marginTop: "20px" }}
                              onClick={handleClickOpen}
                            >
                              Transfer
                            </Button>
                          )}
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant="h3" style={{ color: "#fff" }}>
                        {" "}
                        Traits{" "}
                      </Typography>
                      {nftDetails &&
                        nftDetails.nfdData?.attributes.map((data, i) => {
                          return (
                            <Box className={classes.filterbox}>
                              <label>{data.trait_type}</label>
                              <Typography variant="body1">
                                {data.value}
                              </Typography>
                            </Box>
                          );
                        })}
                    </Grid>
                  </Grid>
                </Box>
              </Container>
              {/* <Particles /> */}
            </Box>
          ) : (
            <Box mt={5} mb={5} display="flex" justifyContent="center">
              <Typography>No Data Found</Typography>
            </Box>
          )}
          <Dialog
            style={{ background: "rgb(12 12 13 / 47%)" }}
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            disableBackdropClick={isUpdate}
            disableEscapeKeyDown={isUpdate}
          >
            <DialogTitle id="alert-dialog-title">
              {/* {"Use Google's location service?"} */}
              {/* {"Connect Your Wallet?"} */}
            </DialogTitle>
            <DialogContent>
              <DialogContentText
                id="alert-dialog-description"
                style={{ maxWidth: "450px" }}
              >
                <label className={classes.labeltext} for="fname">
                  User Wallet Address{" "}
                </label>

                <input
                  className={classes.dialoginputbox}
                  type="text"
                  placeholder="Wallet Address"
                  name="fname"
                  autoFocus
                  value={transferAddress}
                  disabled={isUpdate}
                  onChange={(e) => setTransferAddress(e.target.value)}
                />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              {/* <Button onClick={handleClose}>Disagree</Button> */}
              <Button onClick={handleClose} disabled={isUpdate}>
                Cancel
              </Button>
              <Button disabled={isUpdate} onClick={() => transferFromHandler()}>
                Transfer {isUpdate && <ButtonCircularProgress />}
              </Button>
            </DialogActions>
          </Dialog>
        </>
      ) : (
        <Box mt={5} mb={5} display="flex" justifyContent="center">
          <Typography>Loading...</Typography>
          <ButtonCircularProgress />
        </Box>
      )}
    </Page>
  );
}

export default Wallet;
