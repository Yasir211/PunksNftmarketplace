import React, { useState } from "react";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  mainCard: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  filterbox: {
    display: "inline-block",
    flesWarp: "warp",
    minWidth: "90px",
    boxShadow: "rgb(0 0 0 / 13%) 0px 5px 15px",
    border: "1px solid #fff",
    padding: "10px",
    color: "#fff",
    borderRadius: "10px",
    margin: "10px 5px",
    transition: " 02s",
    "&:hover": {
      transform: "translateY(-10px)",
    },
    "& label": {
      fontSize: "15px",
      paddingBottom: 0,
      color: "rgb(255, 255, 255)",
    },
    "& p": {
      paddingBottom: 0,
      marginBottom: "10px",
      fontSize: "16px",
      fontStyle: "normal",
    },
  },
}));

function MyNFTCard(props) {
  const classes = useStyles();
  const { data } = props;
  const [isOpenDetails, setIsOpenDetails] = useState(false);
  const [details, setDetails] = useState();
  return (
    <>
      {details && isOpenDetails && (
        <NFTDetailsModal
          details={details}
          open={isOpenDetails}
          onClose={() => setIsOpenDetails(false)}
        />
      )}
      <Box
        className='wow bounceInLeft'
        onClick={() => {
          setDetails(data);
          setIsOpenDetails(true);
        }}
      >
        <Box className={classes.mainCard}>
          <Box maxWidth='184px'>
            <img src={data.image} width='100%' height='100%' />
          </Box>
          <Box>
            <Typography variant='body2'>
              {data?.name} <br />
              {/* <span>{data?.description}</span> */}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MyNFTCard;

export function NFTDetailsModal({ onClose, open, details }) {
  console.log("details", details);
  const classes = useStyles();

  return (
    <Dialog
      fullWidth
      maxWidth='md'
      open={open}
      onClose={() => {
        onClose();
      }}
      aria-labelledby='form-dialog-title'
    >
      <DialogTitle id='form-dialog-title'>Spin History</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Box>
            <Box>
              <Box>
                <img src={details.image} width='100%' height='100%' />
                <Typography variant='body2'>{details.name}</Typography>

                <Typography variant='body2'>{details.description}</Typography>
              </Box>
              <hr />
              <Box mt={2}>
                {details &&
                  details?.attributes.map((data, i) => {
                    return (
                      <Box className={classes.filterbox}>
                        <label>{data.trait_type}</label>
                        <Typography variant='body1'>{data.value}</Typography>
                      </Box>
                    );
                  })}
              </Box>
            </Box>
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            onClose();
          }}
          color='primary'
          style={{ color: "#1fa5a2" }}
        >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}
