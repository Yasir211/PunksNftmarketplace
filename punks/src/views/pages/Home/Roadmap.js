import React from "react";
import { Box, Container, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bannerBox: {
    position: "relative",
    backgroundImage: "url(images/RoadmapBackground.png)",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#000",
    backgroundSize: "cover",
    backgroundPosition: "Center Center",
    padding: " 115px 0px ",
    zIndex: " 1",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto",
      padding: "100px 0px 60px",
    },
  },
  textbox: {
    "& h1": {
      fontSize: "55px",
      fontWeight: "600",
      lineHeight: "67px",
      letterSpacing: "3px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "30px",
        lineHeight: "40px",
      },
      "& sup": {
        fontFamily: "URW Geometric",
        fontSize: "35px",
      },
    },
  },
  roadmapBox: {
    width: "100%",
    maxWidth: "340px",
    margin: "auto",
    textAlign: "center",
    position: "relative",
    "& .roadmap-text": {
      position: "relative",
      width: "100%",
      maxWidth: "222px",
      margin: "0 auto",
      "&::after": {
        content: "''",
        position: "absolute",
        height: "25px",
        width: "25px",
        borderRadius: "50%",
        backgroundColor: "#fff",
        top: "-34px",
        left: "48%",
        transform: "translateX(-50%)",
        [theme.breakpoints.down("sm")]: {
          top: "0 !important",
          left: "-51px  ",
        },
      },
      [theme.breakpoints.down("md")]: {
        maxWidth: "173px",
      },
      [theme.breakpoints.down("sm")]: {
        border: "none",
       
        padding: 0,
        paddingLeft: "50px",
        "&::after": {
          display: "none",
        },
        "&::before": {
          display: "none",
        },
      },
      [theme.breakpoints.down("sm")]: {
        maxWidth: "100%",
        textAlign: "left",
        marginBottom: "30px",
        padding: 0,
      },
    },
    "& first-child": {
      "&::before": {
        width: "120px",
        height: "2px",
        backgroundColor: "#fff"
      }
    },
    "& .roadmap-right": {
      borderTop: "2px solid #fff",
      borderBottom: "2px solid #fff",
      padding: "20px 0",
      position: "relative",
      marginTop: "-2px",
      [theme.breakpoints.down("sm")]: {
        border: "none",
        
        padding: 0,
        paddingLeft: "50px",
        borderRadius: 0,
        "&::after": {
          display: "none",
        },
        "&::before": {
          display: "none",
        },
      },
      "&::before": {
        width: "200px",
        bottom: "-2px",
        height: "100%",
        content: "''",
        zIndex: 22,
        position: "absolute",
        left: "-126px",
        borderRadius: "200px 0px 0px 200px",
        border: "2px solid #fff",
        borderWidth: "2px",
        borderRight: "0"
      },
      // "&::after": {
      //   width: "200px",
      //   bottom: "-2px",
      //   height: "100%",
      //   content: "''",
      //   zIndex: 22,
      //   position: "absolute",
      //   left: "-97px",
      //   borderRadius: "200px 0px 0px 200px",
      //   border: "2px solid #fff",
      //   borderWidth: "2px",
      //   borderRight: "0"
      // },
    },
    "& .roadmap-left": {
      borderTop: "2px solid #fff",
      borderBottom: "2px solid #fff",
      padding: "20px 0",
      position: "relative",
      marginTop: "-2px",
      [theme.breakpoints.down("sm")]: {
        border: "none",
        
        padding: 0,
        paddingLeft: "50px",
        "&::after": {
          display: "none",
        },
        "&::before": {
          display: "none",
        },
      },
      "& first-child": {
        "&::before": {
          width: "120px",
          color: "#FFFFFF",
          backgroundColor: "#FFFFFF",
          height: "2px"
        }
      },
     
      "&::after": {
        width: "200px",
        bottom: "-2px",
        height: "100%",
        content: "''",
        zIndex: 22,
        position: "absolute",
        right: "-126px",
        borderRadius: "0 200px 200px 0",
        border: "2px solid #fff",
        borderWidth: "2px",
        borderLeft: "0"
      },
    },
    "& .roadmap-start": {
      "&::before": {
        display: "none",
      },
    },
    "& .roadmap-end": {
      border: "none",
      "&::after": {
        display: "none",
      },
      "&::before": {
        display: "none",
      },
      [theme.breakpoints.down("sm")]: {
        paddingBottom: "70px !important",
      },
    },
    "& .roadmap-end2": {
      "&::after": {
        display: "none",
      },
    },
    "& .roadmap-textFirst": {
      position: "absolute",
      left: "-215px",
      top: "20px",
      [theme.breakpoints.down("sm")]: {
        position: "initial",
        "&::after": {
          display: "none",
        },
        "&::before": {
          content: "''",
          position: "absolute",
          height: "25px",
          width: "25px",
          borderRadius: "50%",
          backgroundColor: "#fff",
          top: "0 !important",
          left: "-14px  ",
        },
      },
    },
    "& .roadmap-textthree": {
      position: "absolute",
      right: "-106%",
      top: "50%",
      transform: "translateY(-50%)",
      paddingLeft: "20px",
      [theme.breakpoints.down("md")]:{
        right: "-91%",
      },
      [theme.breakpoints.down("sm")]: {
        position: "relative",
        top: "0 !important",
        left: "0 !important",
        transform: "none",
        "&::after": {
          display: "none",
        },
        "&::before": {
          content: "''",
          position: "absolute",
          height: "25px",
          width: "25px",
          borderRadius: "50%",
          backgroundColor: "#fff",
          top: "0 !important",
          left: "-62px  ",
        },
      },
      "&::after": {
        top: "50% !important",
        left: "-2% !important",
        transform: "translatey(-50%) !important",
        [theme.breakpoints.down("sm")]: {
          left: "-64px  !important",
        },
      },
    },
    "& .roadmap-textFour": {
      position: "absolute",
      // right: "100%",
      left: "-106%",
      top: "50%",
      transform: "translateY(-50%)",
      paddingRight: "20px",
      [theme.breakpoints.down("md")]:{
        left: "-93%",
      },
      [theme.breakpoints.down("sm")]: {
        position: "relative",
        top: "0 !important",
        left: "0 !important",
        transform: "none",
        "&::after": {
          display: "none",
        },
        "&::before": {
          content: "''",
          position: "absolute",
          height: "25px",
          width: "25px",
          borderRadius: "50%",
          backgroundColor: "#fff",
          top: "0 !important",
          left: "-62px  ",
        },
      },
      "&::after": {
        top: "50% !important",
        left: "93% !important",
        transform: "translatey(-50%) !important",
        [theme.breakpoints.down("sm")]: {
          left: "-64px  !important",
        },
      },
    },
    "& .globe": {
      position: "absolute",
      left: "-30px",
      top: "-30px",
      width: "60px",
      [theme.breakpoints.down("sm")]: {
        bottom: "0px",
        top: "auto",
      },
      [theme.breakpoints.down("xs")]: {
        width: "46px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      borderLeft: "2px solid #fff",
     
    },
  },
}));

