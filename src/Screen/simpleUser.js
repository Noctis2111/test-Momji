import {
  CardContent,
  Grid,
  TextField,
  makeStyles,
  CardActions,
  Switch,
} from "@material-ui/core";
import React, { useState } from "react";
import DateFormat from "../Functions/DateFormat";
import Card from "../Component/Card";
import Header from "../Component/header";
import Button from "../Component/Button";

const useStyles = makeStyles({
  root: {
    minHeight: "93vh",
    backgroundColor: "rgba(49,54,70, 0.1)",
  },
  textField: {
    width: "90%",
    marginLeft: "10%",
  },

  foot: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  toto: {
    marginRight: 10,
  },
  button: {
    width: "200%",
  },
});

const SimpleUser = (props) => {
  const ModifyUser = async (event) => {
    setStringData(JSON.stringify(dataUser));
  };

  const handleSwitchChange = (event) => {
    const dataCopy = { ...dataUser };
    if (dataCopy.isActive) {
      dataCopy.isActive = false;
    } else {
      dataCopy.isActive = event.target.checked;
    }
    setDataUser(dataCopy);
  };
  const inputChange = (event, input) => {
    if (input === "lastName" || input === "firstName") {
      setDataUser({
        ...dataUser,
        profile: { ...dataUser.profile, [input]: event.target.value },
      });
    } else {
      setDataUser({ ...dataUser, [input]: event.target.value });
    }
  };

  const classes = useStyles(props);
  const { userSelected } = props.location.state;
  const [dataUser, setDataUser] = useState(userSelected);
  const [stringData, setStringData] = useState();

  return (
    <Grid container>
      <Header />
      <Grid container className={classes.root}>
        {/* <p style={{ color: "red" }}>testetsteetsteetstetstetst</p> */}
        <Card text="Simple user">
          {/* </Card>icon={<AccountBox />} */}
          {dataUser && (
            <CardContent>
              <Grid container justify="center" spacing={4}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="baseline"
                  item
                  xs={5}
                >
                  <TextField
                    id="standard-name"
                    label="UserId"
                    className={classes.textField}
                    value={dataUser.id}
                    name="userId"
                    onChange={(event) => inputChange(event, "id")}
                    margin="normal"
                  />
                  <TextField
                    id="standard-name"
                    label="firstName"
                    className={classes.textField}
                    value={dataUser.profile.firstName}
                    name="firstName"
                    onChange={(event) => inputChange(event, "firstName")}
                    margin="normal"
                  />
                  <TextField
                    id="standard-name"
                    label="lastName"
                    className={classes.textField}
                    value={dataUser.profile.lastName}
                    name="lastName"
                    onChange={(event) => inputChange(event, "lastName")}
                    margin="normal"
                  />
                  <TextField
                    id="standard-name"
                    label="SignUp Date"
                    className={classes.textField}
                    value={DateFormat(dataUser.registered)}
                    name="date"
                    onChange={(event) => inputChange(event, "registered")}
                    margin="normal"
                  />
                  <TextField
                    id="standard-name"
                    label="Email"
                    className={classes.textField}
                    value={dataUser.email}
                    name="email"
                    onChange={(event) => inputChange(event, "email")}
                    margin="normal"
                  />
                </Grid>

                <Grid
                  container
                  item
                  xs={5}
                  direction="column"
                  justify="space-between"
                  alignItems="baseline"
                >
                  <Grid item xs={3}>
                    Activé:
                    <Switch
                      checked={dataUser.isActive}
                      onChange={(event) => handleSwitchChange(event)}
                    />
                  </Grid>
                  {stringData && (
                    <p
                      style={{
                        overflow: "auto",
                        width: "100%",
                        overflowWrap: "break-word",
                      }}
                    >
                      {stringData}
                    </p>
                  )}
                </Grid>
              </Grid>
            </CardContent>
          )}
          <CardActions className={classes.foot}>
            <Button
              variant="contained"
              backgroundcolor="grey"
              onClick={() => props.history.goBack()}
            >
              Cancel
            </Button>
            <Button variant="contained" onClick={ModifyUser}>
              Modifier
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SimpleUser;
