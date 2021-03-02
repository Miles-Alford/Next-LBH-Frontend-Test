
export default function Home() {
  return (
    <div className="govuk-tabs  lbh-tabs" data-module="govuk-tabs">
      <h2 className="govuk-tabs__title">Contents</h2>
      <ul className="govuk-tabs__list">
        <li className="govuk-tabs__list-item govuk-tabs__list-item--selected">
          <a className="govuk-tabs__tab" href="#past-day"> Past day </a>
        </li>
        <li className="govuk-tabs__list-item">
          <a className="govuk-tabs__tab" href="#past-week"> Past week </a>
        </li>
        <li className="govuk-tabs__list-item">
          <a className="govuk-tabs__tab" href="#past-month"> Past month </a>
        </li>
        <li className="govuk-tabs__list-item">
          <a className="govuk-tabs__tab" href="#past-year"> Past year </a>
        </li>
      </ul>
      <section className="govuk-tabs__panel" id="past-day">
        <h2 className="lbh-heading-h2">Past day</h2>
        <table className="govuk-table">
          <thead className="govuk-table__head">
            <tr className="govuk-table__row">
              <th className="govuk-table__header" scope="col">Case manager</th>
              <th className="govuk-table__header" scope="col">Cases opened</th>
              <th className="govuk-table__header" scope="col">Cases closed</th>
            </tr>
          </thead>
          <tbody className="govuk-table__body">
            <tr className="govuk-table__row">
              <td className="govuk-table__cell">David Francis</td>
              <td className="govuk-table__cell">3</td>
              <td className="govuk-table__cell">0</td>
            </tr>
            <tr className="govuk-table__row">
              <td className="govuk-table__cell">Paul Farmer</td>
              <td className="govuk-table__cell">1</td>
              <td className="govuk-table__cell">0</td>
            </tr>
            <tr className="govuk-table__row">
              <td className="govuk-table__cell">Rita Patel</td>
              <td className="govuk-table__cell">2</td>
              <td className="govuk-table__cell">0</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-week">
        <h2 className="lbh-heading-h2">Past week</h2>
        <table className="govuk-table">
          <thead className="govuk-table__head">
            <tr className="govuk-table__row">
              <th className="govuk-table__header" scope="col">Case manager</th>
              <th className="govuk-table__header" scope="col">Cases opened</th>
              <th className="govuk-table__header" scope="col">Cases closed</th>
            </tr>
          </thead>
          <tbody className="govuk-table__body">
            <tr className="govuk-table__row">
              <td className="govuk-table__cell">David Francis</td>
              <td className="govuk-table__cell">24</td>
              <td className="govuk-table__cell">18</td>
            </tr>
            <tr className="govuk-table__row">
              <td className="govuk-table__cell">Paul Farmer</td>
              <td className="govuk-table__cell">16</td>
              <td className="govuk-table__cell">20</td>
            </tr>
            <tr className="govuk-table__row">
              <td className="govuk-table__cell">Rita Patel</td>
              <td className="govuk-table__cell">24</td>
              <td className="govuk-table__cell">27</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-month">
        <h2 className="lbh-heading-h2">Past month</h2>
        <table className="govuk-table">
          <thead className="govuk-table__head">
            <tr className="govuk-table__row">
              <th className="govuk-table__header" scope="col">Case manager</th>
              <th className="govuk-table__header" scope="col">Cases opened</th>
              <th className="govuk-table__header" scope="col">Cases closed</th>
            </tr>
          </thead>
          <tbody className="govuk-table__body">
            <tr className="govuk-table__row">
              <td className="govuk-table__cell">David Francis</td>
              <td className="govuk-table__cell">98</td>
              <td className="govuk-table__cell">95</td>
            </tr>
            <tr className="govuk-table__row">
              <td className="govuk-table__cell">Paul Farmer</td>
              <td className="govuk-table__cell">122</td>
              <td className="govuk-table__cell">131</td>
            </tr>
            <tr className="govuk-table__row">
              <td className="govuk-table__cell">Rita Patel</td>
              <td className="govuk-table__cell">126</td>
              <td className="govuk-table__cell">142</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-year">
        <h2 className="lbh-heading-h2">Past year</h2>
        <table className="govuk-table">
          <thead className="govuk-table__head">
            <tr className="govuk-table__row">
              <th className="govuk-table__header" scope="col">Case manager</th>
              <th className="govuk-table__header" scope="col">Cases opened</th>
              <th classNameName="govuk-table__header" scope="col">Cases closed</th>
            </tr>
          </thead>
          <tbody className="govuk-table__body">
            <tr className="govuk-table__row">
              <td className="govuk-table__cell">David Francis</td>
              <td className="govuk-table__cell">1380</td>
              <td className="govuk-table__cell">1472</td>
            </tr>
            <tr className="govuk-table__row">
              <td className="govuk-table__cell">Paul Farmer</td>
              <td className="govuk-table__cell">1129</td>
              <td className="govuk-table__cell">1083</td>
            </tr>
            <tr className="govuk-table__row">
              <td className="govuk-table__cell">Rita Patel</td>
              <td className="govuk-table__cell">1539</td>
              <td className="govuk-table__cell">1265</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}
