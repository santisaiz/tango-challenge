import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BracketTableRow = (props) => {

  
  const remove = (id) => {
    
  };

  
  const edit = (id) => {
    
  };

  return (
    <tr>
      <td>{props.obj.min}</td>
      <td>{props.obj.max}</td>
      <td>{props.obj.tax}</td>
      <td>
        <button onClick={edit(props.obj.id)} className="btn btn-primary" disabled>
          Edit
        </button>
      </td>
      <td>
        <button onClick={remove(props.obj.id)} className="btn btn-danger" disabled>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default BracketTableRow;
