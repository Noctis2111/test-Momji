import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  MenuItem,
  Select,
  Chip,
  Input,
  InputLabel,
  FormControl,
} from "@material-ui/core";
//import { connect } from 'react-redux';

/*
|--------------------------------------------------
|                     dropdownButton
|--------------------------------------------------
|
|- Props Obligatoire :
|
|  text='string';
  option='object';
|
|--------------------------------------------------  
|
|- Props Secondaire :
|
|
| 
|
|--------------------------------------------------
*/

const UseStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: 0.5,
    marginLeft: 50,
    boxShadow: "none",
  },
  text: {
    minWidth: 150,
  },
  chips: {
    margin: 2,
  },
});

const DropdownButton = (props) => {
  const classes = UseStyles(props);
  // const { options, ...otherProps } = props;

  const option = [];

  props.option.map((value) => {
    return option.push(value);
  });

  return (
    <div style={{ display: "flex" }}>
      <FormControl>
        <InputLabel htmlFor="select-multiple" style={props.style}>
          {props.text}
        </InputLabel>
        <Select
          multiple={props.multiple}
          className={classes.text}
          value={props.value}
          input={<Input id="select-multiple-chip" />}
          onChange={props.onChange}
          style={props.style}
          renderValue={(selected) =>
            selected.map((value) => (
              <Chip key={value} label={value} className={classes.chips} />
            ))
          }
        >
          {option.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropdownButton;

/**
|--------------------------------------------------
| Défault Type
|--------------------------------------------------
*/

DropdownButton.propTypes = {
  text: PropTypes.string.isRequired,
  option: PropTypes.array.isRequired,
};
