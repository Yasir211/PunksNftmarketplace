import React from "react";
import {
  makeStyles,
  Typography,
  Container,
  Box,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundSize: "cover",
    backgroundImage: "url(images/AlgoPunkBgImage.png)",
    backgroundAttachment:"fixed",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundColor: "#000000",
    overflow: "hidden",
    width: "100%",
    zIndex: " 99",
    padding:"115px 0px",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      padding:"70px 0px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto",
      padding: "60px 0px 40px",
    },
    "& .mainBox": {
      [theme.breakpoints.down("xs")]: {
        height: "auto",
        padding: "0px 0px",
      },
      "& h1": {
        color: "#FFFFFF",
        [theme.breakpoints.down("xs")]: {
          fontSize: "20px",
        },
      },
      "& .rightText": {
        color: "white",
        display: "flex",
        flexDirection: "column",
        "& h1": {
          textAlign: "center",
        },
      },
      "& h6": {
        marginTop: "15px",
        color: "white",
        width: "80%",
        textAlign: "center",
        textShadow: "0px 1px black",
        "@media(max-width:425px)": {
          width: "100%",
        },
      },
    },
  },
  welcomeImage: {
    "& figure": {
      // width: "100%",
      // height: "350px",
      margin: "0",
      overflow: "hidden",
      padding: "0px",
      "&:hover": {
        "& img": {
          transform: "scale(1.3)",
        },
      },
      "& img": {
        width: "100%",
        height: "auto",
        margin: "0",
        transform: "scale(1.1)",
        transition: "0.5s",
      },
    },
  },
}));

function AlgoPunk() {
  const classes = useStyles();
  return (
    <>
      <Box className={`${classes.root} cssSafari`}>
        <Container maxWidth="lg">
          <Box className="mainBox">
            {/* <Typography variant="h1"> This is AlgoPunk Session</Typography> */}

            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box className="wow bounceInLeft" mt={4} mb={4}>
                  <Grid container spacing={2}>
                    <Grid item xs={3} sm={6} md={6} lg={6}>
                      <Box className={classes.welcomeImage}>
                        <figure>
                          <img
                            src="images/bazaart1.png"
                            width="100%"
                            height="100%"
                          />
                        </figure>
                      </Box>
                    </Grid>
                    <Grid item xs={3} sm={6} md={6} lg={6}>
                      <Box className={classes.welcomeImage}>
                        <figure>
                          <img
                            src="images/bazaart2.png"
                            width="100%"
                            height="100%"
                          />
                        </figure>
                      </Box>
                    </Grid>
                    <Grid item xs={3} sm={6} md={6} lg={6}>
                      <Box className={classes.welcomeImage}>
                        <figure>
                          <img
                            src="images/bazaart3.png"
                            width="100%"
                            height="100%"
                          />
                        </figure>
                      </Box>
                    </Grid>
                    <Grid item xs={3} sm={6} md={6} lg={6}>
                      <Box className={classes.welcomeImage}>
                        <figure>
                          <img
                            src="images/bazaart4.png"
                            width="100%"
                            height="100%"
                          />
                        </figure>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box className="rightText">
                  <Box>
                    <Typography variant="h1" className="wow bounceInRight">
                      WELCOME TO THE <br /> ALGOVERSE!!!
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mt={2}
                  >
                    <Typography variant="h6" className="wow bounceInLeft">
                    AlgoPunks are a collection of 10,000 unique algorithmically generated NFTs which exist on the Algorand blockchain. AlgoPunks are a speculative asset for those bullish on the long-term growth of Algorand. We are the first punk fork to introduce a mutation with the intention of also creating original art.
                    </Typography>
                    <Typography variant="h6" className="wow bounceInRight">
                    Owning an AlgoPunk will give you access to an exclusive community, airdrops, metaverse events and governance rights via the DAO in which you get to determine the future of the project. We also plan to reveal some interesting partnerships we have with other projects in the Algorand ecosystem.
                    </Typography>
                    <Typography variant="h6" className="wow bounceInLeft">
                    Our ultimate goal and long-term vision are to become a blue-chip Algorand NFT project. We believe that power should be delegated to the community. The V2 roadmap and airdrop will be entirely dictated and executed by the proposals of the DAO.
                    </Typography>
                    <Typography variant="h6" className="wow bounceInRight">
                    Join our movement today and feel free to contact us in our Discord if you have any questions or require support.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default AlgoPunk;
