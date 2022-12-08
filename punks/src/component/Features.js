import React from "react";
import { Typography, Box, makeStyles, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Menu from "@material-ui/core/Menu";
const useStyles = makeStyles((theme) => ({
    cardBox: {
        background: "rgba(255, 255, 255, 0.49)",
        borderRadius: "20px",
        padding: "20px",
        color: "#212328",
        cursor:"pointer",
        margin: "5px",
        "& p": {
            fontSize: "14px",
        },
        "& h5": {
            fontSize: "18px",
            fontWaight: "600",
        },
        "& img":{
            width:"50%",
            "&:last-child":{
                display:"none",
            },
        },
        "& div": {
            width: "70px",
            height: "70px",
            backgroundColor: "#fff",
            borderRadius: "50%",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        "&:hover":{
            backgroundColor:"#fff",
            "& h5": {
                color:"#2eb5e7",
            },
            "& div": {
                backgroundColor:"#2eb5e7",
                "& img":{
                    "&:first-child":{
                        display:"none",
                    },
                    "&:last-child":{
                        display:"block",
                    },
                },
            },
        },
    },
}));

export default function Features(props) {

    const { data } = props;
    const classes = useStyles();
    return (
        <Box className={classes.cardBox}>
            <Box>
                <img src={data.img} />
                <img src={data.activeImg} />
            </Box>
            <Typography variant="h5">{data.heading}</Typography>
            <Typography variant="body2">{data.discription}</Typography>
        </Box>
    );
}
