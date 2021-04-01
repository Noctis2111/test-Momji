import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableFooter,
  TablePagination,
  TableRow,
  IconButton,
} from "@material-ui/core";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import LastPageIcon from "@material-ui/icons/LastPage";

const useStyles1 = makeStyles({
  root: {
    flexShrink: 0,
  },
});

const TablePaginationActions = (props) => {
  const classes = useStyles1();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <LastPageIcon />
      </IconButton>
    </div>
  );
};

/**
|--------------------------------------------------
| Défault Type
|--------------------------------------------------
*/

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const Pagination = (props) => {
  return (
    <Table style={{ backgroundColor: "#fff" }}>
      <TableFooter>
        <TableRow>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            colSpan={3}
            count={props.count}
            rowsPerPage={props.rowsPerPage}
            page={props.page}
            SelectProps={{
              inputProps: { "aria-label": "rows per page" },
              native: true,
            }}
            onChangePage={props.handleChangePage}
            onChangeRowsPerPage={props.handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
          />
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default Pagination;
