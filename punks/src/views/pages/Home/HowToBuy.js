import React from "react";
import {
  makeStyles,
  Typography,
  Container,
  Box,
  Grid,
} from "@material-ui/core";
import { AiOutlineTwitter } from "react-icons/ai";
import LazyLoad from "react-lazyload";
import { BsDiscord } from "react-icons/bs";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundSize: "cover",
    backgroundImage: "url(./images/HowToBuy.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top right",
    backgroundColor: "#000000",
    overflow: "hidden",
    width: "100%",
    padding: "80px 0px 10px",
    zIndex: " 99",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto",
      padding: "30px 0px",
    },
    "& .mainBox": {
      padding: "40px 0px",
      [theme.breakpoints.down("xs")]: {
        padding: "15px 0px",
      },
      "& h1": {
        color: "#FFFFFF",
        textAlign: "center",
        [theme.breakpoints.down("xs")]: {
          fontSize: "20px",
          lineHeight: "33px",
        },
      },
    },
  },
  leftItem: {
    paddingTop: "10px",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "0px",
    },
    "& h4": {
      color: "white",
      fontSize: "24px",
      margin: "20px 0px",
      textShadow: "1px 3px black",
      [theme.breakpoints.down("xs")]: {
        fontSize: "18px",
      },
    },
  },
  menuul: {
    display: "flex",
    listStyle: "none",
    padding: "0",
    alignItems: "center",
    margin: "0",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      marginBottom: "5px",
    },
    "& div": {
      width: "41px",
      height: "41px",
      borderRadius: "50%",
      color: "#fff",
      marginLeft: "15px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "20px",
      cursor: "pointer",
      backgroundColor: "#929192",
      border: "2px solid #929192",
      [theme.breakpoints.down("xs")]: {
        margin: "0 5px",
      },
      "& svg": {
        color: "#242424",
        fontSize: "30px",
      },
    },
  },
  bottomText: {
    textAlign: "center",
  },
}));

function HowToBuy() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Container maxWidth='md'>
          <Box className='mainBox'>
            <Typography variant='h1' className='wow bounceInRight'>
              HOW TO BUY AN <br /> ALGOPUNK
            </Typography>
            <Box mt={4}>
              <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Box className={classes.leftItem}>
                    <Typography variant='h4' className='wow bounceInLeft'>
                      1) Purchase ALGO from an exchange.
                      <br />
                      (Bit True, Binance, KuCoin or Coinbase)
                    </Typography>
                    <Typography variant='h4' className='wow bounceInRight'>
                      2) Create a Pera Algo, MyAlgo or AlgoSigner wallet. <br />
                    </Typography>
                    <Typography variant='h4' className='wow bounceInLeft'>
                      3) Transfer Algorand from your wallet to your Pera Algo,
                      MyAlgo or AlgoSigner wallet.
                    </Typography>
                    <Typography variant='h4' className='wow bounceInRight'>
                      4) Connect your Pera Algo / MyAlgo / AlgoSigner wallet to
                      our site and mint your first AlgoPunk!
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Box textAlign='center' className='wow bounceInRight'>
                    <LazyLoad>
                      <img src='images/Coin.gif' style={{ width: "100%" }} />
                    </LazyLoad>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Container maxWidth='sm'>
              <Box mt={25} mb={2}>
                <ul style={{ display: "flex" }} className={classes.menuul}>
                  <li>
                    {" "}
                    <a href='https://twitter.com/login' target='_blank'>
                      <div>
                        <AiOutlineTwitter />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href='https://discord.com/' target='_blank'>
                      <div>
                        <BsDiscord />
                      </div>
                    </a>
                  </li>
                </ul>
              </Box>
              <Box textAlign='center' className={classes.bottomText}>
                <Typography variant='body1'>
                  - WE ARE IN NO WAY ASSOCIATED WITH YUGA LABS OR LARVA LABS -
                </Typography>
                <Typography variant='body1'>AlgoPunks 2022 ©</Typography>
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default HowToBuy;
