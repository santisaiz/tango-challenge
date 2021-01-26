import React, { useEffect, useState } from "react";
import axios from "axios";
import BracketTableRow from "./BracketTableRow";
import IncomeTableRow from "./IncomeTableRow";

const Calculator = (props) => {
  const [brackets, setBrackets] = useState([]);
  const [income, setIncome] = useState(0);
  const [incomeList, setIncomeList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/v1/calculator")
      .then((response) => {
        setBrackets(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [setBrackets]);

  const bracketRow = () => {
    return brackets.map(function (object, i) {
      return <BracketTableRow obj={object} key={i} />;
    });
  };

  const incomeRow = () => {
    return incomeList.map(function (object, i) {
      return <IncomeTableRow obj={object} key={i} />;
    });
  };

  const process = () => {
    axios
      .post("http://localhost:3001/api/v1/calculator", {
        incomeList: {
          ...incomeList.map((x) => x.income),
        },
      })
      .then(function (response) {
        // your action after success 
        setIncomeList(response.data);
      })
      .catch(function (error) {
        // your action on error success
        console.log(error);
      });
  };

  return (
    <div>
      <h3 align="center">Brackets List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Min</th>
            <th>Max</th>
            <th>Tax %</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>{bracketRow()}</tbody>
      </table>

      <h3 align="center">Income calculator </h3>

      <h6 align="left">
        * Press enter to add new incomes (only > 0 values), when finish, click
        process button{" "}. Press Clear to empty table.
      </h6>

      <div class="input-group mb-3">
        <input
          type="number"
          class="form-control"
          placeholder="Income"
          aria-label="Income"
          aria-describedby="basic-addon2"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          onKeyPress={(e) => {
            const value = Number(e.target.value);

            if (e.charCode === 13 && value > 0) {
              incomeList.push({ income: value, tax: "" });
              setIncomeList(incomeList);
              setIncome(0);
            }
          }}
        />
        <div class="input-group-append">
          <button onClick={process} className="btn btn-primary">
            Process
          </button>
        </div>
        <div class="input-group-append">
          <button
            onClick={(e) => setIncomeList([])}
            className="btn btn-secondary"
          >
            Clear
          </button>
        </div>
      </div>

      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Income</th>
            <th>Tax</th>
          </tr>
        </thead>
        <tbody>{incomeRow()}</tbody>
      </table>
    </div>
  );
};

export default Calculator;