function Roadmap(props) {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.bannerBox}>
        <Box className={classes.textbox} mb={5}>
          <Typography variant="h1" align="center" className="wow bounceInRight">
            ROADMAP<sup>V1</sup>
          </Typography>
        </Box>

        <Container maxWidth="lg">
          <Box className={`${classes.roadmapBox} newcssforLine`}>
            <Box className="roadmap-left roadmap-start">
              <Box className="roadmap-text roadmap-textFirst wow bounceInUp">
                <img src="images/RoadmapImages/Giveaways.png" />
                <Typography variant="h3">GIVEAWAYS</Typography>
                <Typography variant="body2">
                  1% of the supply will be given back to the Algorand community
                  in the form of competitions, giveaways and airdrops.
                </Typography>
              </Box>
              <Box className="roadmap-text wow bounceInUp">
                <img src="images/RoadmapImages/Marketplace.png" />
                <Typography variant="h3">MARKETPLACE</Typography>
                <Typography variant="body2">
                  Establish a partnership with an Algorand NFT marketplace.
                </Typography>
              </Box>

              <Box className="roadmap-text roadmap-textthree wow bounceInUp">
                <img src="images/RoadmapImages/Treasury.png" />
                <Typography variant="h3">TREASURY</Typography>
                <Typography variant="body2">
                  A community treasury will be
                  established which will form the
                  foundation for the DAO and fund
                  the future goals of the project.
                </Typography>
              </Box>
            </Box>
            <Box className="roadmap-right">
              <Box className="roadmap-text wow bounceInUp">
                <img src="images/RoadmapImages/Collaborations.png" />
                <Typography variant="h3">COLLABORATIONS</Typography>
                <Typography variant="body2">
                  We will form partnerships with Algorand NFT projects
                  in order to positively contribute towards the ecosystem.
                </Typography>
              </Box>
              <Box className="roadmap-text roadmap-textFour wow bounceInUp">
                <img src="images/RoadmapImages/AlgoDevFund.png" />
                <Typography variant="h3">AlGO DEV FUND</Typography>
                <Typography variant="body2">
                  A portion of the treasury will be used to
                  incentivize development on Algorand
                  by funding community developers. This
                  will also assist in executing future
                  proposals by the DAO.
                </Typography>
              </Box>
            </Box>
            <Box className="roadmap-left">
              <Box className="roadmap-text wow bounceInUp">
                <img src="images/RoadmapImages/MetaverseReady.png" />
                <Typography variant="h3">METAVERSE READY</Typography>
                <Typography variant="body2">
                  The AlgoPunks treasury will purchase land in
                  multiple metaverse environments.
                </Typography>
              </Box>
              <Box className="roadmap-text roadmap-textthree wow bounceInUp">
                <img src="images/RoadmapImages/MutationMint.png" />
                <Typography variant="h3">MUTATION MINT</Typography>
                <Typography variant="body2">
                  You will have the option to mint a
                  unique MutantPunk. The IP and
                  commercial rights of the image
                  will lay with the holder.
                </Typography>
              </Box>
            </Box>
            <Box className="roadmap-right">
              <Box className="roadmap-text wow bounceInUp">
                <img src="images/RoadmapImages/MetaverseEvents.png" />
                <Typography variant="h3">METAVERSE EVENTS</Typography>
                <Typography variant="body2">
                  The Algoverse will be the home of AlgoPunks for
                  both social and holiday events.
                </Typography>
              </Box>
              <Box className="roadmap-text roadmap-textFour wow bounceInUp">
                <img src="images/RoadmapImages/AlgoverseReveal.png" />
                <Typography variant="h3">ALGOVERSE REVEAL</Typography>
                <Typography variant="body2">
                  The AlgoVerse and
                  AlgoWorld grand
                  unveiling.
                </Typography>
              </Box>
            </Box>
            <Box className="roadmap-left">
              <Box className="roadmap-text wow bounceInUp">
                <img src="images/RoadmapImages/Dao.png" />
                <Typography variant="h3">DAO</Typography>
                <Typography variant="body2">
                  The project will be handed over to trusted
                  members of the Algorand community.
                </Typography>
              </Box>

              <Box className="roadmap-text roadmap-textthree wow bounceInUp">
                <img src="images/RoadmapImages/DaoAirdrop.png" />
                <Typography variant="h3">DAO AIRDROP</Typography>
                <Typography variant="body2">
                  The DAO will vote on the best
                  airdrop proposals and then
                  implement it using the developers
                  from the 'Dev Fund".
                </Typography>
              </Box>
            </Box>
            <Box className="roadmap-right roadmap-end">
              <Box className="roadmap-text wow bounceInUp">
                <img src="images/RoadmapImages/DaoRoadmap.png" />
                <Typography variant="h3">DAO ROADMAP<sup>V2</sup></Typography>
                <Typography variant="body2">
                  The DAO will create the V2 roadmap.
                </Typography>
              </Box>
              <img src="images/RoadmapImages/Globe.png" className="globe" />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Roadmap;






