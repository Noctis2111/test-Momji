import React, { useState, useEffect } from "react";
import DateFormat from "../Functions/DateFormat";
// import { url } from "../../../Config/Connecturl";

//material-ui
import {
  MenuItem,
  Select,
  makeStyles,
  TextField,
  ListItemText,
  Grid,
  Collapse,
  LinearProgress,
} from "@material-ui/core";

//icons
import { FilterList, LocationCity } from "@material-ui/icons";
import EmailIcon from "@material-ui/icons/Email";

//SimpleComponent
import Header from "../Component/header";
import Row from "../Component/Row";
import Button from "../Component/Button";
import DateRangePicker from "../Component/DateRangePicker";
// import DropdownButton from "../Component/DropdownButton";
import FilterBox from "../Component/FilterBox";
import Pagination from "../Component/Pagination";
import AllCheckBar from "../Component/AllCheckBar";

// classe de style

const useStyles = makeStyles({
  root: {
    justifyContent: "center",
  },
  main: {
    minHeight: "84vh",
    backgroundColor: "rgba(49,54,70, 0.1)",
    paddingTop: "30px",
    padding: "50px",
    position: "relative",
  },
  tab: {
    marginTop: 10,
    display: "flex",
    justifyContent: "space-between",
  },
  box: {
    width: "inherit",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  heads: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "40px 0px 40px 0px",
  },
  switch: {
    height: 40,
    width: 150,
    backgroundColor: "#fff",
    textAlign: "center",
    borderRadius: 5,
    marginRight: 15,
    marginLeft: 15,
  },
  div: {
    display: "flex",
    alignItems: "center",
  },
  icone: {
    marginRight: 10,
  },
  flagReported: {
    marginRight: 10,
    color: "#e94e27",
  },
  filter: {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px",
    marginBottom: "30px",
    alignItems: "center",
  },
});

