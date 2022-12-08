import React, { useEffect, useState } from 'react';
import { makeStyles, Box, Typography, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    mainimg: {
        width: "100%",
        height: "165px",
        overflow: "hidden",
        backgroundPosition: "center !important",
        backgroundSize: "contain !important",
        backgroundRepeat: " no-repeat !important",
        // borderRadius: "40px 40px 10px 10px",
        // backgroundColor: "#ccc !important",
    },
}));

function MutantPunkCard(props) {
    const classes = useStyles();
    const { data, type, index } = props;
    const updateDimensions = () => {
        var offsetWidth = document.getElementById("imagecard" + index).offsetWidth;
        var newoofsetWidth = offsetWidth - 80;
        document.getElementById("imagecard" + index).style.height =
            newoofsetWidth + "px";
    };


    useEffect(() => {
        updateDimensions();
    }, [data, index]);
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);


    return (
        <>
            <Box
                id={`imagecard${index}`}
                className={classes.mainimg}
                style={{ background: "url(" + data.image + ")" }}
            // onClick={() => {
            //     history.push("/author");
            // }}
            ></Box>
        </>
    )
}

export default MutantPunkCard;