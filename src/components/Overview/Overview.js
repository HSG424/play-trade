import { Fragment } from "react";
import "./Overview.scss";

import PieChart from "./PieChart";

const Overview = () => {
  return (
    <Fragment>
      <h3 className="h3-layout">Asset Breakdown</h3>
      <div className="pie-width">
        <PieChart />
      </div>

      <h3 className="h3-layout">Your Assets</h3>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Name</th>
              <th scope="col">% of Portfolio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Stock</td>
              <td>Apple</td>
              <td>26%</td>
            </tr>
            <tr>
              <td>Stock</td>
              <td>Coca-Cola</td>
              <td>24%</td>
            </tr>
            <tr>
              <td>Stock</td>
              <td>Volkswagen</td>
              <td>7%</td>
            </tr>
            <tr>
              <td>Stock</td>
              <td>Amazon</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>EFT</td>
              <td>Vanguard Energy</td>
              <td>4%</td>
            </tr>
            <tr>
              <td>EFT</td>
              <td>iShares U.S. Energy</td>
              <td>4%</td>
            </tr>
            <tr>
              <td>Mutual Fund</td>
              <td>Invesco</td>
              <td>15%</td>
            </tr>
            <tr>
              <td>Precious Metal</td>
              <td>Gold</td>
              <td>3%</td>
            </tr>
            <tr>
              <td>Precious Metal</td>
              <td>Silver</td>
              <td>12%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Overview;
