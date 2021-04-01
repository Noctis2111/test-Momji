import React from "react";
import { Button as ButtonMaterial } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

/*
|--------------------------------------------------
|                     Button
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
| variant='outlined' | 'contained';
| color='#12345';
| backgroundColor='#12345';  
|
|--------------------------------------------------
*/

const useStyles = makeStyles({
  root: {
    "&:hover": {
      color: "#FFF",
      backgroundColor: "#e80e20",
    },
    borderColor: (props) => props.bordercolor,
    color: (props) => props.color,
    backgroundColor: (props) => props.backgroundcolor,
    variant: (props) => props.variant,
    marginLeft: (props) => props.marginleft,
    marginBottom: (props) => props.marginbottom,
    marginRight: (props) => props.marginright,
    marginTop: (props) => props.margintop,
    paddingTop: (props) => props.paddingtop,
    paddingBottom: (props) => props.paddingbottom,
    paddingLeft: (props) => props.paddingleft,
    paddingRight: (props) => props.paddingright,
    borderRadius: 2,
    height: 36,
    textTransform: "capitalize",
    textDecoration: "none",
  },
});

const Button = (props) => {
  const { ...otherProps } = props;
  const classes = useStyles(props);
  return <ButtonMaterial className={classes.root} {...otherProps} />;
};
/**
|--------------------------------------------------
| Défault Value
|--------------------------------------------------
*/
// - Ne pas rajouter backgroundcolor avec une valeur par défaut.
Button.defaultProps = {
  color: "primary",
  variant: "contained",
};

/**
|--------------------------------------------------
| Défault Type
|--------------------------------------------------
*/
Button.propTypes = {
  backgroundcolor: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.oneOf(["contained", "outlined"]),
};

export default Button;
