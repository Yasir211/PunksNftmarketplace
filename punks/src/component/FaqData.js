import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
const Accordion = withStyles({
  root: {
    background: "#3A3A3A",
    boxShadow: "none",
    border: "6px solid #3A3A3A",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:first-child": {
      marginTop: "15px",
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      marginTop: "15px",
      // borderRadius: "25px 25px 25px 25px",
      "&:first-child": {
        marginTop: "15px",
      },
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    color: "#FFFFFF",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
      color: "#FFFFFF",
    },
  },
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    marginTop: "-30px",
    paddingTop: "30px",
  },
  expanded: {
    marginTop: "-30px",
    paddingTop: "30px",
  },
}))(MuiAccordionDetails);

export default function FaqData({ data, index }) {
  return (
    <div>
      {index === 0 ? (
        <Accordion square defaultExpanded={true}>
          <AccordionSummary
            aria-controls="panel1d-content"
            expandIcon={<AddIcon />}
          >
            <Typography variant="h4">{data.head}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" style={{color:"#FFFFFF",fontSize:"15px"}} >{data.summary}</Typography>
          </AccordionDetails>
        </Accordion>
      ) : (
        <Accordion square defaultExpanded={false}>
          <AccordionSummary
            aria-controls="panel1d-content"
            expandIcon={<AddIcon />}
          >
            <Typography variant="h4">{data.head} </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" style={{color:"#FFFFFF",fontSize:"15px"}} >{data.summary}</Typography>
          </AccordionDetails>
        </Accordion>
      )}
    </div>
  );
}