const Dashboard = () => {
  const classes = useStyles();
  const [Color, SetColor] = useState("#000");
  const [Active, setActive] = useState(false);
  const [tabRowUser, setTabRowUser] = useState([]);

  const getDataUser = async () => {
    const settings = {
      method: "GET",
      //   credentials: "include",
      headers: {
        // Authorization: `Bearer ${localStorage.getItem("tokenUser")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    try {
      const fetchResponse = await fetch(
        `https://team.momji.fr/api/v2/static/employees`,
        settings
      );
      if (!fetchResponse.ok && fetchResponse.status === 403) {
        // localStorage.removeItem("tokenUser");
        window.location.reload();
      } else {
        const data = await fetchResponse.json();
        console.log(
          "🚀 ~ file: dashboard.js ~ line 124 ~ getDataUser ~ data",
          data
        );
        setTabRowUser(data);
      }
    } catch (error) {
      console.log("FETCH ERROR LIST USER ADMIN -------> ", error);
    }
  };

  useEffect(() => {
    getDataUser();
  }, []);

  /**
|--------------------------------------------------
| toogle filter and filter button color
|--------------------------------------------------
*/

  const openFilter = () => {
    SetColor(Color === "#000" ? "#e94e24" : "#000");
    setActive((Active) => !Active);
  };

  /**
  |--------------------------------------------------
  | function for pagination
  |
  */

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //   -----------------------------------------------------------
  //   -----------------------------------------------------------

  /**
  |--------------------------------------------------
  | fonction change active filter
  |--------------------------------------------------
  */

  const [filterValue, setFilterValue] = useState({
    active: "All",
  });

  const changeFilterValue = (event, filter) => {
    setFilterValue({ ...filterValue, [filter]: event.target.value });
  };
  /**
|--------------------------------------------------
| recuperation date 
|--------------------------------------------------
*/

  const [fromDate, setFromDate] = useState(new Date("2010-01-01T21:11:54"));
  const [toDate, setToDate] = useState(new Date());

  const changeToDate = (newDate) => {
    setToDate(newDate);
  };
  const changeFromDate = (newDate) => {
    setFromDate(newDate);
  };

  /**
  |--------------------------------------------------
  | fonction qui autocomplete les search bar 
  |--------------------------------------------------
  */

  const [autoComplete, setAutoComplete] = useState({
    firstName: "",
    lastName: "",
  });

  const autoCompleteChange = (event, input) => {
    setAutoComplete({
      ...autoComplete,
      [input]: event.target.value.toLowerCase(),
    });
  };

  /**
  |--------------------------------------------------
  | fonction qui initialise les filtres
  |--------------------------------------------------
  */
  const initialFilter = () => {
    setFilterValue({ active: "All" });
    setAutoComplete({
      firstName: "",
      lastName: "",
    });
    setFromDate(new Date("2010-01-01T21:11:54"));
    setToDate(new Date());
  };

  /**
  |--------------------------------------------------
  | fonction qui filtre les rows
  |--------------------------------------------------
  */

  const tabfiltre =
    tabRowUser &&
    tabRowUser
      .filter((row) => {
        if (!autoComplete) {
          return row;
        }
        if (
          row.profile.firstName.toLowerCase().includes(autoComplete.firstName)
        ) {
          if (
            row.profile.firstName
              .toLowerCase()
              .indexOf(autoComplete.firstName) === 0
          ) {
            return row;
          }
        }
        return null;
      })
      .filter((row) => {
        if (!autoComplete) {
          return row;
        }
        if (
          row.profile.lastName.toLowerCase().includes(autoComplete.lastName)
        ) {
          if (
            row.profile.lastName
              .toLowerCase()
              .indexOf(autoComplete.lastName) === 0
          ) {
            return row;
          }
        }
        return null;
      })
      .filter((row) => {
        if (filterValue.active === "true" && row.isActive === true) return row;
        else if (filterValue.active === "false" && row.isActive === false)
          return row;
        else if (filterValue.active === "All") return row;
        else return null;
      })
      .filter((row) => {
        var time = new Date(row.registered);
        var maxDate = new Date(toDate.setHours(0, 0, 0, 0));
        return (
          fromDate.setHours(0, 0, 0, 0) <= time &&
          time < maxDate.setDate(maxDate.getDate() + 1)
        );
      });

  return (
    <Grid items xs={12}>
      <Header />
      <div className={classes.main}>
        {/**
   |--------------------------------------------------
   | searchbar 
   |--------------------------------------------------
        */}

        <div className={classes.heads}>
          {/* <AlertBas openbar={alert} closebar={() => setAlert(false)} /> */}
          <Button
            color="#000"
            backgroundcolor="#fff"
            onClick={() => openFilter()}
            style={{ minWidth: "140px" }}
          >
            Filter
            <FilterList style={{ marginLeft: "20px", color: Color }} />
          </Button>
        </div>

        {/**
   |--------------------------------------------------
   | liste de filtre 
   |--------------------------------------------------
        */}
        <Collapse in={Active}>
          <FilterBox onClickRefresh={initialFilter}>
            <div className={classes.filter}>
              <TextField
                // required
                list="auto_Complete"
                name="autoComplete"
                type="text"
                placeholder="Search FirstName"
                value={autoComplete.firstName}
                onChange={(event) => autoCompleteChange(event, "firstName")}
              />
              {tabfiltre.length !== 0 && (
                <datalist id="auto_Complete_firstName">
                  {tabfiltre.map((element) => {
                    return (
                      <option
                        key={element.profile.firstName}
                        value={`${element.profile.firstName}`}
                      />
                    );
                  })}
                </datalist>
              )}
              <TextField
                // required
                // style={{ paddingLeft: "10rem", margin: "5rem 0rem" }}
                list="auto_Complete"
                name="autoComplete"
                type="text"
                // className="rounded-md border-gray-300 focus:border-axeBlue my-5 w-full pl-10"
                placeholder="Search LastName"
                value={autoComplete.lastName}
                onChange={(event) => autoCompleteChange(event, "lastName")}
              />
              {tabfiltre.length !== 0 && (
                <datalist id="auto_Complete_lastName">
                  {tabfiltre.map((element) => {
                    return (
                      <option
                        key={element.profile.lastName}
                        value={`${element.profile.lastName}`}
                      />
                    );
                  })}
                </datalist>
              )}
              <DateRangePicker to={changeToDate} from={changeFromDate} />
              <Select
                style={{ minWidth: "150px", textAlign: "center" }}
                text="Activé"
                onChange={(event) => changeFilterValue(event, "active")}
                value={filterValue.active}
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="true">Activé</MenuItem>
                <MenuItem value="false">Desactiver</MenuItem>
              </Select>
            </div>
          </FilterBox>
        </Collapse>

        {/**
    |--------------------------------------------------
    | Proprieter pour faire fonctionner le checkbox all 
    | 
    |--------------------------------------------------
        */}
        <AllCheckBar
          total={tabRowUser && tabRowUser.length}
          filter={tabfiltre && tabfiltre.length}
        />
        {/**
    |--------------------------------------------------
    | list des rows
    |--------------------------------------------------
        */}
        {tabfiltre.length !== 0 ? (
          tabfiltre
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => {
              return (
                <Row
                  key={row.id}
                  alt={row.avatar}
                  img={row.avatar}
                  to={`/simpleUser/${row.id}`}
                  data={row}
                >
                  <Grid container>
                    <Grid items xs={1} className={classes.div}></Grid>
                    <Grid items xs={4} className={classes.div}>
                      <ListItemText style={{ flex: "1" }}>
                        {row.profile.firstName}
                      </ListItemText>
                      <ListItemText style={{ flex: "1" }}>
                        {row.profile.lastName}
                      </ListItemText>
                      <ListItemText>{DateFormat(row.registered)}</ListItemText>
                    </Grid>
                    <Grid items xs={3} className={classes.div}>
                      <EmailIcon />
                      <ListItemText style={{ marginLeft: "10px" }}>
                        {row.email}
                      </ListItemText>
                    </Grid>

                    <Grid items xs={3} className={classes.div}>
                      <LocationCity />
                      <ListItemText style={{ marginLeft: "10px" }}>
                        {row.address}
                      </ListItemText>
                    </Grid>
                  </Grid>
                </Row>
              );
            })
        ) : (
          <LinearProgress />
        )}

        {/**
    |--------------------------------------------------
    | pagination
    |--------------------------------------------------
        */}

        <Pagination
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          count={tabfiltre ? tabfiltre.length : tabRowUser && tabRowUser.length}
        />
      </div>
    </Grid>
  );
};

export default Dashboard;
