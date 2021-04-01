import React, { useEffect } from "react";

import { AppBar, Toolbar, Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minHeight: "62px",
    backgroundColor: "#313646",
  },
  menuButton: {
    height: "100%",
    color: "inherit",
    backgroundColor: "#313646",
    "&:hover": {
      color: "#e94e27",
    },
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    height: 40,
  },
});

const Header = (props) => {
  useEffect(() => {
    //Ajoute le nom de la page dans l'onglet du navigateur avec la premiere lettre en majuscule.
    if (window.location.pathname.indexOf("/", 1) !== -1) {
      let name = window.location.pathname.slice(
        1,
        window.location.pathname.indexOf("/", 1)
      );
      document.title = `Momji Liste Utilisateurs | ${
        name.charAt(0).toUpperCase() + name.substr(1)
      }`;
    } else {
      let name = window.location.pathname.slice(
        1,
        window.location.pathname.length
      );
      document.title = `Momji Liste Utilisateurs | ${
        name.charAt(0).toUpperCase() + name.substr(1)
      }`;
    }
  });

  const classes = useStyles(props);

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <Grid item xs={3}>
          <img className={classes.logo} src="../../logo.jpg" alt="logo" />
        </Grid>

        <Grid item xs={9} container justify="flex-end" alignItems="center">
          <p>Bienvenue chez Momji</p>
        </Grid>
        <Grid item xs={1} container justify="center">
          <p>Henry ou Laurent</p>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
