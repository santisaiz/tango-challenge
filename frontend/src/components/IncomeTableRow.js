import React from "react";

const IncomeTableRow = (props) => {

  return (
    <tr>
      <td>{props.obj[0]}</td>
      <td>{props.obj[1]}</td>
    </tr>
  );
};

export default IncomeTableRow;
