import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, Box } from "@material-ui/core";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

// import Switch from './Switch.js';
// import Checkbox from './Checkbox.js';
// import ModerationButton from './ModerationButton.js';

/*
|--------------------------------------------------
|                     Row
|--------------------------------------------------
|
|
|
|  
|
|--------------------------------------------------  
|
|- Props Secondaire :
| 
| 
| color='#12345';
| backgroundColor='#12345';  
  avatar ='none' ou 'flex'
|
|--------------------------------------------------
*/

const UseStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#fff",
    borderBottom: "2px solid rgba(49,54,70,0.2)",
    borderRadius: "5px 5px 0px 0px",
    padding: 0,
  },
  avatar: {
    display: (props) => props.avatar,
    margin: 10,
    width: 40,
    height: 40,
    marginRight: 50,
  },
  box: {
    width: "inherit",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    textDecoration: "none",
    color: "#000",
    marginRight: 30,
  },
});

const Row = (props) => {
  const classes = UseStyles(props);
  const { alt, img, to, data, ...otherProps } = props;
  return (
    <List className={classes.root}>
      <ListItem dense button style={{ minHeight: "70px" }}>
        <Link
          className={classes.box}
          to={{ pathname: to, state: { userSelected: data } }}
        >
          <AccountCircleOutlinedIcon className={classes.avatar} />
          <Box className={classes.box} {...otherProps} />
        </Link>
      </ListItem>
    </List>
  );
};

/**
|--------------------------------------------------
| Valeur par défaut
|--------------------------------------------------
*/
Row.defaultProps = {
  avatar: "flex",
};

/**
|--------------------------------------------------
| Type par défaut
|--------------------------------------------------
*/
Row.propTypes = {
  avatar: PropTypes.oneOf(["none", "flex"]),
};

export default Row;
