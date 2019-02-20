import React from 'react';

const TableRow = props => {
  const { index, name, rowId, published } = props;
  return (
    <tr>
      <td scope="row">{ index }</td>
      <td>{ name }</td>
      <td>{ rowId }</td>
      <td>{ published }</td>
    </tr>
  )
}

export default TableRow;