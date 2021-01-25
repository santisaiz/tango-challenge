import React from "react";

const IncomeTableRow = (props) => {

  return (
    <tr>
      <td>{props.obj.income}</td>
      <td>{props.obj.tax}</td>
    </tr>
  );
};

export default IncomeTableRow;
