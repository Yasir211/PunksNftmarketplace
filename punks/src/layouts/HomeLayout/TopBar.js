import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Grid,
  MenuItem,
  Box,
  Container,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "./../../component/Logo";
import { AiFillSwitcher, AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { UserContext } from "src/context/User";
import { useWeb3React } from "@web3-react/core";
import { BsDiscord } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import SelectWallet from "src/component/SelectWallet";
import { AlgoContext } from "src/context/Algo";
// import { sortAddress } from "src/utils";
const useStyles = makeStyles((theme) => ({
  menuButton: {
    fontSize: "20px",
    lineHeight: "30px",
    fontWeight: "500",
    borderRadius: 0,
    minWidth: "auto",
    color: "#fff",
    fontFamily: "'URW Geometric', sans-serif",
    height: "31px",
    padding: "0px 7px",
    letterSpacing: "1px",
    margin: "0 7px",
    "@media (max-width: 1200px)": {
      fontStyle: "normal",
      fontSize: "16px",
      lineHeight: "24px",
      color: "#FFF",
      padding: "15px !important",
      height: "51px",
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    "&.active": {
      color: "#fafafa",
    },
    "&:hover": {
      color: "#fafafa",
    },
  },
  login: {
    backgroundColor: "#ec0066",
    marginLeft: "10px",
  },
  loginButton: {
    height: "28px",

    width: "28px",
  },
  toolbar: {
    display: "flex",
    padding: "10px 0",
    justifyContent: "space-between",
    height: "100%",
    "@media (max-width: 900px)": {
      paddingLeft: "75px",
      paddingRight: "20px",
      height: "100%",
    },
  },
  maindrawer: {
    height: "100%",
    background: "#0c0731",
    width: "260px",
  },
  logoDrawer: {
    width: "75px",
    paddingLeft: "10px",
  },
  drawerContainer: {
    padding: "20px 0px ",
    height: "100%",
    // background: "#242424",
    width: "260px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  drawericon: {
    color: "#000",
    position: "absolute",
    top: "6px",
    right: "-10px",
    fontSize: "25px",
  },

  containerHeight: {
    height: "100%",
  },
  mainHeader: {
    justifyContent: "space-between",
    padding: "0px",
  },
  menuul: {
    display: "flex",
    listStyle: "none",
    padding: "0",
    alignItems: "center",
    justifyContent: "flex-end",
    "@media (max-width: 1200px)": {
      display: "block",
    },
    "& a": {
      width: "40px",
      height: "40px",
      borderRadius: " 50%",
      backgroundColor: "#929192",
      color: "#242424",
      marginLeft: "25px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "20px",
      cursor: "pointer",
      [theme.breakpoints.down("md")]: {
        marginBottom: "20px",
      },
      "& svg": {
        fontSize: "25px",
      },
    },
  },
  productLogoStyle: {
    width: "75px",
    "@media(max-width:767px)": {
      width: "55px",
    },
  },
}));

export default function Header({ buttonClick }) {
  const {
    menuButton,
    toolbar,
    menuul,
    drawerContainer,
    drawericon,
    logoDrawer,
    containerHeight,
    mainHeader,
    productLogoStyle,
  } = useStyles();
  const history = useHistory();
  const { account } = useWeb3React();
  const algo = useContext(AlgoContext);
  const user = useContext(UserContext);
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  useEffect(() => {
    if (algo.accountList.length > 1) {
      setIsSelectWalletopen(true);
    } else {
      setIsSelectWalletopen(false);
    }
  }, [algo.accountList]);

  const [isSelectWalletOpen, setIsSelectWalletopen] = useState(true);

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1220
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Container maxWidth='lg'>
        <Toolbar className={toolbar}>
          <Grid
            container
            direction='row'
            justify='flex-end'
            alignItems='center'
            style={{ paddingLeft: "0px" }}
          >
            <Grid item xs={2}>
              {productLogo}
            </Grid>
            {/* <Grid item xs={7} align="center">{getMenuButtons()}</Grid> */}
            <Grid item xs={10} align='center'>
              {menuText}
            </Grid>
            {/* <Grid item xs={2} align='right'>
              {connectBtn}
            </Grid> */}
          </Grid>
        </Toolbar>
      </Container>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={mainHeader}>
        <Drawer
          {...{
            anchor: "right",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            <img className={logoDrawer} src='images/logo.svg' alt='' />
            <Box onClick={handleDrawerClose}>{menuText}</Box>
            {/* <div style={{ padding: "16px" }}>{connectBtn}</div> */}
          </div>
        </Drawer>

        <div>{productLogo}</div>

        <Grid container>
          <Grid item xs={10}></Grid>
          <Grid item xs={2}>
            <IconButton
              className={drawericon}
              {...{
                edge: "start",
                color: "inherit",
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: handleDrawerOpen,
              }}
            >
              <MenuIcon
                width='60px'
                height='60px'
                style={{ color: "#fff", fontSize: "30px" }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    );
  };

  const productLogo = (
    <Box mt={1}>
      <Link to='/'>
        <Logo className={productLogoStyle} />
      </Link>
    </Box>
  );

  const connectBtn = (
    <Button
      variant='contained'
      size='large'
      color='secondary'
      style={{ marginRight: "0", minWidth: "auto" }}
      onClick={() => {
        if (account) {
          history.push("/wallet");
        } else {
          user.connectWallet();
        }
      }}
    >
      {account ? "Wallet" : "Connect Wallet"}
    </Button>
  );

  const menuText = (
    <nav>
      <ul className={menuul}>
        <li onClick={() => buttonClick("banner")}>
          {" "}
          <MenuItem className={menuButton}>Home</MenuItem>
        </li>
        <li onClick={() => buttonClick("algopunk")}>
          {" "}
          <MenuItem className={menuButton}>AlgoPunks</MenuItem>
        </li>
        <li onClick={() => buttonClick("airdrop")}>
          {" "}
          <MenuItem className={menuButton}>Airdrop</MenuItem>
        </li>
        <li onClick={() => buttonClick("mint")}>
          {" "}
          <MenuItem className={menuButton}>Mint</MenuItem>
        </li>
        <li onClick={() => buttonClick("roadmap")}>
          {" "}
          <MenuItem className={menuButton}>Roadmap</MenuItem>
        </li>
        <li onClick={() => buttonClick("rarityGrid")}>
          {" "}
          <MenuItem className={menuButton}>Rarity Guide</MenuItem>
        </li>
        <li onClick={() => buttonClick("mywallet")}>
          {" "}
          <MenuItem className={menuButton}>My Wallet</MenuItem>
        </li>
        <li onClick={() => buttonClick("howtobuy")}>
          {" "}
          <MenuItem className={menuButton}>How To Buy</MenuItem>
        </li>
        <li onClick={() => buttonClick("faq")}>
          {" "}
          <MenuItem className={menuButton}>FAQ</MenuItem>
        </li>
        <li>
          <div>
            <a
              href='https://discord.com/invite/KEmhnMde'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsDiscord fontSize='30px' />
            </a>
          </div>
        </li>
        <li>
          <div>
            <a
              href='https://twitter.com/punksonalgorand'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AiOutlineTwitter fontSize='30px' />
            </a>
          </div>
        </li>
        <li>
          <div>
            <a
              href='https://algopunks.gitbook.io/algopunks-initiative/punks-on-algorand/algopunks-synopsis'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IoNewspaperOutline fontSize='30px' />
            </a>
          </div>
        </li>
        {/* {algo?.accountList?.length > 1 && (
          <li>
            <div onClick={() => setIsSelectWalletopen(!isSelectWalletOpen)}>
              <a href={() => false} rel="noopener noreferrer">
                <AiFillSwitcher title="Swich Account" fontSize="30px" />
              </a>
            </div>
          </li>
        )} */}
      </ul>
    </nav>
  );

  return (
    <>
      <AppBar
        // position={history.location.pathname !== "/" ? "relative" : "absolute"}
        className={history.location.pathname !== "/" ? "InnerHeader" : "Header"}
        elevation={0}
        style={{ backgroundColor: "rgb(36 36 36)" }}
      >
        <Container
          maxWidth={history.location.pathname !== "/" ? "lg" : "fixed"}
          className={containerHeight}
        >
          {mobileView ? displayMobile() : displayDesktop()}
        </Container>
        {isSelectWalletOpen && (
          <SelectWallet
            open={isSelectWalletOpen}
            handleClose={() => setIsSelectWalletopen(false)}
          />
        )}
      </AppBar>
    </>
  );
}
