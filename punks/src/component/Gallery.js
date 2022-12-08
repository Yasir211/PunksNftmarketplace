import React from "react";
import {
  Box,
} from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// const useStyles = makeStyles((theme) => ({
  
// }));
export default function Release(props) {
  // const classes = useStyles();
  const { data } = props;
  return (
    <Box className="gallery">
      
      <img src={data.image} alt="" width="100%" />
    </Box>
  );
}