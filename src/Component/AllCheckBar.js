import React from "react";

/*
|--------------------------------------------------
|                     allCheckBAr
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
| total: number;
| Filtré='number';
|
|
|--------------------------------------------------
*/

const AllChekBar = (props) => {
  const { filter, total } = props;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "start",
        marginTop: "30px",
        marginLeft: "20px",
      }}
    >
      <p style={{ marginRight: "50px" }}>Total : {total}</p>
      {filter && filter !== 0 ? (
        <p style={{ marginRight: "50px" }}>Filtré : {filter}</p>
      ) : (
        <></>
      )}
      {filter === 0 && <p style={{ marginRight: "50px" }}>Filtré : 0 </p>}
    </div>
  );
};

export default AllChekBar;
