import React from "react";
import {
  Card as MyCard,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//import { AccountBox } from '@material-ui/icons';
import PropTypes from "prop-types";

/*
|--------------------------------------------------
|                     Carte
|--------------------------------------------------
|
|- Props Obligatoire :
|
|  text='string';
|
|--------------------------------------------------  
|
|- Props Secondaire :
|
| color='#12345';
| backgroundcolor='#12345';
|
|--------------------------------------------------
*/

const useStyles = makeStyles({
  card: {
    width: "100%",
    margin: "70px auto",
  },
  title: {
    display: "flex",
    height: 60,
    color: (props) => props.color,
    backgroundColor: (props) => props.backgroundcolor,
    alignItems: "center",
    paddingLeft: "120px",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "600",
  },
  textField: {
    width: 200,
  },
  icon: {
    marginRight: "25px",
  },
  main: {
    margin: "0 auto",
  },
});

const Card = (props) => {
  const { ...otherProps } = props;
  const classes = useStyles(props);

  return (
    <Grid className={classes.main} item xs={8}>
      <MyCard className={classes.card} {...otherProps}>
        <div className={classes.title}>
          <div className={classes.icon}> {props.icon} </div>
          <Typography className={classes.titleText}> {props.text}</Typography>
        </div>

        <CardContent {...otherProps}></CardContent>
      </MyCard>
    </Grid>
  );
};

export default Card;

/**
|--------------------------------------------------
| Valeur par défaut
|--------------------------------------------------
*/
Card.defaultProps = {
  color: "#fff",
  backgroundcolor: "#313646",
};

/**
|--------------------------------------------------
| Type par défaut
|--------------------------------------------------
*/
Card.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  backgroundcolor: PropTypes.string,
};
