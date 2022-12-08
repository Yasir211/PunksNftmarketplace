import React, { useContext, useEffect, useState } from "react";
import {
  makeStyles,
  Typography,
  Container,
  Box,
  Grid,
  Button,
  OutlinedInput,
  FormControl,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { AlgoContext } from "src/context/Algo";
import MyNFTCard from "src/component/MyNFTCard";
import axios from "axios";
import { algodServer, adminWalletAddress } from "src/constants/AlgoConstant";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundSize: "cover",
    backgroundImage: "url(./images/MyWalletBanner.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundColor: "#000000",
    overflow: "hidden",
    width: "100%",
    zIndex: " 99",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "115px 0px",
    [theme.breakpoints.down("md")]: {
      height: "60vh",
    },
    [theme.breakpoints.down("sm")]: {
      height: "45vh",
    },
    "& h1": {
      color: "#FFFFFF",
      textAlign: "center",
    },
    "& .mainBox": {
      //   height: "80vh",
      //   padding: "40px 0px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "space-evenly",
      "& .headingBox": {
        marginBottom: "60px",
        [theme.breakpoints.down("md")]: {
          marginBottom: "50px",
        },
        "& h1": {
          "@media(max-width:767px)": {
            fontSize: "30px",
          },
        },
      },
      "& .searchBarBox": {
        margin: "25px 0px",
        display: "flex",
        alignItems: "center",
      },
    },
  },
  cardData: {
    display: "flex",
    justifyContent: "center",
  },
}));

function MyWallet({ setIsConnectWalletOpen }) {
  const classes = useStyles();
  const algo = useContext(AlgoContext);
  const [searchText, setSearchText] = useState("");
  const [myNftList, setMyNftList] = useState([]);
  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();

    if (searchText && searchText?.length > 0) {
      const filterData = algo.myMintedNFt.filter(
        (data) => data.params["name"].indexOf(searchText) >= 0
      );
      getDataHandler(filterData, cancelTokenSource);
    } else {
      getDataHandler(algo.myMintedNFt, cancelTokenSource);
    }
    return () => {
      setMyNftList([]);
      cancelTokenSource.cancel();
    };
  }, [searchText, algo.myMintedNFt, algo.account]);

  const getDataHandler = async (filterData, cancelTokenSource) => {
    const dataArr = [];
    for (let i = 0; i < filterData.length; i++) {
      const nftDataId = filterData[i]["asset-id"];
      const res = await axios.get(`${algodServer}/v2/assets/${nftDataId}`, {
        cancelToken: cancelTokenSource && cancelTokenSource.token,

        headers: {
          "x-api-key": process.env.REACT_APP_ALGOD_TOKEN_KEY,
        },
      });
      console.log("res = ", res);
      const nftData = res.data;
      if (nftData.params.manager == adminWalletAddress) {
        fetch(nftData.params.url)
          .then((response) => response.json())
          .then((data) => {
            const realData = { ...data, ...nftData };
            dataArr.push(realData);
            setMyNftList((pre) => [...pre, realData]);
          })
          .catch((error) => {
            console.log("ERROR", error);
          });
      }
    }
    // setMyNftList(dataArr);
  };

  return (
    <>
      <Box className={classes.root}>
        <Container maxWidth='lg'>
          <Box className='mainBox'>
            <Box className='headingBox'>
              <Typography variant='h1' className='wow bounceInRight'>
                My Wallet
              </Typography>
            </Box>
            <Container maxWidth='md'>
              {/* <Box className='searchBarBox'>
                <FormControl fullWidth variant='outlined'>
                  <OutlinedInput
                    className={classes.webkitcss}
                    id='outlined-adornment-amount'
                    type='search'
                    placeholder='search by name'
                    style={{ marginRight: "8px" }}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                </FormControl>
                <Button
                  variant='contained'
                  size='small'
                  style={{ marginLeft: "8px" }}
                >
                  <SearchIcon fontSize='35px' />
                </Button>
              </Box> */}
              {!algo?.account?.address && (
                <Box textAlign='center' mt={4}>
                  <Button
                    onClick={() => setIsConnectWalletOpen(true)}
                    variant='contained'
                    size='large'
                    color='secondary'
                  >
                    Connect
                  </Button>
                </Box>
              )}
            </Container>
          </Box>
          <Box mt={5}>
            <Grid container spacing={3} className={classes.cardData}>
              {myNftList?.map((data, i) => {
                return (
                  <Grid item xs={6} sm={4} md={2} lg={2} key={i}>
                    <MyNFTCard data={data} type='card' index={i} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default MyWallet;
