import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  mintimageBox: {
    position: "relative",
    maxWidth: "100%",
    height: "auto",
    overflow: "hidden",

    "& h1": {
      fontSize: "30px",
      fontWeight: "600",
      lineHeight: "25px",
      color: "#fff",
      [theme.breakpoints.down("lg")]: {
        fontSize: "25px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "30px",
        lineHeight: "54px",
      },
    },
  },
  part_box: {
    position: "relative",
    maxWidth: "100%",
    height: "232px",
    overflow: "hidden",
    "@media (max-width: 767px)": {
      height: "auto",
    },
  },
  fixedimg: {
    overflow: "hidden",
    height: "225px",
    margin: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& img": {
      height: "auto",
      maxHeight: "200px",
      width: "auto",
      maxWidth: "100%",
    },
    "@media (max-width: 767px)": {
      height: "auto",
    },
  },
  frameBox: {
    width: "100%",
    position: "absolute",
    top: "0",
    left: "0",
  },
}));
export default function Release(props) {
  const { data } = props;
  const classes = useStyles();
  return (
    <Box align="center">
      <Box className={classes.mintimageBox}>
        <Typography variant="h1"> {data.heading}</Typography>
        <Box className={classes.part_box}>
          <figure className={classes.fixedimg}>
            <img src={data.image} width="100%" alt="" />

            {/* <img className={classes.frameBox} src="images/frame_1.png"  alt=""  width="100%" /> */}
          </figure>
        </Box>
        <Typography
          variant="body1"
          style={{ color: "rgb(255 255 255 / 82%)", maxWidth: "224px" }}
        >
          {data.discription}
        </Typography>
      </Box>
    </Box>
  );
}
