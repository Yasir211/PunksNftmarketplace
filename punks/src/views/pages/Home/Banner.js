import React from "react";
import {
  Box,
  makeStyles,
  Button,
  Typography,
  Container,
} from "@material-ui/core";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoNewspaperOutline } from "react-icons/io5";

import { AiOutlineInstagram } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
const useStyles = makeStyles((theme) => ({
  bannerBox: {
    backgroundSize: "cover",
    backgroundImage: "url(./images/banner.JPG)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top right",
    padding: "150px 0px 300px",
    position: "relative",
    backgroundColor: "#000000",
    backgroundSize: "cover",
    overflow: "hidden",
    width: "100%",
    zIndex: " 99",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto",
      padding: "100px 0px 60px",
    },
  },
  headingBox: {
    textAlign: "center",
    marginBottom: "50px",
    marginTop: "5px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "25px",
    },
    "& img": {
      width: "100%",
      maxWidth: "55%",
      [theme.breakpoints.down("xs")]: {
        maxWidth: "65%",
      },
    },
    "& h1": {
      marginTop: "30px",
      [theme.breakpoints.down("xs")]: {
        marginTop: "10px",
        fontSize: "20px",
      },
    },
  },

  bottomimage: {
    left: "50%",
    width: "100%",
    bottom: "0",
    position: "absolute",
    maxWidth: "80%",
    transform: "translateX(-50%)",
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
      // "&:hover": {
      //   background: "transparent",
      //   color: "#fff",
      // },
      "& svg": {
        color: "#2e313a",
        fontSize: "30px",
      },
    },
  },
}));

export default function SkeletonChildrenDemo(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box className={classes.bannerBox}>
      <img src='images/bottombanner.png' className={classes.bottomimage} />
      <Container maxWidth='lg'>
        <Box className={classes.headingBox}>
          <img src='images/heading.png' alt='' width='100%' />
          {/* <img src="images/subheading.png" /> */}
          <Typography variant='h1' className='wow bounce'>
            JOIN THE MISSION!!!
          </Typography>
          <Box mt={5}>
            <ul style={{ display: "flex" }} className={classes.menuul}>
              <li>
                {" "}
                <a href='https://twitter.com/punksonalgorand' target='_blank'>
                  <div>
                    <AiOutlineTwitter />
                  </div>
                </a>
              </li>
              <li>
                <a href='www.discord.gg/KEmhnMde' target='_blank'>
                  <div>
                    <BsDiscord />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href='https://algopunks.gitbook.io/algopunks-initiative/punks-on-algorand/algopunks-synopsis'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div>
                    <IoNewspaperOutline fontSize='30px' />
                  </div>
                </a>
              </li>
            </ul>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
