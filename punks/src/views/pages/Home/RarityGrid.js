import React from "react";
import {
  makeStyles,
  Typography,
  Container,
  Box,
  Grid,
} from "@material-ui/core";
import RarityCard from "src/component/RarityCard";

const rarityData = [
  {
    img: "/images/RaritySection/Alien.png",
    text: "Alien: 7-0.07%",
  },
  {
    img: "/images/RaritySection/Ape.png",
    text: "Ape: 24-0.24%",
  },
  {
    img: "/images/RaritySection/Zombie.png",
    text: "Zombie: 88-0.88%",
  },
  {
    img: "/images/RaritySection/Male.png",
    text: "Male: 6039-60.39%",
  },
  {
    img: "/images/RaritySection/Female.png",
    text: "Female: 3840-38.40%",
  },
];

// Attribute
const attributeData = [
  {
    img: "/images/RaritySection/Attribute7.png",
    text: "7 Attributes: 1-0.01%",
  },
  {
    img: "/images/RaritySection/Attribute6.png",
    text: "6 Attributes: 11-0.11%",
  },
  {
    img: "/images/RaritySection/Attribute5.png",
    text: "5 Attributes: 116-1.66%",
  },
  {
    img: "/images/RaritySection/Attribute4.png",
    text: "4 Attributes: 1420-14.20%",
  },
  {
    img: "/images/RaritySection/Attribute3.png",
    text: "3 Attributes: ",
    description: "4501-45.01%",
  },
  {
    img: "/images/RaritySection/Attribute2.png",
    text: "2 Attributes: ",
    description: "3560-35.60%",
  },
  {
    img: "/images/RaritySection/Attribute1.png",
    text: "1 Attributes: ",
    description: "333-3.33%",
  },
  {
    img: "/images/RaritySection/Attribute0.png",
    text: "0 Attributes: ",
    description: "8-0.08%",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundSize: "cover",
    backgroundImage: "url(./images/RarityBgImage.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundColor: "#000000",
    overflow: "hidden",
    width: "100%",
    zIndex: " 99",
    padding: "115px 0px",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto",
      padding: "100px 0px 60px",
    },
    "& .mainBox": {
      // padding: "70px 0px",
      [theme.breakpoints.down("xs")]: {
        padding: "0px 0px",
        "& h1": {
          lineHeight: "35px !important",
          fontSize: "20px",
        },
        "& h2": {
          lineHeight: "35px !important",
          fontSize: "20px",
        },
      },
      "& h1": {
        color: "#FFFFFF",
        textAlign: "center",
        marginBottom: "10px",
        lineHeight: "52px",
      },
      "& h2": {
        color: "#FFFFFF",
        textAlign: "center",
        marginBottom: "10px",
      },
    },
  },
  cardData: {
    display: "flex",
    justifyContent: "center",
  },
  bgImage: {
    backgroundImage: "url(./images/RarityCard.png)",
    backgroundSize: "cover",
    width: "100%",
    height: "80vh",
    backgroundRepeat: "no-repeat",
    position: "relative",
    left: "0px",
    top: "0px",
  },
  topImage: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    position: "absolute",
    left: "0px",
    top: "0px",
  },
}));

function RarityGrid() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Container maxWidth='lg'>
          <Box className='mainBox'>
            <Typography variant='h1' className='wow bounceInRight'>
              RARITY GUIDE <br /> TYPES
              {/* <br /> TYPES */}
            </Typography>
            {/* <Box className={classes.bgImage}>
              <img src="images/RarityText.png" className={classes.topImage} />
            </Box> */}

            <Box>
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
            <Box mt={3} textAlign='center'>
              <Box mt={2} mb={2}>
                <Typography variant='h3' className='wow bounceInRight'>
                  ATTRIBUTE COUNT
                </Typography>
              </Box>
              <Container maxWidth='md'>
                <Box>
                  <Grid container spacing={3} className={classes.cardData}>
                    {attributeData.map((data, i) => {
                      return (
                        <Grid item xs={6} sm={4} md={3} lg={3} key={i}>
                          <RarityCard data={data} type='card' index={i} />
                        </Grid>
                      );
                    })}
                  </Grid>
                </Box>
              </Container>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default RarityGrid;
