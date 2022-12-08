import React from "react";
import { Grid, Box, Container, makeStyles } from "@material-ui/core";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";
import Scroll from "react-scroll";
const ScrollLink = Scroll.Link;

// import {} from "react-feather";
const useStyles = makeStyles((theme) => ({
  footerSection: {
    position: "relative",
    padding: " 20px 0px",
    backgrColor: "#202020",
    borderTop: "1px solid #ffffff24",
    zIndex: "99",
    // [theme.breakpoints.up("sm")]: {
    //   paddingTop: theme.spacing(4),
    // },
    // [theme.breakpoints.up("md")]: {
    //   paddingTop: theme.spacing(4),
    // },
    "& p": {
      fontSize: "14px",
      margin: "0",
      padding: "10px 0",
      cursor: "pointer",
    },
    "& a": {
      fontSize: "18px",
      margin: "0",
      cursor: "pointer",
      padding: "10px 0",
      textDecoration: "none",
      color: "#989797",
      "&:hover": {
        textDecoration: "none",
      },
    },
  },
  menuul: {
    display: "flex",
    listStyle: "none",
    padding: "0",
    alignItems: "center",
    margin: "0",
    justifyContent: "end",
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
      backgroundColor:"#929192",
      border: "2px solid #929192",
      [theme.breakpoints.down("xs")]: {
        margin: "0 5px",
      },
      "&:hover": {
        background: "transparent",
        color: "#fff",
      },
    },
  },
  footerBg: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    left: "0",
  },

  borderBottmo: {
    overflow: "hidden",
    background: "#212328",
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
  },

  largeIcon: {
    width: 18,
    height: 18,
    marginRight: "8px",
  },
  icons: {
    justify: "flex-end",
    [theme.breakpoints.down("sm")]: {
      justify: "center",
    },
  },
  inputBox: {
    position: "relative",
  },
  footerBgImg: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    zIndex: "1",
  },
  textFild: {
    position: "relative",

    "& button": {
      position: "absolute",
      top: 0,
      right: 0,
      height: "100%",
      backgroundColor: "#000",
      minWidth: "90px",
      fontSize: "18px",
      fontWeight: "700",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#000",
      },
    },
  },

  bottomfooter: {
    margin: "0",
    background: "#000000",
    height: "40px",
    // padding:"20px",
    color: "#ffffffb5",
  },
  footerlogo: {
    textAlign: "left",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
}));

export default function Liquidity() {
  const classes = useStyles();

  return (
    <Box mt={5} className={classes.footerSection}>
      <Container maxWidth="lg">
        <Grid container justify="space-around" spacing={1} align="center">
          <Grid item xs={12} sm={6}>
            <Box mt={2} className={classes.footerlogo}>
              <ScrollLink smooth={true} duration={500} to="section1">
                <img alt="" src="images/logotype02.png" alt="" width="200px" />
              </ScrollLink>
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} align="right">
            <ul style={{ display: "flex" }} className={classes.menuul}>
              <li>
                {" "}
                <a href="https://twitter.com/punksonalgorand" target="_blank">
                  <div>
                    <AiOutlineTwitter />
                  </div>
                </a>
              </li>
              
              <li>
                <a
                  href="www.discord.gg/KEmhnMde"
                  target="_blank"
                >
                  <div>
                    <FaDiscord />
                  </div>
                </a>
              </li>
              
            </ul>
          </Grid>
        </Grid>
      </Container>
    
    </Box>
  );
}
