import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://www.allthetests.com/quiz22/picture/pic_1171831236_1.png"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Amal T S</span>
            </td>
            <td className="widgetLgDate">2 jan 2022</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://www.allthetests.com/quiz22/picture/pic_1171831236_1.png"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Amal T S</span>
            </td>
            <td className="widgetLgDate">2 jan 2022</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://www.allthetests.com/quiz22/picture/pic_1171831236_1.png"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Amal T S</span>
            </td>
            <td className="widgetLgDate">2 jan 2022</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://www.allthetests.com/quiz22/picture/pic_1171831236_1.png"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Amal T S</span>
            </td>
            <td className="widgetLgDate">2 jan 2022</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
