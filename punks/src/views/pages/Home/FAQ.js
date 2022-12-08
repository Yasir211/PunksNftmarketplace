import React from "react";
import {
  Box,
  Container,
  Typography,
  makeStyles,
  Grid,
} from "@material-ui/core";
import { } from "react-feather";
import FaqData from "src/component/FaqData";
const useStyles = makeStyles((theme) => ({
  textbox: {
    "& h1": {
      fontSize: "35px",
      fontWeight: "600",
      lineHeight: "67px",
      letterSpacing: "3px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "20px",
        lineHeight: "40px",
      },
    },
  },
  bannerBox: {
    position: "relative",
    padding: " 120px 0px ",
    backgroundPosition: "top right",
    [theme.breakpoints.down("xs")]: {
      padding: "90px 0px",
    },
  },
}));

const FaqDataList = [
  {
    head: "What is an NFT?",
    summary:
      "NFT stands for Non-Fungible Token. Picture an NFT like a digital collectable card in which its value varies depending on the one you own, verifiable only on the Algorand blockchain.",
  },
  {
    head: "What is the AlgoPunk project?",
    summary:
      "AlgoPunk’s are an exclusive collection of 10,000 NFT’s which live on the Algorand blockchain, no two AlgoPunks are the same. Each AlgoPunk has its own rarity and attributes, some more valuable than others.",
  },
  {
    head: "Why should you purchase an AlgoPunk and what utility do you get?",
    summary:
      "Owning an AlgoPunk will give you access to an array of benefits such as airdrops, metaverse access, an exclusive community and DAO governance rights which allow you to vote on the future of the project.",
  },
  {
    head: "What is the Mutant AlgoPunk Airdrop / Mint?",
    summary: [
      <div>
        <p>
          The Mutant Punk Project is an experimental project which combines both the CryptoPunk and Mutant Ape Yacht Club project together as a tribute to the recent Yuga Labs acquisition. The purpose of this project is to create unique art which can later be used to create metaverse compatible avatars.
        </p>
        <p>
          5000 vials will be airdropped to holders at a 2:1 ratio at random, which will then later be unveiled via a revealing event. 5000 M2 Mutant Punks will be available for public mint and 8 Mega Mutant Punks will be auctioned off with a percentage of the proceeds going to a charity of the community's choice.
        </p>
      </div>
    ]
  },
  {
    head: "How much does an AlgoPunk cost?",
    summary:
      "An AlgoPunk will cost either 150, 200, 250, 300 or 350 ALGO depending on when you decide to mint plus a tiny gas fee. This bonding curve has been implemented to reward early adopters and encourage a better distribution for holders later in the mint.",
  },
  {
    head: "Will my AlgoPunk increase in value?",
    summary:
      "AlgoPunks are a speculative asset for those bullish on the macro success of the Algorand blockchain and may provide a potential hedge for the bear market. Though we cannot make promises, data has clearly shown that every punk fork has had a period in which rare punks have sold for tens and even hundreds of thousands of dollars.",
  },
  {
    head: "Who can you contact for support?",
    summary:
      "If you need instant support, you can contact us 24/7 on our Twitter or Discord channels and a member of our team will assist you as soon as possible depending on your time zone.",
  },
];


export default function FAQ() {
  const classes = useStyles();
  return (
    <Box className={classes.bannerBox}>
      <Container maxWidth='lg'>
        <Box className={classes.textbox} mb={5}>
          <Typography variant='h1' align='center' className='wow bounceInRight'>
            FREQUENTLY ASKED QUESTIONS
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={12}>
            {FaqDataList.map((data, i) => {
              return (
                <Box key={i}>
                  <FaqData data={data} index={i} />
                </Box>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
