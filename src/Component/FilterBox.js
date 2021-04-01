import React from "react";
import { makeStyles, IconButton, Tooltip } from "@material-ui/core";
import PropTypes from "prop-types";
import { SettingsBackupRestore } from "@material-ui/icons";

const UseStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: "5px",
    margin: "40px 0px 40px 0px",
    display: (props) => props.display,
    position: "relative",
    padding: "40px 0px 10px 0px",
  },
  tooltip: {
    backgroundColor: "#fff",
    color: "#313646",
  },
});

const filterBox = (props) => {
  const classes = UseStyles(props);
  const { children, display, onClickRefresh, ...otherProps } = props;

  return (
    <div className={classes.root} {...otherProps}>
      <Tooltip
        classes={{ tooltip: classes.tooltip }}
        title={"initialiser"}
        placement="top"
      >
        <IconButton
          onClick={onClickRefresh}
          style={{
            zIndex: 100,
            color: "#e94e27",
            position: "absolute",
            top: "1%",
            right: "1%",
          }}
        >
          <SettingsBackupRestore />
        </IconButton>
      </Tooltip>
      {children}
    </div>
  );
};

/**
|--------------------------------------------------
| Défault Type
|--------------------------------------------------
*/

filterBox.propTypes = {
  display: PropTypes.string,
  children: PropTypes.node,
  onClickRefresh: PropTypes.func,
};

export default filterBox;
