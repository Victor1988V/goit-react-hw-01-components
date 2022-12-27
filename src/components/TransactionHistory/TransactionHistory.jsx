import PropTypes from "prop-types";

import { Table, Thead, TableRow } from "./Transaction.styled";

export default function TransactionHistory({ transactions }) {
  return (
    <Table>
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <TableRow key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </TableRow>
          );
        })}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
