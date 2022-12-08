import React from "react";
import { Typography, Box, makeStyles, Container } from "@material-ui/core";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  cardBox: {
    background: "#151515",
    height: "34px",
    padding: "9px",
    color: "rgb(255, 255, 255)",
    fontSize: "20px",
    cursor: "pointer",

    "& h3": {
      display: "flex",
      alignItems: "center",
      "& svg": {
        paddingRight: "10px",
      },
    },
  },
}));

export default function Features(props) {
  const classes = useStyles();
  const history = useHistory();
  return (
    //  <Link to="/" style={{textDecoration: "none",}}>
    <Box className={classes.cardBox}>
      <Container maxWidth="lg" style={{ position: "relative" }}>
        <Typography variant="h3" align="left" onClick={() => history.goBack()}>
          <IoMdArrowRoundBack /> Back
        </Typography>
      </Container>
    </Box>
    // </Link>
  );
}
