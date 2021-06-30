import { Table } from "reactstrap";
import PortfolioModal from "./PortfolioModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

function PortfolioList(props) {
  const portfolios = props.portfolios;
  return (
    <Table dark>
      <thead>
        <tr>
          <th>Title</th>
          <th>Place</th>
          <th>Description</th>
          <th>Is real work?</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {!portfolios || portfolios.length <= 0 ? (
          <tr>
            <td colSpan="6" align="center">
              <b>Ops, nothing here yet</b>
            </td>
          </tr>
        ) : (
          portfolios.map(portfolio => (
            <tr key={portfolio.pk}>
              <td>{portfolio.title}</td>
              <td>{portfolio.place}</td>
              <td>{portfolio.description}</td>
              <td>{String(portfolio.isWork)}</td>
              <td align="center">
                <PortfolioModal
                  create={false}
                  portfolio={portfolio}
                  resetState={props.resetState}
                />
                &nbsp;&nbsp;
                <ConfirmRemovalModal
                  pk={portfolio.pk}
                  resetState={props.resetState}
                />
              </td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
}

export default PortfolioList;