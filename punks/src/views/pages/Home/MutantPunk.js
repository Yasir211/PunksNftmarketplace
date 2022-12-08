import React from 'react';
import { makeStyles, Box, Typography, Container, Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundSize: "cover",
        backgroundImage: "url(images/MutantPunkBackground.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        padding: "80px 0px",
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
        "& .headingbox": {
            textAlign: "center",
            padding: "25px 0px",
            "& h1": {
                color: "#FFFFFF",
                [theme.breakpoints.down("xs")]: {
                    fontSize: "20px",
                    lineHeight: "33px",
                },
            },
        },
    },
    mutantPunkAirdropImage: {
        "& figure": {
            margin: "0",
            overflow: "hidden",
            padding: "0px",
            // "&:hover": {
            //     "& img": {
            //         transform: "scale(1.3)",
            //     },
            // },
            "& img": {
                width: "100%",
                height: "auto",
                margin: "0",
            },
        },
    },
    mutantPunkImage: {
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


const mutantdata = [
    {
        image: "images/MutantPunk/bazaart1.png"
    },
    {
        image: "images/MutantPunk/bazaart2.png"
    },
    {
        image: "images/MutantPunk/bazaart3.png"
    },
    {
        image: "images/MutantPunk/bazaart4.png"
    },
    {
        image: "images/MutantPunk/bazaart5.png"
    },
    {
        image: "images/MutantPunk/bazaart6.png"
    }
]



function MutantPunk() {
    const classes = useStyles();


    return (
        <>
            <Box className={classes.root}>
                <Container maxWidth="lg">
                    <Box className="headingbox">
                        <Typography variant="h1" className="wow bounceInRight">
                            MUTANT PUNK AIRDROP / MINT
                        </Typography>
                    </Box>
                    <Box mt={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={4} sm={4} md={2} lg={2}>
                                <Box className={classes.mutantPunkAirdropImage}>
                                    <figure className="wow bounceInLeft">
                                        <img src="images/MutantPunk/bazaart1.png" alt="MutantPunk Image"/>
                                    </figure>
                                </Box>
                            </Grid>
                            <Grid item xs={4} sm={4} md={2} lg={2}>
                                <Box className={classes.mutantPunkAirdropImage}>
                                    <figure  className="wow bounceInLeft" >
                                        <img src="images/MutantPunk/bazaart2.png" alt="MutantPunk Image"/>
                                    </figure>
                                </Box>
                            </Grid>
                            <Grid item xs={4} sm={4} md={2} lg={2}>
                                <Box className={classes.mutantPunkAirdropImage}>
                                    <figure className="wow bounceInLeft" >
                                        <img src="images/MutantPunk/bazaart3.png" alt="MutantPunk Image"/>
                                    </figure>
                                </Box>
                            </Grid>
                            <Grid item xs={4} sm={4} md={2} lg={2}>
                                <Box className={classes.mutantPunkAirdropImage}>
                                    <figure className="wow bounceInRight" >
                                        <img src="images/MutantPunk/bazaart4.png" alt="MutantPunk Image"/>
                                    </figure>
                                </Box>
                            </Grid>
                            <Grid item xs={4} sm={4} md={2} lg={2}>
                                <Box className={classes.mutantPunkAirdropImage}>
                                    <figure className="wow bounceInRight" >
                                        <img src="images/MutantPunk/bazaart5.png" alt="MutantPunk Image"/>
                                    </figure>
                                </Box>
                            </Grid>
                            <Grid item xs={4} sm={4} md={2} lg={2}>
                                <Box className={classes.mutantPunkAirdropImage}>
                                    <figure className="wow bounceInRight">
                                        <img src="images/MutantPunk/bazaart6.png" alt="MutantPunk Image"/>
                                    </figure>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mt={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={4} lg={4}>
                                <Box className={classes.mutantPunkImage}>
                                    <figure className="wow bounceInLeft">
                                        <img src="images/MutantPunk/bazaart01.png" alt="MutantPunk Image" width="100%"
                                            height="100%" />
                                    </figure>
                                </Box>
                            </Grid>
                            <Grid item xs={4} lg={4}>
                                <Box className={classes.mutantPunkImage}>
                                    <figure>
                                        <img src="images/MutantPunk/bazaart02.png" alt="MutantPunk Image" width="100%"
                                            height="100%" />
                                    </figure>
                                </Box>
                            </Grid>

                            <Grid item xs={4} lg={4}>
                                <Box className={classes.mutantPunkImage}>
                                    <figure className="wow bounceInRight">
                                        <img src="images/MutantPunk/bazaart03.png" alt="MutantPunk Image" width="100%"
                                            height="100%" />
                                    </figure>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default MutantPunk;