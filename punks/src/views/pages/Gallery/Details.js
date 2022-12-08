import React from "react";
import {
    Box,
    Container,
    Typography,
    makeStyles,
    Grid,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from "@material-ui/core";
import Page from "src/component/Page";
const useStyles = makeStyles((theme) => ({
    Padding_Top: {
        paddingTop: "50px",
        backgroundColor: "#000",
        "& h3":{
            color:"rgb(251, 16, 56)",
        },
    },
    filterbox: {
        display: "inline-block",
        flesWarp: "warp",
        minWidth: "90px",
        boxShadow: "rgb(0 0 0 / 13%) 0px 5px 15px",
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px 5px",
        transition: " 02s",
        "&:hover": {
            transform: "translateY(-10px)",
        },
        "& label": {
            fontSize: "15px",
            paddingBottom: 0,
            color: "rgb(251, 16, 56)",
        },
        "& p" :{
            color:"white",
        }
    },
    boxheading: {
        "& h3": {
            fontSize: "30px",
            paddingBottom: 0,
            color: "rgb(251, 16, 56)",
            marginBottom: "10px",
        },
        "&  div": {
            // border: "1px solid white",
            display: " inline-block",
            padding: "10px",
            borderRadius: "5px",
            marginTop: "20px",
            color: "#fafafa",
            fontWeight: "600",
        },
    },

    boxheading1: { 
            display: " inline-block",
            padding: "10px",
            borderRadius: "5px",
            marginTop: "20px",
            color: "#fafafa",
            fontWeight: "600",
        },

    dialoginputbox: {
                width: "393px",
                height: "35px",
                border: "2px solid rgb(251, 16, 56)",
                paddingLeft: "10px",
                backgroundColor: "rgb(235 235 235)",
                borderRadius: "8px",
                "@media (max-width: 900px)": {
                    width: "291px",
                },
            }, 
            

    deatailimage: {
        width: "100%",
        height: "50vh",
        display: "flex",
        padding: "50px 0",
        overflow: "hidden",
        position: "relative",
        background: "rgba(12, 12, 13, 0.91)",
        textAlign: "center",
        justifyContent: "center",
        [theme.breakpoints.down("sm")]: {
            height: "auto",
        },
        "& img": {
            filter: " drop-shadow(rgba(0, 0, 0, 0.25) 0px 20px 20px)",
            maxHeight: "100%",
            borderRadius: "10px",
            maxWidth: "100%",
        },
    },

}));
function Gallery(props) {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const handleClose = ()  => {
        setOpen(false);
    }
    return (
       <Page title="Marketplace for NFTs">
            {/* <Box style={{
        background:"#180f07 "}}> */}
            <Box className={classes.deatailimage}>
                <img src="images/gallery/1.png" alt="" />
            </Box>
            <Box className={classes.Padding_Top} mb={7}>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                       <Grid item xs={12} md={6}>
                            <Box className={classes.boxheading}>
                                <Typography variant="h3">ABC -  #0   </Typography>
                                <Typography variant="body2" style={{ wordBreak: "break-all", color: "#f0f0f0"}}>
                                    <strong>Owned by:  </strong> 
                                     0xE7079Eec020DDfC3F1c0abe1D946C55E6Ed30eB3
                                </Typography>
                                    <div style={{ border: "1px solid white",}}>
                                      Accumulated NCT: 2566.60</div>
                    
                                <Box  className={classes.boxheading1}>
                                <Button style={{lineHeight:"25px", border:"none", borderRadius:"none"}} 
                                className={classes.filterbox} variant="contained" size="large" color="secondary" onClick={(e)=>setOpen(true)}>
                                <span>TRANSFER</span>
                                </Button>
                               </Box>  
                            </Box>
                        </Grid>

                         <Grid item xs={12} md={6}> 
                         <Box className={classes.boxheading}>
                            <Typography variant="h3">  Traits  </Typography>
                            <Box className={classes.filterbox}>
                                <label>Character</label>
                                <Typography variant="body1">Male</Typography>
                            </Box>
                            <Box className={classes.filterbox}>
                                <label>Mask</label>
                                <Typography variant="body1">Indian</Typography>
                            </Box>
                            <Box className={classes.filterbox}>
                                <label>Eye Color</label>
                                <Typography variant="body1">Freak</Typography>
                            </Box>
                            <Box className={classes.filterbox}>
                                <label>Skin Color</label>
                                <Typography variant="body1">Freak</Typography>
                            </Box>
                            <Box className={classes.filterbox}>
                                <label>Item</label>
                                <Typography variant="body1">Mirror</Typography>
                            </Box>
                           </Box>

                        </Grid>
                    </Grid>
                    
                    <Dialog style={{background: "rgb(12 12 13 / 40%)"}}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title" >
                    {/* {"Use Google's location service?"} */}
                    {/* {"Connect Your Wallet?"} */}

                    </DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{maxWidth: "450px"}}> 
                    <label style={{color:"#000"}} for="fname">User Wallet Address </label>
                    
                    <input className={classes.dialoginputbox} type="text" placeholder="Wallet Address" name="fname" />
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button style={{color:"#000"}} onClick={handleClose} autoFocus>
                    Cancel
                    </Button>

                    <Button onClick={handleClose} autoFocus>
                    Transfer
                    </Button>
                    </DialogActions>
                </Dialog>
           </Container>
            </Box>
            {/* </Box> */}
        </Page>
    );
}
export default Gallery;
