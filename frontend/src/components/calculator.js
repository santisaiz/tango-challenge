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
    let payload = {
      incomeList: { incomeList },
    };

    axios
      .post("http://localhost:3001/api/v1/calculator", {
        incomeList: {
          ...(incomeList.map(x => x.income)),
        },
      })
      .then(function (response) {
        // your action after success
        setIncomeList(response.data)
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
      <tr>
        <td>
          <input
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            type="number"
            onKeyPress={(e) => {
              const value = Number(e.target.value);

              if (e.charCode === 13 && value > 0) {
                incomeList.push({income: value,tax:''});
                setIncomeList(incomeList);
                setIncome(0);
              }
            }}
          />
        </td>
        <td>
          <button onClick={process} className="btn btn-primary">
            Process
          </button>
        </td>
      </tr>
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
