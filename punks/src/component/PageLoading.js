import React from 'react';
import { makeStyles, CircularProgress, } from '@material-ui/core';
// import CircularProgress from '@mui/material/CircularProgress';
const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        left: 0,
        padding: theme.spacing(3),
        position: 'fixed',
        top: 0,
        backgroundColor:"#000",
        width: '100%',
        zIndex: 2000,
    },
    loader:{
        width:"auto",
        maxWidth:"100%",
        margin: "auto",
    },
    progressBar:{
height:"3px",
    },
}));

export default function PageLoading() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/* <Box width={300}> */}
            <CircularProgress />
                {/* <LinearProgress height={10} /> */}
                {/* <img className={classes.loader} src="/images/loader.gif" alt="loader" /> */}
            {/* </Box> */}
        </div>
    )
}
