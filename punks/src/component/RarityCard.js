import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainCard: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function ParityCard(props) {
  const classes = useStyles();
  const { data, index } = props;
  return (
    <>
      <Box className="wow bounceInLeft">
        <Box className={classes.mainCard}>
          <Box maxWidth="184px">
            <img src={data.img} width="100%" height="100%" />
          </Box>
          <Box>
            <Typography variant="body2">
              {data?.text} <br />
              <span>{data?.description}</span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ParityCard;
